import uuid
from datetime import datetime, timezone
from pathlib import Path

import cloudinary
import cloudinary.uploader

from fastapi import APIRouter, Depends, HTTPException, UploadFile
from sqlalchemy import select
from sqlalchemy.orm import Session

from app.core.config import settings
from app.core.database import get_db
from app.deps import require_admin
from app.models import BlogPost, User
from app.schemas import (
    BlogPostAdminOut,
    BlogPostCreate,
    BlogPostListOut,
    BlogPostOut,
    BlogPostUpdate,
)
from app.services.blog import sanitize_html, slugify

router = APIRouter(prefix="/blog", tags=["blog"])
admin_router = APIRouter(prefix="/admin/blog", tags=["admin-blog"])

ALLOWED_IMAGE_TYPES = {
    "image/jpeg": ".jpg",
    "image/png": ".png",
    "image/webp": ".webp",
    "image/gif": ".gif",
}


@router.get("", response_model=list[BlogPostListOut])
def list_posts(db: Session = Depends(get_db)):
    return db.scalars(
        select(BlogPost)
        .where(BlogPost.is_published.is_(True))
        .order_by(BlogPost.published_at.desc())
    ).all()


@router.get("/{slug}", response_model=BlogPostOut)
def get_post(slug: str, db: Session = Depends(get_db)):
    post = db.scalar(
        select(BlogPost).where(
            BlogPost.slug == slug, BlogPost.is_published.is_(True)
        )
    )
    if not post:
        raise HTTPException(status_code=404, detail="Post not found")
    return post


def _unique_slug(db: Session, base: str, exclude_id: int | None = None) -> str:
    slug = slugify(base)
    candidate = slug
    n = 2
    while True:
        q = select(BlogPost.id).where(BlogPost.slug == candidate)
        if exclude_id is not None:
            q = q.where(BlogPost.id != exclude_id)
        if db.scalar(q) is None:
            return candidate
        candidate = f"{slug}-{n}"
        n += 1


@admin_router.get("", response_model=list[BlogPostAdminOut])
def admin_list_posts(
    db: Session = Depends(get_db), staff: User = Depends(require_admin)
):
    return db.scalars(select(BlogPost).order_by(BlogPost.created_at.desc())).all()


@admin_router.get("/{post_id}", response_model=BlogPostAdminOut)
def admin_get_post(
    post_id: int, db: Session = Depends(get_db), staff: User = Depends(require_admin)
):
    post = db.get(BlogPost, post_id)
    if not post:
        raise HTTPException(status_code=404, detail="Post not found")
    return post


@admin_router.post("", response_model=BlogPostAdminOut, status_code=201)
def admin_create_post(
    body: BlogPostCreate,
    db: Session = Depends(get_db),
    staff: User = Depends(require_admin),
):
    data = body.model_dump()
    data["slug"] = _unique_slug(db, data["slug"] or data["title"])
    data["content"] = sanitize_html(data["content"])
    if data["is_published"]:
        data["published_at"] = datetime.now(timezone.utc).replace(tzinfo=None)
    else:
        data["published_at"] = None

    post = BlogPost(**data)
    db.add(post)
    db.commit()
    db.refresh(post)
    return post


@admin_router.patch("/{post_id}", response_model=BlogPostAdminOut)
def admin_update_post(
    post_id: int,
    body: BlogPostUpdate,
    db: Session = Depends(get_db),
    staff: User = Depends(require_admin),
):
    post = db.get(BlogPost, post_id)
    if not post:
        raise HTTPException(status_code=404, detail="Post not found")

    data = body.model_dump(exclude_unset=True)
    if "slug" in data:
        data["slug"] = _unique_slug(db, data["slug"] or data.get("title") or post.title, post.id)
    if "content" in data and data["content"] is not None:
        data["content"] = sanitize_html(data["content"])

    was_published = post.is_published
    for field, value in data.items():
        setattr(post, field, value)

    if post.is_published and not was_published:
        post.published_at = datetime.now(timezone.utc).replace(tzinfo=None)
    elif not post.is_published:
        post.published_at = None

    db.commit()
    db.refresh(post)
    return post


@admin_router.delete("/{post_id}", status_code=204)
def admin_delete_post(
    post_id: int, db: Session = Depends(get_db), staff: User = Depends(require_admin)
):
    post = db.get(BlogPost, post_id)
    if not post:
        raise HTTPException(status_code=404, detail="Post not found")
    db.delete(post)
    db.commit()


@admin_router.post("/upload-image")
async def admin_upload_image(
    file: UploadFile, staff: User = Depends(require_admin)
):
    ext = ALLOWED_IMAGE_TYPES.get(file.content_type or "")
    if not ext:
        raise HTTPException(status_code=400, detail="Unsupported image type")

    max_bytes = settings.MAX_UPLOAD_MB * 1024 * 1024
    contents = await file.read()
    if len(contents) > max_bytes:
        raise HTTPException(
            status_code=400, detail=f"Image exceeds {settings.MAX_UPLOAD_MB}MB limit"
        )

    # ── Cloudinary upload (if credentials are configured) ──────────────────
    if settings.CLOUDINARY_CLOUD_NAME and settings.CLOUDINARY_API_KEY:
        cloudinary.config(
            cloud_name=settings.CLOUDINARY_CLOUD_NAME,
            api_key=settings.CLOUDINARY_API_KEY,
            api_secret=settings.CLOUDINARY_API_SECRET,
        )
        result = cloudinary.uploader.upload(
            contents,
            folder="alphainsiight/blog",
            resource_type="image",
            use_filename=False,
            unique_filename=True,
            overwrite=False,
        )
        return {"url": result["secure_url"]}

    # ── Fallback: local disk (dev only) ────────────────────────────────────
    upload_dir = Path(settings.UPLOAD_DIR)
    upload_dir.mkdir(parents=True, exist_ok=True)
    filename = f"{uuid.uuid4().hex}{ext}"
    (upload_dir / filename).write_bytes(contents)
    return {"url": f"/static/uploads/{filename}"}

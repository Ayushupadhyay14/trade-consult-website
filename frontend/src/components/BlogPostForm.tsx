"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import { api, API_ORIGIN } from "@/lib/api";
import { ensureHtmlContent } from "@/lib/htmlContent";
import type { BlogPostAdmin, BlogPostInput } from "@/lib/types";

const BlogEditor = dynamic(() => import("@/components/BlogEditor"), {
  ssr: false,
  loading: () => (
    <div className="flex h-[460px] items-center justify-center rounded-2xl border border-slate-200 bg-white text-sm text-slate-400">
      Loading editor…
    </div>
  ),
});

function slugify(text: string) {
  return text
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export default function BlogPostForm({ initial }: { initial?: BlogPostAdmin }) {
  const router = useRouter();
  const coverInput = useRef<HTMLInputElement>(null);

  const [title, setTitle] = useState(initial?.title ?? "");
  const [slug, setSlug] = useState(initial?.slug ?? "");
  const [slugTouched, setSlugTouched] = useState(Boolean(initial));
  const [excerpt, setExcerpt] = useState(initial?.excerpt ?? "");
  const [author, setAuthor] = useState(initial?.author ?? "Research Desk");
  const [coverImage, setCoverImage] = useState<string | null>(
    initial?.cover_image ?? null
  );
  const [content, setContent] = useState(ensureHtmlContent(initial?.content ?? ""));
  const [coverUploading, setCoverUploading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  const onTitleChange = (v: string) => {
    setTitle(v);
    if (!slugTouched) setSlug(slugify(v));
  };

  const onCoverPick = () => coverInput.current?.click();

  const onCoverSelected = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    e.target.value = "";
    if (!file) return;
    setCoverUploading(true);
    setError("");
    try {
      const { url } = await api.upload<{ url: string }>(
        "/admin/blog/upload-image",
        file
      );
      setCoverImage(url);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Cover upload failed");
    } finally {
      setCoverUploading(false);
    }
  };

  const save = async (publish: boolean) => {
    if (!title.trim()) {
      setError("Title is required.");
      return;
    }
    setSaving(true);
    setError("");
    const payload: BlogPostInput = {
      title: title.trim(),
      slug: slug.trim() || undefined,
      excerpt: excerpt.trim(),
      content,
      cover_image: coverImage,
      author: author.trim() || "Research Desk",
      is_published: publish,
    };
    try {
      if (initial) {
        await api.patch(`/admin/blog/${initial.id}`, payload, true);
      } else {
        const created = await api.post<BlogPostAdmin>("/admin/blog", payload, true);
        router.replace(`/admin/blog/${created.id}/edit`);
        return;
      }
      router.push("/admin/blog");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to save post");
    } finally {
      setSaving(false);
    }
  };

  const remove = async () => {
    if (!initial) return;
    if (!window.confirm(`Delete "${initial.title}"? This cannot be undone.`)) return;
    try {
      await api.del(`/admin/blog/${initial.id}`, true);
      router.push("/admin/blog");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to delete post");
    }
  };

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
      <div className="space-y-4">
        <input
          className="w-full border-none bg-transparent text-3xl font-extrabold tracking-tight text-navy-900 placeholder-slate-300 focus:outline-none"
          placeholder="Post title"
          value={title}
          onChange={(e) => onTitleChange(e.target.value)}
        />
        <input
          className="input"
          placeholder="Short excerpt shown on the blog listing card…"
          value={excerpt}
          onChange={(e) => setExcerpt(e.target.value)}
        />
        <BlogEditor value={content} onChange={setContent} />
      </div>

      <div className="space-y-6">
        {error && (
          <p className="rounded-lg bg-rose-50 p-3 text-sm text-rose-700">{error}</p>
        )}

        <div className="card space-y-4">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            Publish
          </h3>
          <button
            onClick={() => save(true)}
            disabled={saving}
            className="btn-primary w-full"
          >
            {initial?.is_published ? "Save & Keep Published" : "Publish"}
          </button>
          <button
            onClick={() => save(false)}
            disabled={saving}
            className="btn-dark w-full"
          >
            Save Draft
          </button>
          {initial && (
            <button
              onClick={remove}
              className="w-full rounded-lg border border-rose-200 px-4 py-2 text-sm font-semibold text-rose-600 hover:bg-rose-50"
            >
              Delete Post
            </button>
          )}
        </div>

        <div className="card space-y-3">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            Slug
          </h3>
          <input
            className="input font-mono text-sm"
            value={slug}
            onChange={(e) => {
              setSlugTouched(true);
              setSlug(slugify(e.target.value));
            }}
          />
          <p className="text-xs text-slate-400">/blog/{slug || "…"}</p>
        </div>

        <div className="card space-y-3">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            Author
          </h3>
          <input
            className="input"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>

        <div className="card space-y-3">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            Cover Image
          </h3>
          {coverImage ? (
            <div className="space-y-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`${API_ORIGIN}${coverImage}`}
                alt="Cover"
                className="aspect-video w-full rounded-lg object-cover"
              />
              <button
                onClick={() => setCoverImage(null)}
                className="text-xs font-semibold text-rose-600 hover:underline"
              >
                Remove cover image
              </button>
            </div>
          ) : (
            <button
              onClick={onCoverPick}
              disabled={coverUploading}
              className="flex aspect-video w-full items-center justify-center rounded-lg border-2 border-dashed border-slate-300 text-sm text-slate-400 hover:border-brand-500 hover:text-brand-600"
            >
              {coverUploading ? "Uploading…" : "Upload cover image"}
            </button>
          )}
          <input
            ref={coverInput}
            type="file"
            accept="image/png,image/jpeg,image/webp,image/gif"
            className="hidden"
            onChange={onCoverSelected}
          />
        </div>
      </div>
    </div>
  );
}

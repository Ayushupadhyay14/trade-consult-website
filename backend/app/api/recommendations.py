from datetime import datetime, timezone

from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy import select
from sqlalchemy.orm import Session

from app.core.database import get_db
from app.deps import get_current_user
from app.models import (
    CallStatus,
    Recommendation,
    Subscription,
    SubscriptionStatus,
    User,
    UserRole,
)
from app.schemas import RecommendationOut, TrackRecord, TrackRecordStats

router = APIRouter(prefix="/recommendations", tags=["recommendations"])


def _visible_plan_ids(db: Session, user: User) -> list[int] | None:
    """None means "every plan" (staff see everything)."""
    if user.role in (UserRole.analyst, UserRole.admin):
        return None
    rows = db.scalars(
        select(Subscription.plan_id).where(
            Subscription.user_id == user.id,
            Subscription.status == SubscriptionStatus.active,
        )
    ).all()
    return list(rows)


@router.get("/live", response_model=list[RecommendationOut])
def live_calls(
    db: Session = Depends(get_db), user: User = Depends(get_current_user)
):
    """Open calls: all of them for staff, or the caller's subscribed plans."""
    plan_ids = _visible_plan_ids(db, user)
    query = select(Recommendation).where(Recommendation.status == CallStatus.open)
    if plan_ids is not None:
        if not plan_ids:
            raise HTTPException(
                status_code=403,
                detail="No active subscription. Subscribe to a plan to view live calls.",
            )
        query = query.where(Recommendation.plan_id.in_(plan_ids))
    return db.scalars(query.order_by(Recommendation.created_at.desc())).all()


@router.get("/history", response_model=list[RecommendationOut])
def my_history(
    db: Session = Depends(get_db), user: User = Depends(get_current_user)
):
    plan_ids = _visible_plan_ids(db, user)
    query = select(Recommendation)
    if plan_ids is not None:
        if not plan_ids:
            raise HTTPException(status_code=403, detail="No active subscription.")
        query = query.where(Recommendation.plan_id.in_(plan_ids))
    return db.scalars(
        query.order_by(Recommendation.created_at.desc()).limit(100)
    ).all()


@router.get("/track-record", response_model=TrackRecord)
def track_record(db: Session = Depends(get_db)):
    """PUBLIC verified track record — the trust-builder competitors don't have."""
    closed = db.scalars(
        select(Recommendation)
        .where(Recommendation.status != CallStatus.open)
        .order_by(Recommendation.closed_at.desc())
        .limit(200)
    ).all()

    total = len(closed)
    target_hit = sum(1 for c in closed if c.status == CallStatus.target_hit)
    sl_hit = sum(1 for c in closed if c.status == CallStatus.sl_hit)

    returns: list[float] = []
    for c in closed:
        if c.exit_price and c.entry_price:
            entry = float(c.entry_price)
            exit_p = float(c.exit_price)
            ret = (exit_p - entry) / entry * 100
            if c.action.value == "SELL":
                ret = -ret
            returns.append(round(ret, 2))

    stats = TrackRecordStats(
        total_closed=total,
        target_hit=target_hit,
        sl_hit=sl_hit,
        accuracy_pct=round(target_hit / total * 100, 1) if total else 0.0,
        avg_return_pct=round(sum(returns) / len(returns), 2) if returns else 0.0,
    )
    return TrackRecord(stats=stats, calls=[RecommendationOut.model_validate(c) for c in closed])


@router.get("/{rec_id}", response_model=RecommendationOut)
def get_call(rec_id: int, db: Session = Depends(get_db)):
    rec = db.get(Recommendation, rec_id)
    if not rec:
        raise HTTPException(status_code=404, detail="Recommendation not found")
    return rec

from datetime import datetime, timezone

from fastapi import APIRouter, BackgroundTasks, Depends, HTTPException
from sqlalchemy import func, select
from sqlalchemy.orm import Session

from app.core.database import get_db
from app.deps import require_staff
from app.models import (
    CallStatus,
    Plan,
    Recommendation,
    Subscription,
    SubscriptionStatus,
    Ticket,
    TicketStatus,
    User,
)
from app.schemas import (
    RecommendationClose,
    RecommendationCreate,
    RecommendationOut,
    TicketOut,
)
from app.services.notifications import notify_new_recommendation
from app.services.ws import manager

router = APIRouter(prefix="/admin", tags=["admin"])


@router.post("/recommendations", response_model=RecommendationOut, status_code=201)
async def publish_call(
    body: RecommendationCreate,
    background: BackgroundTasks,
    db: Session = Depends(get_db),
    staff: User = Depends(require_staff),
):
    """Publish a call: store -> broadcast on WebSocket -> SMS/WhatsApp alerts."""
    plan = db.get(Plan, body.plan_id)
    if not plan or not plan.is_active:
        raise HTTPException(status_code=404, detail="Plan not found")

    rec = Recommendation(analyst_id=staff.id, **body.model_dump())
    db.add(rec)
    db.commit()
    db.refresh(rec)

    # 1) Instant push to all connected dashboards
    await manager.broadcast(
        {"type": "new_call", "data": RecommendationOut.model_validate(rec).model_dump(mode="json")}
    )

    # 2) SMS / WhatsApp to active subscribers of this plan
    phones = list(
        db.scalars(
            select(User.phone)
            .join(Subscription, Subscription.user_id == User.id)
            .where(
                Subscription.plan_id == plan.id,
                Subscription.status == SubscriptionStatus.active,
                User.is_active.is_(True),
            )
        ).all()
    )
    background.add_task(notify_new_recommendation, rec, phones)

    return rec


@router.patch("/recommendations/{rec_id}/close", response_model=RecommendationOut)
async def close_call(
    rec_id: int,
    body: RecommendationClose,
    db: Session = Depends(get_db),
    staff: User = Depends(require_staff),
):
    if body.status == CallStatus.open:
        raise HTTPException(status_code=400, detail="Use a closing status")
    rec = db.get(Recommendation, rec_id)
    if not rec:
        raise HTTPException(status_code=404, detail="Recommendation not found")
    if rec.status != CallStatus.open:
        raise HTTPException(status_code=400, detail="Call is already closed")

    rec.status = body.status
    rec.exit_price = body.exit_price
    rec.closed_at = datetime.now(timezone.utc).replace(tzinfo=None)
    db.commit()
    db.refresh(rec)

    await manager.broadcast(
        {"type": "call_closed", "data": RecommendationOut.model_validate(rec).model_dump(mode="json")}
    )
    return rec


@router.get("/stats")
def stats(db: Session = Depends(get_db), staff: User = Depends(require_staff)):
    total_users = db.scalar(select(func.count(User.id))) or 0
    active_subs = (
        db.scalar(
            select(func.count(Subscription.id)).where(
                Subscription.status == SubscriptionStatus.active
            )
        )
        or 0
    )
    open_calls = (
        db.scalar(
            select(func.count(Recommendation.id)).where(
                Recommendation.status == CallStatus.open
            )
        )
        or 0
    )
    open_tickets = (
        db.scalar(
            select(func.count(Ticket.id)).where(Ticket.status == TicketStatus.open)
        )
        or 0
    )
    return {
        "total_users": total_users,
        "active_subscriptions": active_subs,
        "open_calls": open_calls,
        "open_tickets": open_tickets,
    }


@router.get("/tickets", response_model=list[TicketOut])
def all_tickets(
    db: Session = Depends(get_db), staff: User = Depends(require_staff)
):
    return db.scalars(select(Ticket).order_by(Ticket.created_at.desc())).all()

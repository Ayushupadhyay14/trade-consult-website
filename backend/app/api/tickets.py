import secrets
from datetime import datetime

from fastapi import APIRouter, Depends
from sqlalchemy import select
from sqlalchemy.orm import Session

from app.core.database import get_db
from app.deps import get_current_user_optional
from app.models import Ticket, User
from app.schemas import TicketCreate, TicketOut

router = APIRouter(prefix="/tickets", tags=["tickets"])


def _ticket_no() -> str:
    return f"GRV-{datetime.now():%Y%m%d}-{secrets.token_hex(3).upper()}"


@router.post("", response_model=TicketOut, status_code=201)
def create_ticket(
    body: TicketCreate,
    db: Session = Depends(get_db),
    user: User | None = Depends(get_current_user_optional),
):
    """Public grievance / contact form (SEBI grievance redressal system).

    Works for both anonymous visitors and logged-in subscribers.
    """
    ticket = Ticket(
        ticket_no=_ticket_no(),
        user_id=user.id if user else None,
        **body.model_dump(),
    )
    db.add(ticket)
    db.commit()
    db.refresh(ticket)
    return ticket


@router.get("/my", response_model=list[TicketOut])
def my_tickets(
    db: Session = Depends(get_db), user: User = Depends(get_current_user_optional)
):
    if not user:
        return []
    return db.scalars(
        select(Ticket)
        .where(Ticket.user_id == user.id)
        .order_by(Ticket.created_at.desc())
    ).all()

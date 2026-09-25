from fastapi import APIRouter, Depends, Request
from sqlalchemy.orm import Session

from app.core.database import get_db
from app.deps import get_current_user_optional
from app.models import DisclaimerConsent, User
from app.schemas import ConsentIn, Message

router = APIRouter(prefix="/compliance", tags=["compliance"])


@router.post("/disclaimer-consent", response_model=Message, status_code=201)
def record_consent(
    body: ConsentIn,
    request: Request,
    db: Session = Depends(get_db),
    user: User | None = Depends(get_current_user_optional),
):
    """Log disclaimer acceptance — SEBI audit trail with IP + user agent."""
    consent = DisclaimerConsent(
        user_id=user.id if user else None,
        ip_address=request.client.host if request.client else None,
        user_agent=request.headers.get("user-agent"),
        disclaimer_version=body.disclaimer_version,
    )
    db.add(consent)
    db.commit()
    return Message(message="Consent recorded")

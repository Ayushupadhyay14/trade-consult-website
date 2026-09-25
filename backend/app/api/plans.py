from fastapi import APIRouter, Depends
from sqlalchemy import select
from sqlalchemy.orm import Session

from app.core.database import get_db
from app.models import Plan
from app.schemas import PlanOut

router = APIRouter(prefix="/plans", tags=["plans"])


@router.get("", response_model=list[PlanOut])
def list_plans(db: Session = Depends(get_db)):
    """Public: all active subscription plans."""
    return db.scalars(
        select(Plan).where(Plan.is_active.is_(True)).order_by(Plan.price_paise)
    ).all()

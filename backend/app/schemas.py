from datetime import datetime

from pydantic import BaseModel, ConfigDict, Field

from app.models import CallAction, CallStatus, UserRole


# ---------- Auth ----------
class Token(BaseModel):
    access_token: str
    token_type: str = "bearer"
    user: "UserOut"


class AdminLoginRequest(BaseModel):
    email: str = Field(..., min_length=3, max_length=255)
    password: str = Field(..., min_length=6, max_length=128)


# ---------- Users ----------
class UserOut(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: int
    phone: str
    name: str | None
    email: str | None
    role: UserRole
    kyc_status: str


# ---------- Plans ----------
class PlanOut(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: int
    code: str
    name: str
    category: str
    description: str
    price_paise: int
    duration_days: int
    calls_per_day: int
    features: list


# ---------- Recommendations ----------
class RecommendationCreate(BaseModel):
    plan_id: int
    symbol: str
    exchange: str = "NSE"
    segment: str = "cash"
    action: CallAction
    entry_price: float = Field(..., gt=0)
    target_price: float = Field(..., gt=0)
    stop_loss: float = Field(..., gt=0)
    notes: str = ""


class RecommendationClose(BaseModel):
    status: CallStatus  # target_hit / sl_hit / closed
    exit_price: float = Field(..., gt=0)


class RecommendationOut(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: int
    plan_id: int
    symbol: str
    exchange: str
    segment: str
    action: CallAction
    entry_price: float
    target_price: float
    stop_loss: float
    status: CallStatus
    exit_price: float | None
    notes: str
    created_at: datetime
    closed_at: datetime | None


class TrackRecordStats(BaseModel):
    total_closed: int
    target_hit: int
    sl_hit: int
    accuracy_pct: float
    avg_return_pct: float


class TrackRecord(BaseModel):
    stats: TrackRecordStats
    calls: list[RecommendationOut]


# ---------- Tickets ----------
class TicketCreate(BaseModel):
    name: str = Field(..., min_length=2, max_length=120)
    email: str
    phone: str = Field(..., min_length=10, max_length=15)
    category: str = "general"
    subject: str = Field(..., min_length=3, max_length=200)
    message: str = Field(..., min_length=10)


class TicketOut(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: int
    ticket_no: str
    category: str
    subject: str
    message: str
    status: str
    created_at: datetime


# ---------- Blog ----------
class BlogPostOut(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: int
    slug: str
    title: str
    excerpt: str
    content: str
    cover_image: str | None
    author: str
    published_at: datetime | None


class BlogPostListOut(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: int
    slug: str
    title: str
    excerpt: str
    cover_image: str | None
    author: str
    published_at: datetime | None


class BlogPostAdminOut(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: int
    slug: str
    title: str
    excerpt: str
    content: str
    cover_image: str | None
    author: str
    is_published: bool
    published_at: datetime | None
    created_at: datetime


class BlogPostCreate(BaseModel):
    title: str = Field(..., min_length=1, max_length=250)
    slug: str | None = Field(None, max_length=200)
    excerpt: str = Field("", max_length=500)
    content: str = ""
    cover_image: str | None = None
    author: str = Field("Research Desk", max_length=120)
    is_published: bool = False


class BlogPostUpdate(BaseModel):
    title: str | None = Field(None, min_length=1, max_length=250)
    slug: str | None = Field(None, max_length=200)
    excerpt: str | None = Field(None, max_length=500)
    content: str | None = None
    cover_image: str | None = None
    author: str | None = Field(None, max_length=120)
    is_published: bool | None = None


# ---------- Compliance ----------
class ConsentIn(BaseModel):
    disclaimer_version: str = "v1"


class Message(BaseModel):
    message: str


Token.model_rebuild()

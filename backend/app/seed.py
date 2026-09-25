"""Seed the database with plans, an admin user and sample blog posts.

Run:  python -m app.seed
"""
from datetime import datetime, timezone

from sqlalchemy import select

from app.core.config import settings
from app.core.database import Base, SessionLocal, engine
from app.core.security import hash_password
from app.models import BlogPost, Plan, User, UserRole

# Superseded by the catalog below — kept inactive rather than deleted so any
# historical recommendations/subscriptions referencing them still resolve.
LEGACY_PLAN_CODES = [
    "INSIIGHT-CASH",
    "INSIIGHT-CASH-INTRADAY",
    "INSIIGHT-EQUITY",
    "INSIIGHT-FUTURE",
    "INSIIGHT-OPTION-INDEX",
    "INSIIGHT-OPTION-STOCK",
    "INSIIGHT-MCX",
]

PLANS = [
    {
        "code": "INSIIGHT-360",
        "name": "Insiight 360",
        "category": "combo",
        "description": (
            "High-precision, research-driven investment service with disciplined, "
            "diversified market strategies across Equity, F&O and MCX segments. "
            "Minimum investment ₹2,00,000."
        ),
        "price_paise": 11800000,  # Rs 1,18,000 / year
        "duration_days": 365,
        "calls_per_day": 0,
        "features": [
            "10 Index Options setups",
            "10 Stock Options setups",
            "5 Stock Futures calls",
            "5 Index Futures calls",
            "5 MCX Options setups",
            "5 Equity Cash momentum calls",
            "5 Positional & long-term growth picks",
        ],
    },
    {
        "code": "INSIIGHT-INTRA-2",
        "name": "Insiight Intra Pack — 2 Call",
        "category": "trial",
        "description": "One-time intraday trading service offering precise calls with controlled risk.",
        "price_paise": 199900,  # Rs 1,999 one-time
        "duration_days": 7,
        "calls_per_day": 2,
        "features": [
            "Total Recommendations: 2 Intraday Calls",
            "Segment: your preferred segment (Equity / F&O / MCX)",
            "Recommendation delivered via live dashboard, SMS & WhatsApp",
        ],
    },
    {
        "code": "INSIIGHT-INTRA-3",
        "name": "Insiight Intra Pack — 3 Call",
        "category": "trial",
        "description": "One-time intraday trading service offering precise calls with controlled risk.",
        "price_paise": 399900,  # Rs 3,999 one-time
        "duration_days": 7,
        "calls_per_day": 3,
        "features": [
            "Total Recommendations: 3 Intraday Calls",
            "Segment: your preferred segment (Equity / F&O / MCX)",
            "Recommendation delivered via live dashboard, SMS & WhatsApp",
        ],
    },
    {
        "code": "INSIIGHT-INDEX-OPTION-M",
        "name": "Insiight Index Option",
        "category": "option",
        "description": "Focused on NIFTY / BANKNIFTY / FINNIFTY / SENSEX with 1–2 trading ideas per day.",
        "price_paise": 1700000,  # Rs 17,000 / month
        "duration_days": 30,
        "calls_per_day": 2,
        "features": [
            "1-2 intraday calls daily, every call with target and stop-loss",
            "Recommendation delivered via live dashboard, SMS & WhatsApp",
            "Market related news and information",
            "24/7 client support",
        ],
    },
    {
        "code": "INSIIGHT-INDEX-OPTION-Q",
        "name": "Insiight Index Option",
        "category": "option",
        "description": "Focused on NIFTY / BANKNIFTY / FINNIFTY / SENSEX with 1–2 trading ideas per day.",
        "price_paise": 4200000,  # Rs 42,000 / quarter
        "duration_days": 90,
        "calls_per_day": 2,
        "features": [
            "1-2 intraday calls daily, every call with target and stop-loss",
            "Recommendation delivered via live dashboard, SMS & WhatsApp",
            "Market related news and information",
            "24/7 client support",
        ],
    },
    {
        "code": "INSIIGHT-STOCK-OPTION-M",
        "name": "Insiight Stock Option",
        "category": "option",
        "description": "High-liquidity stock option trading with 1–2 ideas per day, including entry, target, and stop-loss guidance.",
        "price_paise": 1500000,  # Rs 15,000 / month
        "duration_days": 30,
        "calls_per_day": 2,
        "features": [
            "1-2 intraday calls daily, every call with target and stop-loss",
            "Recommendation delivered via live dashboard, SMS & WhatsApp",
            "Market related news and information",
            "24/7 client support",
        ],
    },
    {
        "code": "INSIIGHT-STOCK-OPTION-Q",
        "name": "Insiight Stock Option",
        "category": "option",
        "description": "High-liquidity stock option trading with 1–2 ideas per day, including entry, target, and stop-loss guidance.",
        "price_paise": 3200000,  # Rs 32,000 / quarter
        "duration_days": 90,
        "calls_per_day": 2,
        "features": [
            "1-2 intraday calls daily, every call with target and stop-loss",
            "Recommendation delivered via live dashboard, SMS & WhatsApp",
            "Market related news and information",
            "24/7 client support",
        ],
    },
    {
        "code": "INSIIGHT-STOCK-FUTURE-M",
        "name": "Insiight Future",
        "category": "future",
        "description": "For risky traders aiming for profits in intraday and positional trading with higher risk tolerance.",
        "price_paise": 1500000,  # Rs 15,000 / month
        "duration_days": 30,
        "calls_per_day": 2,
        "features": [
            "1-2 intraday calls daily, every call with target and stop-loss",
            "Recommendation delivered via live dashboard, SMS & WhatsApp",
            "Market related news and information",
            "24/7 client support",
        ],
    },
    {
        "code": "INSIIGHT-STOCK-FUTURE-Q",
        "name": "Insiight Future",
        "category": "future",
        "description": "For risky traders aiming for profits in intraday and positional trading with higher risk tolerance.",
        "price_paise": 2500000,  # Rs 25,000 / quarter
        "duration_days": 90,
        "calls_per_day": 2,
        "features": [
            "1-2 intraday calls daily, every call with target and stop-loss",
            "Recommendation delivered via live dashboard, SMS & WhatsApp",
            "Market related news and information",
            "24/7 client support",
        ],
    },
    {
        "code": "INSIIGHT-MCX-COMMODITY-M",
        "name": "Insiight MCX",
        "category": "mcx",
        "description": "High-risk commodity trading requiring larger investments, aiming for higher returns.",
        "price_paise": 1500000,  # Rs 15,000 / month
        "duration_days": 30,
        "calls_per_day": 2,
        "features": [
            "1-2 intraday calls daily, every call with target and stop-loss",
            "Recommendation delivered via live dashboard, SMS & WhatsApp",
            "Market related news and information",
            "24/7 client support",
        ],
    },
    {
        "code": "INSIIGHT-MCX-COMMODITY-Q",
        "name": "Insiight MCX",
        "category": "mcx",
        "description": "High-risk commodity trading requiring larger investments, aiming for higher returns.",
        "price_paise": 3200000,  # Rs 32,000 / quarter
        "duration_days": 90,
        "calls_per_day": 2,
        "features": [
            "1-2 intraday calls daily, every call with target and stop-loss",
            "Recommendation delivered via live dashboard, SMS & WhatsApp",
            "Market related news and information",
            "24/7 client support",
        ],
    },
    {
        "code": "INSIIGHT-EQUITY-CASH-M",
        "name": "Insiight Equity",
        "category": "cash",
        "description": "1-year investment across 20–25 calls from 8–10 sectors for a diversified equity portfolio.",
        "price_paise": 1000000,  # Rs 10,000 / month
        "duration_days": 30,
        "calls_per_day": 2,
        "features": [
            "1-2 intraday calls daily",
            "Recommendation via live dashboard, SMS, mail & WhatsApp",
            "Daily equity newsletter, reports by email",
            "Global & domestic reports on hot issues, quarterly results updates",
        ],
    },
    {
        "code": "INSIIGHT-EQUITY-CASH-Q",
        "name": "Insiight Equity",
        "category": "cash",
        "description": "1-year investment across 20–25 calls from 8–10 sectors for a diversified equity portfolio.",
        "price_paise": 2200000,  # Rs 22,000 / quarter
        "duration_days": 90,
        "calls_per_day": 2,
        "features": [
            "1-2 intraday calls daily",
            "Recommendation via live dashboard, SMS, mail & WhatsApp",
            "Daily equity newsletter, reports by email",
            "Global & domestic reports on hot issues, quarterly results updates",
        ],
    },
    {
        "code": "INSIIGHT-COMBO-DESK-M",
        "name": "Insiight Option Combo — Stock",
        "category": "combo",
        "description": "High-liquidity stock option trading with 1–2 ideas per day, including entry, target, and stop-loss guidance.",
        "price_paise": 7500000,  # Rs 75,000 / month
        "duration_days": 30,
        "calls_per_day": 0,
        "features": [
            "1-2 intraday calls daily, every call with target and stop-loss",
            "Recommendation delivered via live dashboard, SMS & WhatsApp",
            "Market related news and information",
            "24/7 client support",
        ],
    },
    {
        "code": "INSIIGHT-COMBO-DESK-Q",
        "name": "Insiight Option Combo — Stock",
        "category": "combo",
        "description": "High-liquidity stock option trading with 1–2 ideas per day, including entry, target, and stop-loss guidance.",
        "price_paise": 15100000,  # Rs 1,51,000 / quarter
        "duration_days": 90,
        "calls_per_day": 0,
        "features": [
            "1-2 intraday calls daily, every call with target and stop-loss",
            "Recommendation delivered via live dashboard, SMS & WhatsApp",
            "Market related news and information",
            "24/7 client support",
        ],
    },
]

BLOG_POSTS = [
    {
        "slug": "navigating-the-ipo-wave",
        "title": "Navigating the IPO Wave: How to Evaluate New Listings",
        "excerpt": "A practical framework for separating quality IPOs from hype-driven listings.",
        "content": (
            "<p>IPO markets reward discipline. Before applying, check the "
            "company's revenue growth, promoter holding, peer valuation and "
            "the objects of the issue...</p>"
            "<p>Avoid subscribing purely for listing gains in overheated "
            "markets.</p>"
        ),
        "author": "Research Desk",
    },
    {
        "slug": "risk-management-basics",
        "title": "Risk Management Basics Every Trader Must Follow",
        "excerpt": "Position sizing and stop-losses decide survival long before strategy decides profit.",
        "content": (
            "<p>Never risk more than 1-2% of your capital on a single trade. "
            "A stop-loss is not a suggestion — it is the cost of being "
            "wrong...</p>"
            "<p>Consistency beats intensity in markets.</p>"
        ),
        "author": "Research Desk",
    },
]


def run() -> None:
    Base.metadata.create_all(bind=engine)
    db = SessionLocal()
    try:
        # Admin user
        admin = db.scalar(select(User).where(User.phone == settings.ADMIN_PHONE))
        if not admin:
            admin = User(
                phone=settings.ADMIN_PHONE,
                name="Admin",
                role=UserRole.admin,
                email=settings.ADMIN_EMAIL,
                password_hash=hash_password(settings.ADMIN_PASSWORD),
            )
            db.add(admin)
            print(f"+ Admin user created (phone {settings.ADMIN_PHONE})")
        elif not admin.password_hash:
            admin.email = admin.email or settings.ADMIN_EMAIL
            admin.password_hash = hash_password(settings.ADMIN_PASSWORD)
            print(f"+ Admin password set for existing admin ({admin.email})")

        # Plans
        existing = set(db.scalars(select(Plan.code)).all())
        for data in PLANS:
            if data["code"] not in existing:
                db.add(Plan(**data))
                print(f"+ Plan: {data['name']}")

        # Retire the old catalog (kept, not deleted, so past records still resolve)
        legacy = db.scalars(
            select(Plan).where(Plan.code.in_(LEGACY_PLAN_CODES), Plan.is_active.is_(True))
        ).all()
        for plan in legacy:
            plan.is_active = False
            print(f"- Deactivated legacy plan: {plan.name}")

        # Blog posts
        existing_slugs = set(db.scalars(select(BlogPost.slug)).all())
        now = datetime.now(timezone.utc).replace(tzinfo=None)
        for data in BLOG_POSTS:
            if data["slug"] not in existing_slugs:
                db.add(BlogPost(**data, is_published=True, published_at=now))
                print(f"+ Blog post: {data['title']}")

        db.commit()
        print("Seed complete.")
    finally:
        db.close()


if __name__ == "__main__":
    run()

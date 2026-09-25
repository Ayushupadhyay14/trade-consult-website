# Trade Consult — FastAPI Backend

SEBI-compliant stock advisory platform backend.

## Features
- **OTP auth** (phone-first, JWT access tokens) — dev returns the OTP in the response
- **Plans** — public plan catalog (cash / equity / future / option / MCX)
- **Recommendations engine** — publish/close calls (staff), live feed per subscription, public verified track record
- **WebSocket** — `ws://localhost:8000/ws/recommendations` pushes new/closed calls instantly
- **Payments** — Razorpay orders + signed webhook; dev mode has a mock payment confirm endpoint
- **Grievance tickets** — SEBI grievance redressal with ticket numbers
- **Compliance** — disclaimer consent logging (IP + user agent + version)
- **Blog** — published posts by slug

## Quickstart

```bash
cd backend
python3 -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt
cp .env.example .env
python -m app.seed
uvicorn app.main:app --reload --port 8000
```

API docs: http://localhost:8000/docs

## Dev-mode end-to-end flow

```bash
# 1. Login (OTP returned in response because DEV_RETURN_OTP=true)
curl -X POST localhost:8000/api/v1/auth/otp/request -H 'Content-Type: application/json' -d '{"phone":"9999999999"}'
curl -X POST localhost:8000/api/v1/auth/otp/verify  -H 'Content-Type: application/json' -d '{"phone":"9999999999","code":"<OTP>","name":"Admin"}'

# 2. List plans
curl localhost:8000/api/v1/plans

# 3. Publish a call (admin token)
curl -X POST localhost:8000/api/v1/admin/recommendations \
  -H "Authorization: Bearer <TOKEN>" -H 'Content-Type: application/json' \
  -d '{"plan_id":1,"symbol":"RELIANCE","action":"BUY","entry_price":2450,"target_price":2520,"stop_loss":2410}'

# 4. Public track record
curl localhost:8000/api/v1/recommendations/track-record
```

## Production notes
- Set `DATABASE_URL` to PostgreSQL, run Alembic migrations instead of `create_all`
- Set `DEV_RETURN_OTP=false`, configure MSG91 + Razorpay keys
- Put a Celery beat job on `expire_due_subscriptions`
- Run uvicorn with multiple workers behind Nginx; move WS broadcast to Redis pub/sub

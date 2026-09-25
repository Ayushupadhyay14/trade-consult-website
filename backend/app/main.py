import logging
from pathlib import Path

from fastapi import FastAPI, WebSocket, WebSocketDisconnect
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles

from app.api import (
    admin,
    auth,
    blog,
    compliance,
    plans,
    recommendations,
    tickets,
)
from app.core.config import settings
from app.core.database import Base, engine
from app.services.ws import manager

logging.basicConfig(level=logging.INFO)

# Dev convenience: create tables on startup.
# For production, use Alembic migrations instead.
Base.metadata.create_all(bind=engine)

Path("static/uploads").mkdir(parents=True, exist_ok=True)

app = FastAPI(
    title=settings.PROJECT_NAME,
    version="1.0.0",
    docs_url="/docs",
    redoc_url="/redoc",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.cors_origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

for module in (
    auth,
    plans,
    recommendations,
    tickets,
    blog,
    compliance,
    admin,
):
    app.include_router(module.router, prefix=settings.API_V1_PREFIX)

app.include_router(blog.admin_router, prefix=settings.API_V1_PREFIX)
app.mount("/static", StaticFiles(directory="static"), name="static")


@app.get("/health", tags=["meta"])
def health():
    return {"status": "ok", "service": settings.PROJECT_NAME}


@app.websocket("/ws/recommendations")
async def ws_recommendations(websocket: WebSocket):
    """Live feed: dashboards receive new/closed calls in real time."""
    await manager.connect(websocket)
    try:
        while True:
            # Keep the connection alive; client doesn't need to send anything.
            await websocket.receive_text()
    except WebSocketDisconnect:
        manager.disconnect(websocket)

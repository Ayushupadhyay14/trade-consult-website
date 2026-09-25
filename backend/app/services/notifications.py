import logging

import httpx

from app.core.config import settings

logger = logging.getLogger(__name__)


async def send_sms(phone: str, message: str) -> bool:
    """Send transactional SMS via MSG91. No-op (logged) when not configured."""
    if not settings.MSG91_AUTH_KEY:
        logger.info("[SMS disabled] -> %s: %s", phone, message)
        return False
    url = "https://control.msg91.com/api/v5/flow/"
    payload = {
        "template_id": settings.MSG91_TEMPLATE_ID,
        "sender": settings.MSG91_SENDER_ID,
        "short_url": "0",
        "recipients": [{"mobiles": f"91{phone[-10:]}", "message": message}],
    }
    headers = {"authkey": settings.MSG91_AUTH_KEY, "Content-Type": "application/json"}
    async with httpx.AsyncClient(timeout=10) as client:
        resp = await client.post(url, json=payload, headers=headers)
        resp.raise_for_status()
    return True


async def send_whatsapp(phone: str, message: str) -> bool:
    """Send WhatsApp alert via Business API. No-op (logged) when not configured."""
    if not (settings.WHATSAPP_API_URL and settings.WHATSAPP_API_TOKEN):
        logger.info("[WhatsApp disabled] -> %s: %s", phone, message)
        return False
    headers = {"Authorization": f"Bearer {settings.WHATSAPP_API_TOKEN}"}
    payload = {"to": f"91{phone[-10:]}", "type": "text", "text": {"body": message}}
    async with httpx.AsyncClient(timeout=10) as client:
        resp = await client.post(
            settings.WHATSAPP_API_URL, json=payload, headers=headers
        )
        resp.raise_for_status()
    return True


def format_call_message(rec) -> str:
    return (
        f"{rec.action.value} {rec.symbol} ({rec.exchange}) @ {rec.entry_price} | "
        f"Target: {rec.target_price} | SL: {rec.stop_loss}"
    )


async def notify_new_recommendation(rec, phones: list[str]) -> None:
    """Fan out a new call to SMS + WhatsApp for every subscribed phone."""
    message = format_call_message(rec)
    for phone in phones:
        try:
            await send_sms(phone, message)
            await send_whatsapp(phone, message)
        except Exception as exc:  # never let alerting crash the publish flow
            logger.error("Alert failed for %s: %s", phone, exc)

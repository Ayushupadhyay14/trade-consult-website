from functools import lru_cache

from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    model_config = SettingsConfigDict(env_file=".env", extra="ignore")

    PROJECT_NAME: str = "AlphaInsiight API"
    API_V1_PREFIX: str = "/api/v1"

    SECRET_KEY: str = "change-me-to-a-long-random-string"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 60 * 24  # 1 day
    ALGORITHM: str = "HS256"

    DATABASE_URL: str = "sqlite:///./trade_consult.db"


    UPLOAD_DIR: str = "static/uploads"
    MAX_UPLOAD_MB: int = 5

    BACKEND_CORS_ORIGINS: str = "http://localhost:3000"

    # Admin console login (email + password)
    ADMIN_PHONE: str = "9999999999"
    ADMIN_EMAIL: str = "admin@alphainsiight.com"
    ADMIN_PASSWORD: str = "change-me-admin-pass"

    # SMS - MSG91 (used to alert subscribers about new calls)
    MSG91_AUTH_KEY: str = ""
    MSG91_SENDER_ID: str = ""
    MSG91_TEMPLATE_ID: str = ""

    # WhatsApp
    WHATSAPP_API_URL: str = ""
    WHATSAPP_API_TOKEN: str = ""

    @property
    def cors_origins(self) -> list[str]:
        return [o.strip() for o in self.BACKEND_CORS_ORIGINS.split(",") if o.strip()]


@lru_cache
def get_settings() -> Settings:
    return Settings()


settings = get_settings()

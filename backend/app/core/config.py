from pydantic import BaseSettings

class Settings(BaseSettings):
    DATABASE_URL: str
    JWT_SECRET: str
    OPENAI_API_KEY: str
    STRIPE_SECRET_KEY: str
    ENV: str = "prod"

    class Config:
        env_file = ".env"

settings = Settings()


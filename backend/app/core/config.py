from pydantic import BaseSettings

class Settings(BaseSettings):
    DATABASE_URL: str
    REDIS_URL: str
    JWT_SECRET: str
    OPENAI_API_KEY: str
    ENV: str = "production"

    class Config:
        env_file = ".env"

settings = Settings()

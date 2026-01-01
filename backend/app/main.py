from fastapi import FastAPI
from app.core.config import settings
from app.api.v1 import auth, advice, portfolio
from app.core.logging import setup_logging

setup_logging()

app = FastAPI(
    title="AI Finance Advising Platform",
    version="1.0.0",
    docs_url="/docs"
)

app.include_router(auth.router, prefix="/api/v1/auth", tags=["Auth"])
app.include_router(advice.router, prefix="/api/v1/advice", tags=["Advice"])
app.include_router(portfolio.router, prefix="/api/v1/portfolio", tags=["Portfolio"])

@app.get("/health")
def health_check():
    return {"status": "ok"}

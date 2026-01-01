from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api.v1 import auth, users, advice, portfolio, billing
from app.core.logging import setup_logging

setup_logging()

app = FastAPI(title="FinMind AI", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth.router, prefix="/api/v1/auth", tags=["Auth"])
app.include_router(users.router, prefix="/api/v1/users", tags=["Users"])
app.include_router(advice.router, prefix="/api/v1/advice", tags=["Advice"])
app.include_router(portfolio.router, prefix="/api/v1/portfolio", tags=["Portfolio"])
app.include_router(billing.router, prefix="/api/v1/billing", tags=["Billing"])

@app.get("/health")
def health():
    return {"status": "ok"}



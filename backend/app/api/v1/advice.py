from fastapi import APIRouter, Depends
from app.services.ai_advisor import generate_financial_advice

router = APIRouter()

@router.post("/")
def get_advice(payload: dict):
    return {
        "advice": generate_financial_advice(
            payload["profile"],
            payload["portfolio"],
            payload["goals"]
        )
    }

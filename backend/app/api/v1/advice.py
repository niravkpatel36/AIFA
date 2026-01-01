from fastapi import APIRouter
from app.services.ai_advisor import generate_advice

router = APIRouter()

@router.post("/")
def advice(payload: dict):
    return {
        "result": generate_advice(
            payload["user"],
            payload["portfolio"],
            payload["goals"]
        )
    }

from passlib.context import CryptContext
from jose import jwt, JWTError
from datetime import datetime, timedelta
from app.core.config import settings

pwd = CryptContext(schemes=["bcrypt"])

def hash_password(pw: str) -> str:
    return pwd.hash(pw)

def verify_password(pw: str, hashed: str) -> bool:
    return pwd.verify(pw, hashed)

def create_token(user_id: int):
    payload = {
        "sub": str(user_id),
        "exp": datetime.utcnow() + timedelta(hours=12)
    }
    return jwt.encode(payload, settings.JWT_SECRET, algorithm="HS256")


import openai
from app.core.config import settings

openai.api_key = settings.OPENAI_API_KEY

SYSTEM = """
You are a licensed CFA-level financial advisor.
Provide conservative, explainable, compliant advice.
"""

def generate_advice(user, portfolio, goals):
    prompt = f"""
User: {user}
Portfolio: {portfolio}
Goals: {goals}
"""
    response = openai.ChatCompletion.create(
        model="gpt-4.1",
        messages=[
            {"role": "system", "content": SYSTEM},
            {"role": "user", "content": prompt}
        ],
        temperature=0.1
    )
    return response.choices[0].message.content


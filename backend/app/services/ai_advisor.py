import openai
from app.core.config import settings

openai.api_key = settings.OPENAI_API_KEY

SYSTEM_PROMPT = """
You are a CFA-level financial advisor.
Give compliant, conservative, explainable advice.
Never hallucinate numbers.
"""

def generate_financial_advice(user_profile, portfolio, goals):
    prompt = f"""
User Profile: {user_profile}
Portfolio: {portfolio}
Goals: {goals}
"""
    response = openai.ChatCompletion.create(
        model="gpt-4.1",
        messages=[
            {"role": "system", "content": SYSTEM_PROMPT},
            {"role": "user", "content": prompt}
        ],
        temperature=0.2
    )
    return response.choices[0].message["content"]

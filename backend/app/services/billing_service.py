import stripe
from app.core.config import settings

stripe.api_key = settings.STRIPE_SECRET_KEY

def create_checkout_session(user_email):
    return stripe.checkout.Session.create(
        payment_method_types=["card"],
        mode="subscription",
        line_items=[{"price": "price_PRO_PLAN", "quantity": 1}],
        success_url="https://app.finmind.ai/dashboard",
        cancel_url="https://app.finmind.ai/billing",
        customer_email=user_email
    )

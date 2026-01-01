# AI Financial Advisor

AIFA is a production-ready, AI-powered financial advisory platform designed to deliver personalized, explainable, and compliant financial guidance at scale.

## Features

- AI-driven personalized financial advice (LLM-powered)
- Portfolio analysis & rebalancing
- Risk profiling
- Secure authentication (JWT)
- Subscription billing
- Multi-tenant SaaS architecture
- Scalable FastAPI backend
- Modern React/Next.js frontend
- Dockerized infrastructure

## Architecture Overview
```
Client (Browser)
↓
Next.js Frontend (SSR)
↓
FastAPI API Gateway
↓
| Auth | Advice | Billing | Users |
↓
PostgreSQL | Redis | AI APIs (OpenAI)
```

## Repository Structure
```
ai-finance-advisor/
├── backend/        # FastAPI backend (Python)
├── frontend/       # Next.js frontend (TypeScript)
├── infra/          # Docker Compose & infra configs
└── README.md
```

## Running Locally (Quick Start)

### Clone the repo
```
git clone https://github.com/your-org/finmind.git
cd finmind
```

### Start backend & database
```
cd infra
docker-compose up --build
```

### Start frontend
```
cd ../frontend
npm install
npm run dev
```
Visit: http://localhost:3000

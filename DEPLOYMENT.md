# Backend Deployment & Dockerization Guide

This document describes how to build, run, and deploy the Trade Consult FastAPI backend services using Docker and GitHub Actions CI/CD.

---

## 1. System Architecture

The backend infrastructure consists of 4 isolated containerized services connected via an internal Docker bridge network:

```
[ Client Browser / Mobile / Dashboard ]
                 │
                 ▼
       ┌──────────────────┐
       │   Nginx (Port 80)│  <── Reverse Proxy, Static Caching, WebSocket Upgrade
       └─────────┬────────┘
                 │ (Internal proxy)
                 ▼
       ┌──────────────────┐
       │ FastAPI (Port    │  <── ASGI Server (Uvicorn), Auto-seed & Healthcheck
       │   8000)          │
       └───┬──────────┬───┘
           │          │
           ▼          ▼
┌──────────────┐   ┌─────────────┐
│ PostgreSQL 16│   │   Redis 7   │  <── Persistent Volumes (postgres_data, redis_data)
└──────────────┘   └─────────────┘
```

- **Backend (`FastAPI`)**: Runs on Python 3.12 with Uvicorn, SQLAlchemy 2.0 (`psycopg[binary]`), automatic healthcheck (`/health`), and dynamic database migrations/seed.
- **Database (`PostgreSQL 16`)**: Relational database with persistent volume and connection health checking.
- **Cache/Broker (`Redis 7`)**: Fast in-memory store for pub/sub, caching, and Celery jobs.
- **Reverse Proxy (`Nginx`)**: Handles WebSocket protocol upgrades (`/ws/recommendations`), security headers, request buffering, and static file delivery.

---

## 2. Quickstart with Docker Compose

### Prerequisites
- Docker Engine (v24.0+)
- Docker Compose v2 (`docker compose`)

### Step 1: Prepare Environment Configuration
Copy the Docker environment template:
```bash
cp .env.docker.example .env
```
Update any sensitive values in `.env` (such as `SECRET_KEY`, `POSTGRES_PASSWORD`, and `ADMIN_PASSWORD`).

### Step 2: Build & Start All Services
From the repository root:
```bash
docker compose up -d --build
```
*(Or inside the `backend/` directory: `cd backend && docker compose up -d --build`)*

### Step 3: Verify Running Services
```bash
# Check status of containers
docker compose ps

# View live backend logs
docker compose logs -f backend
```

Once running:
- **Interactive API Documentation (Swagger)**: [http://localhost:8000/docs](http://localhost:8000/docs)
- **Alternative Docs (ReDoc)**: [http://localhost:8000/redoc](http://localhost:8000/redoc)
- **Health Check Endpoint**: [http://localhost:8000/health](http://localhost:8000/health)
- **WebSocket Endpoint**: `ws://localhost:8000/ws/recommendations`

---

## 3. Automated CI/CD Pipeline (GitHub Actions)

The workflow file is located at [`.github/workflows/backend-ci-cd.yml`](.github/workflows/backend-ci-cd.yml).

### Pipeline Workflow Stages

1. **Continuous Integration (CI) — Test & Quality**:
   - Triggers on every pull request and push targeting `master` or `main`.
   - Sets up Python 3.12 with Pip layer caching.
   - Installs development dependencies (`pytest`, `pytest-asyncio`, `ruff`).
   - Runs automated quality checks and executes the Pytest suite.

2. **Docker Build Validation (CI)**:
   - Sets up Docker Buildx with GitHub Actions caching (`type=gha`).
   - Verifies the `backend/Dockerfile` builds without any layer or dependency issues.

3. **Continuous Delivery (CD) — Publish to GHCR**:
   - Triggers only when changes are merged or pushed to the default branch (`master`/`main`).
   - Authenticates against **GitHub Container Registry** (`ghcr.io`).
   - Automatically tags and pushes the Docker image:
     - `ghcr.io/<owner>/trade-consult-website-backend:latest`
     - `ghcr.io/<owner>/trade-consult-website-backend:sha-<commit>`

4. **Continuous Deployment (CD) — Automated Release**:
   - Optional automatic deployment triggered over SSH or Webhook to your production server.

### Configuring GitHub Secrets for Continuous Deployment

In your GitHub repository, navigate to **Settings > Secrets and variables > Actions** and add:

| Secret Name | Description | Example |
| :--- | :--- | :--- |
| `DEPLOY_HOST` | Production server IP or domain | `203.0.113.10` |
| `DEPLOY_USER` | SSH user | `ubuntu` |
| `DEPLOY_SSH_KEY` | Private SSH key for server access | `-----BEGIN OPENSSH PRIVATE KEY...` |
| `DEPLOY_PORT` | SSH port (optional, default: 22) | `22` |
| `DEPLOY_WEBHOOK_URL` | Alternatively, a webhook URL (Coolify/Render) | `https://api.render.com/deploy/...` |

---

## 4. Production Deployment on a Server / VPS (AWS, DigitalOcean, Hetzner, Linode)

### 1. Server Setup
On a clean Ubuntu 22.04 / 24.04 server:
```bash
# Install Docker
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh

# Clone repository
git clone https://github.com/Ayushupadhyay14/trade-consult-website.git /opt/trade-consult-website
cd /opt/trade-consult-website

# Setup production environment
cp .env.docker.example .env
nano .env # Set production secrets
```

### 2. Launch with Production Compose
```bash
# Pull images and start in background
docker compose -f docker-compose.prod.yml up -d
```

### 3. Setting up SSL with Let's Encrypt (Certbot)
If you point your domain (e.g., `api.alphainsiight.com`) to your server IP:
```bash
sudo apt install -y certbot python3-certbot-nginx
sudo certbot --nginx -d api.alphainsiight.com
```

---

## 5. Maintenance & Database Backups

### Automated Database Backup
To take a full PostgreSQL backup without taking down the service:
```bash
docker exec -t trade_consult_db pg_dump -U postgres trade_consult > backup_$(date +%Y%m%d_%H%M%S).sql
```

### Database Restore
```bash
cat backup_file.sql | docker exec -i trade_consult_db psql -U postgres -d trade_consult
```

### Restart Services
```bash
docker compose restart backend
```

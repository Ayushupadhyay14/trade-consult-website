#!/usr/bin/env bash
set -e

# Wait for PostgreSQL if DATABASE_URL points to a PostgreSQL database
if [[ "${DATABASE_URL}" == *"postgres"* ]]; then
  echo "Checking database connection..."
  python - << 'EOF'
import os
import sys
import time

db_url = os.getenv("DATABASE_URL", "")
if db_url.startswith("postgres://"):
    db_url = db_url.replace("postgres://", "postgresql://", 1)

try:
    from sqlalchemy import create_engine, text
    engine = create_engine(db_url)
    max_attempts = 30
    for attempt in range(1, max_attempts + 1):
        try:
            with engine.connect() as conn:
                conn.execute(text("SELECT 1"))
            print("Database connection established!")
            sys.exit(0)
        except Exception as err:
            if attempt < max_attempts:
                print(f"Waiting for database to be ready ({attempt}/{max_attempts})...")
                time.sleep(2)
            else:
                print(f"Failed to connect to database: {err}")
                sys.exit(1)
except Exception as e:
    print(f"Database pre-check error: {e}")
    sys.exit(1)
EOF
fi

# Ensure uploads directory exists
mkdir -p static/uploads

# Run database seed if RUN_SEED is enabled (default: true)
if [ "${RUN_SEED:-true}" = "true" ]; then
  echo "Seeding initial data (plans, admin, blog posts)..."
  python -m app.seed || echo "Seed completed or skipped."
fi

# Start application
echo "Starting application..."
exec "$@"

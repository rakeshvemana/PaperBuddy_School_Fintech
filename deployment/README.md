# Deployment

## Local Docker

```bash
docker compose up --build
```

- Frontend: `http://localhost:3000`
- Backend: `http://localhost:4000/api/health`
- PostgreSQL: `localhost:5432`

## Manual Setup

```bash
npm install
npm run prisma:generate
npm run dev --prefix frontend
npm run dev:api --prefix backend
```

For production, set a real `JWT_SECRET`, provision PostgreSQL, run Prisma migrations, and connect Supabase Storage for uploaded student documents and receipts.

# PaperBuddy

Modern School Fee Management Platform for a school fintech hackathon.

PaperBuddy includes a polished Next.js frontend, typed Express API, Prisma/PostgreSQL data model, Docker Compose, CI, API docs, ER diagram, and demo-ready screens for admins and parents.

## Features

- Student management with admissions, guardians, class/section, and documents.
- Dynamic fee engine for tuition, transport, hostel, exam, library, sports, lab, discounts, waivers, scholarships, late fees, and installments.
- UPI, cash, cheque, bank transfer, gateway, partial payment, refund, PDF receipt, and email-ready receipt flows.
- Admin SaaS dashboard with revenue, pending fees, daily collection, charts, recent payments, activity feed, defaulters, and AI forecast.
- Parent portal for dues, due dates, receipt downloads, and payment history.
- Reminder system concept for email, SMS mock, WhatsApp mock, push mock, and in-app notifications.
- Reports for daily, monthly, yearly, class-wise, payment-method, and defaulter views.

## Tech Stack

- Frontend: Next.js, TypeScript, Tailwind CSS, Framer Motion, Lucide Icons, Recharts, React Query, React Hook Form, Zod.
- Backend: Node.js, Express, TypeScript, Prisma, PostgreSQL, JWT, bcrypt.
- DevOps: Docker Compose and GitHub Actions.

## Run Locally

```bash
npm install
npm run prisma:generate
npm run dev
```

In another terminal:

```bash
npm run dev:api
```

Open:

- Frontend: `http://localhost:3000`
- Backend health: `http://localhost:4000/api/health`

## Demo Login

- Email: `admin@paperbuddy.app`
- Password: `password123`
- OTP: `246810`

## Repository Structure

```text
frontend/   Next.js app, components, services, hooks, assets, and utilities
backend/    Express API, controllers, routes, middleware, services, Prisma schema
docs/       API documentation
database/   ER diagram and database notes
designs/    Product and design notes
deployment/ Deployment guide
```

## GitHub

Target repository: `https://github.com/rakeshvemana/PaperBuddy_School_Fintech`

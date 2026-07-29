# PaperBuddy API

Base URL: `http://localhost:4000/api`

## Auth

- `POST /auth/login` returns a JWT for role-based access.
- `POST /auth/register` captures school workspace registration.
- `POST /auth/verify-otp` accepts demo OTP `246810`.

## Dashboard

- `GET /dashboard` returns metrics, monthly trends, students, and recent payments.

## Students

- `GET /students?q=ananya` searches by name or admission number.
- `POST /students` creates a student. Requires `ADMIN` or `ACCOUNTANT`.
- `PUT /students/:id` updates student profile details.
- `DELETE /students/:id` deletes a student. Requires `ADMIN`.

## Fee Engine

- `GET /fees` lists fee heads.
- `POST /fees/quote` calculates subtotal, reductions, late fees, total, and installments.

```json
{
  "lines": [
    { "name": "Tuition Fee", "amount": 36000 },
    { "name": "Transport Fee", "amount": 6000 }
  ],
  "adjustments": {
    "scholarship": 4000,
    "lateFee": 500,
    "installments": 3
  }
}
```

## Payments

- `GET /payments` lists recent payments.
- `POST /payments` records UPI, cash, cheque, bank transfer, or gateway payment.
- `POST /payments/:id/refund` marks a payment refunded.

## Reports

- `GET /reports` returns daily, monthly, yearly, and export summary data.

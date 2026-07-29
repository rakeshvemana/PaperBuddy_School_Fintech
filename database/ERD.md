# PaperBuddy ER Diagram

```mermaid
erDiagram
  School ||--o{ User : has
  School ||--o{ SchoolClass : offers
  School ||--o{ FeeHead : configures
  SchoolClass ||--o{ Section : contains
  Section ||--o{ Student : enrolls
  User ||--o| Student : maps_to
  Student ||--o{ Document : uploads
  Student ||--o{ Invoice : receives
  Student ||--o{ Payment : makes
  Student ||--o{ Waiver : receives
  Student ||--o{ Scholarship : receives
  FeeHead ||--o{ InvoiceFee : appears_on
  Invoice ||--o{ InvoiceFee : contains
  Invoice ||--o{ Installment : splits_into
  Invoice ||--o{ Payment : paid_by
  Invoice ||--o{ Reminder : triggers
  Payment ||--o| Receipt : generates
```

The schema is normalized around school tenancy, role-based users, student profiles, configurable fee heads, invoice line items, installments, multi-mode payments, receipts, waivers, scholarships, reminders, and notifications.

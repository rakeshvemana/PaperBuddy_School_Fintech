import { Request, Response } from "express";
import { demoPayments } from "../services/demoData.js";

export function listPayments(req: Request, res: Response) {
  return res.json(demoPayments);
}

export function recordPayment(req: Request, res: Response) {
  return res.status(201).json({
    receiptNo: `RCPT-${Math.floor(9000 + Math.random() * 900)}`,
    status: "PAID",
    paidAt: new Date().toISOString(),
    ...req.body,
  });
}

export function refundPayment(req: Request, res: Response) {
  return res.json({ paymentId: req.params.id, status: "REFUNDED", refundedAt: new Date().toISOString() });
}

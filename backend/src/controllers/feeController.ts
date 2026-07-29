import { Request, Response } from "express";
import { calculateInvoice } from "../services/feeEngine.js";

export function quoteFee(req: Request, res: Response) {
  const invoice = calculateInvoice(req.body.lines ?? [], req.body.adjustments ?? {});
  return res.json(invoice);
}

export function listFeeHeads(req: Request, res: Response) {
  return res.json([
    { name: "Tuition Fee", amount: 36000, recurring: true },
    { name: "Transport Fee", amount: 6000, recurring: true },
    { name: "Exam Fee", amount: 3200, recurring: false },
    { name: "Library Fee", amount: 1800, recurring: true },
    { name: "Sports Fee", amount: 2400, recurring: true },
    { name: "Lab Fee", amount: 4500, recurring: false },
  ]);
}

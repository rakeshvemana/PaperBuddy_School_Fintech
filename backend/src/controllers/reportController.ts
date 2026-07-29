import { Request, Response } from "express";

export function getReports(req: Request, res: Response) {
  return res.json({
    daily: { collected: 342000, receipts: 146 },
    monthly: { collected: 8470000, pending: 1290000 },
    yearly: { collected: 64200000, forecast: 91200000 },
    exports: ["csv", "xlsx", "pdf"],
  });
}

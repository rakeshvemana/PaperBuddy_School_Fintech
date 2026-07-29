import { Request, Response } from "express";
import { dashboardMetrics, demoPayments, demoStudents } from "../services/demoData.js";

export function getDashboard(req: Request, res: Response) {
  return res.json({
    metrics: dashboardMetrics,
    trends: [
      { month: "Apr", revenue: 5200000, pending: 1800000, forecast: 5600000 },
      { month: "May", revenue: 5900000, pending: 1600000, forecast: 6100000 },
      { month: "Jun", revenue: 6400000, pending: 1500000, forecast: 6700000 },
      { month: "Jul", revenue: 7100000, pending: 1300000, forecast: 7400000 },
      { month: "Aug", revenue: 7700000, pending: 1100000, forecast: 8000000 },
      { month: "Sep", revenue: 8470000, pending: 900000, forecast: 8800000 },
    ],
    students: demoStudents,
    recentPayments: demoPayments,
  });
}

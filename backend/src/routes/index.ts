import { Router } from "express";
import { Role } from "@prisma/client";
import { login, register, verifyOtp } from "../controllers/authController.js";
import { getDashboard } from "../controllers/dashboardController.js";
import { listFeeHeads, quoteFee } from "../controllers/feeController.js";
import { listPayments, recordPayment, refundPayment } from "../controllers/paymentController.js";
import { getReports } from "../controllers/reportController.js";
import { createStudent, deleteStudent, listStudents, updateStudent } from "../controllers/studentController.js";
import { requireAuth } from "../middleware/auth.js";

export const router = Router();

router.get("/health", (_req, res) => res.json({ status: "ok", service: "paperbuddy-api" }));
router.post("/auth/login", login);
router.post("/auth/register", register);
router.post("/auth/verify-otp", verifyOtp);
router.get("/dashboard", getDashboard);
router.get("/students", listStudents);
router.post("/students", requireAuth([Role.ADMIN, Role.ACCOUNTANT]), createStudent);
router.put("/students/:id", requireAuth([Role.ADMIN, Role.ACCOUNTANT]), updateStudent);
router.delete("/students/:id", requireAuth([Role.ADMIN]), deleteStudent);
router.get("/fees", listFeeHeads);
router.post("/fees/quote", quoteFee);
router.get("/payments", listPayments);
router.post("/payments", requireAuth([Role.ADMIN, Role.ACCOUNTANT]), recordPayment);
router.post("/payments/:id/refund", requireAuth([Role.ADMIN]), refundPayment);
router.get("/reports", getReports);

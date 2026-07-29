import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { Role } from "@prisma/client";
import { env } from "../config/env.js";

const demoUser = {
  id: "user-admin-demo",
  email: "admin@paperbuddy.app",
  name: "Rakesh Vemana",
  passwordHash: bcrypt.hashSync("password123", 10),
  role: Role.ADMIN,
};

export async function login(req: Request, res: Response) {
  const { email, password, role } = req.body;
  const passwordMatches = await bcrypt.compare(password ?? "", demoUser.passwordHash);

  if (email !== demoUser.email || !passwordMatches) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const token = jwt.sign(
    { id: demoUser.id, email: demoUser.email, role: role ?? demoUser.role },
    env.JWT_SECRET,
    { expiresIn: "8h" },
  );

  return res.json({ token, user: { id: demoUser.id, name: demoUser.name, email: demoUser.email, role: role ?? demoUser.role } });
}

export function register(req: Request, res: Response) {
  return res.status(201).json({
    message: "Workspace registration captured. OTP verification required.",
    workspace: { id: "school-demo", ...req.body },
  });
}

export function verifyOtp(req: Request, res: Response) {
  if (req.body.otp !== "246810") {
    return res.status(400).json({ message: "Invalid demo OTP" });
  }
  return res.json({ message: "OTP verified" });
}

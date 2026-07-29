import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { Role } from "@prisma/client";
import { env } from "../config/env.js";

export type AuthRequest = Request & {
  user?: { id: string; email: string; role: Role };
};

export function requireAuth(roles: Role[] = []) {
  return (req: AuthRequest, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.replace("Bearer ", "");
    if (!token) {
      return res.status(401).json({ message: "Missing bearer token" });
    }

    try {
      const payload = jwt.verify(token, env.JWT_SECRET) as AuthRequest["user"];
      if (roles.length && payload && !roles.includes(payload.role)) {
        return res.status(403).json({ message: "Insufficient role permissions" });
      }
      req.user = payload;
      return next();
    } catch {
      return res.status(401).json({ message: "Invalid or expired token" });
    }
  };
}

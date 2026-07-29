import { Request, Response } from "express";
import { demoStudents } from "../services/demoData.js";

export function listStudents(req: Request, res: Response) {
  const query = String(req.query.q ?? "").toLowerCase();
  const results = demoStudents.filter((student) => student.name.toLowerCase().includes(query) || student.admissionNumber.toLowerCase().includes(query));
  return res.json(results);
}

export function createStudent(req: Request, res: Response) {
  return res.status(201).json({ id: `STU-${Date.now()}`, ...req.body });
}

export function updateStudent(req: Request, res: Response) {
  return res.json({ id: req.params.id, ...req.body });
}

export function deleteStudent(req: Request, res: Response) {
  return res.status(204).send();
}

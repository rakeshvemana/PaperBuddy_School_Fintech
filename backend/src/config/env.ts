import { z } from "zod";

const envSchema = z.object({
  DATABASE_URL: z.string().optional(),
  JWT_SECRET: z.string().default("paperbuddy-dev-secret"),
  PORT: z.coerce.number().default(4000),
});

export const env = envSchema.parse(process.env);

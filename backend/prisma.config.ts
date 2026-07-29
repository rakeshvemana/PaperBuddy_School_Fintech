import "dotenv/config";
import { defineConfig } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  datasource: {
    url:
      process.env.DATABASE_URL ??
      "postgresql://paperbuddy:paperbuddy@localhost:5432/paperbuddy?schema=public",
  },
});

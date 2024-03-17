import "dotenv/config";
import type { Config } from "drizzle-kit";

if (!process.env.DATABASE_URL) throw new Error("DATABSE_URL not set");

export default {
  schema: "./db/schema.ts",
  out: "./drizzle",
  driver: "pg",
  dbCredentials: {
    connectionString: process.env.DATABASE_URL,
  },
} satisfies Config;

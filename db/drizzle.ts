import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

import * as schema from "./schema";

if (!process.env.DATABASE_URL) throw new Error("DATABSE_URL not set");

const sql = neon(process.env.DATABASE_URL);

// @ts-ignore
const db = drizzle(sql, { schema });

export default db;

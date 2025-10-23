import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client";

export const db = drizzle(process.env.DATABASE_URL!);

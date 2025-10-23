import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client";

const db = drizzle(process.env.DATABASE_URL!);

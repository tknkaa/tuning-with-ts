import { betterAuth } from "better-auth";
import { db } from "$lib/db";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
export const auth = betterAuth({
  emailAndPassword: {
    enabled: true,
  },
  database: drizzleAdapter(db, {
    provider: "sqlite",
  }),
});

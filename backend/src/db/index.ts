import { drizzle } from "drizzle-orm/d1";
import * as schema from "./schema.js";

// D1 binding kommt von Cloudflare Workers (env.DB)
// Lokal: wrangler dev benutzt automatisch die lokale D1
export function getDb(d1: D1Database) {
  return drizzle(d1, { schema });
}

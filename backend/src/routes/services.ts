import { Hono } from "hono";
import { getDb } from "../db/index.js";
import { services } from "../db/schema.js";
import { asc } from "drizzle-orm";

type Bindings = { DB: D1Database };

export const servicesRouter = new Hono<{ Bindings: Bindings }>();

servicesRouter.get("/", async (c) => {
  const db = getDb(c.env.DB);
  const allServices = await db.select().from(services).orderBy(asc(services.sortOrder));
  return c.json({ success: true, data: allServices });
});

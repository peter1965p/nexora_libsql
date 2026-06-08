import { Hono } from "hono";
import { db } from "../db/index.js";
import { services } from "../db/schema.js";
import { asc } from "drizzle-orm";

export const servicesRouter = new Hono();

servicesRouter.get("/", async (c) => {
  const allServices = await db
    .select()
    .from(services)
    .orderBy(asc(services.sortOrder));
  return c.json({ success: true, data: allServices });
});

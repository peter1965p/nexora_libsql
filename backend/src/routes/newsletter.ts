import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import { z } from "zod";
import { getDb } from "../db/index.js";
import { subscribers } from "../db/schema.js";

type Bindings = { DB: D1Database };

export const newsletterRouter = new Hono<{ Bindings: Bindings }>();

newsletterRouter.post("/subscribe", zValidator("json", z.object({
  email: z.string().email(),
})), async (c) => {
  const { email } = c.req.valid("json");
  const db = getDb(c.env.DB);
  try {
    await db.insert(subscribers).values({ email });
    return c.json({ success: true, data: { message: "Erfolgreich angemeldet!" } });
  } catch {
    return c.json({ success: false, error: "E-Mail bereits registriert" }, 400);
  }
});

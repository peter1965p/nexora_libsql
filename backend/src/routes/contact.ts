import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import { z } from "zod";
import { getDb } from "../db/index.js";
import { contacts } from "../db/schema.js";

type Bindings = { DB: D1Database };

export const contactRouter = new Hono<{ Bindings: Bindings }>();

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().optional(),
  message: z.string().min(10),
});

contactRouter.post("/", zValidator("json", contactSchema), async (c) => {
  const data = c.req.valid("json");
  const db = getDb(c.env.DB);
  try {
    const [contact] = await db.insert(contacts).values({
      name: data.name,
      email: data.email,
      company: data.company ?? null,
      message: data.message,
    }).returning();
    return c.json({ success: true, data: { id: contact.id, message: "Nachricht gesendet!" } });
  } catch (error) {
    return c.json({ success: false, error: "Fehler beim Speichern" }, 500);
  }
});

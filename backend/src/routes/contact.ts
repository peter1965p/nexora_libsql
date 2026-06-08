import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import { z } from "zod";
import { db } from "../db/index.js";
import { contacts } from "../db/schema.js";

const contactSchema = z.object({
  name: z.string().min(2, "Name muss mindestens 2 Zeichen haben"),
  email: z.string().email("Ungültige E-Mail-Adresse"),
  company: z.string().optional(),
  message: z.string().min(10, "Nachricht muss mindestens 10 Zeichen haben"),
});

export const contactRouter = new Hono();

contactRouter.post("/", zValidator("json", contactSchema), async (c) => {
  const data = c.req.valid("json");

  try {
    const [contact] = await db
      .insert(contacts)
      .values({
        name: data.name,
        email: data.email,
        company: data.company ?? null,
        message: data.message,
      })
      .returning();

    return c.json({
      success: true,
      data: { id: contact.id, message: "Ihre Nachricht wurde erfolgreich übermittelt." },
    });
  } catch (error) {
    console.error("Contact insert error:", error);
    return c.json({ success: false, error: "Datenbankfehler" }, 500);
  }
});

contactRouter.get("/", async (c) => {
  const allContacts = await db.select().from(contacts).orderBy(contacts.createdAt);
  return c.json({ success: true, data: allContacts });
});

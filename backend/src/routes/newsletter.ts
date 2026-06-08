import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import { z } from "zod";
import { db } from "../db/index.js";
import { subscribers } from "../db/schema.js";

const subscribeSchema = z.object({
  email: z.string().email("Ungültige E-Mail-Adresse"),
});

export const newsletterRouter = new Hono();

newsletterRouter.post("/subscribe", zValidator("json", subscribeSchema), async (c) => {
  const { email } = c.req.valid("json");

  try {
    await db.insert(subscribers).values({ email }).onConflictDoNothing();
    return c.json({ success: true, data: { message: "Erfolgreich angemeldet!" } });
  } catch (error) {
    return c.json({ success: false, error: "Fehler bei der Anmeldung" }, 500);
  }
});

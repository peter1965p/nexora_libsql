import { Hono } from "hono";
import { logger } from "hono/logger";
import { prettyJSON } from "hono/pretty-json";
import { secureHeaders } from "hono/secure-headers";
import { cors } from "hono/cors";
import { getDb } from "./db/index.js";
import { contactRouter } from "./routes/contact.js";
import { newsletterRouter } from "./routes/newsletter.js";
import { servicesRouter } from "./routes/services.js";

type Bindings = { DB: D1Database; ENVIRONMENT: string; };

const app = new Hono<{ Bindings: Bindings }>();

app.use("*", logger());
app.use("*", secureHeaders());
app.use("*", cors({
  origin: ["https://nexora.pages.dev", "http://localhost:4200"],
  allowMethods: ["GET", "POST", "OPTIONS"],
  allowHeaders: ["Content-Type"],
}));
app.use("*", prettyJSON());

// DB in Context injizieren
app.use("*", async (c, next) => {
  c.set("db" as never, getDb(c.env.DB));
  await next();
});

app.get("/health", (c) =>
  c.json({ status: "ok", service: "nexora-api", version: "1.0.0" })
);

app.route("/api/contact", contactRouter);
app.route("/api/newsletter", newsletterRouter);
app.route("/api/services", servicesRouter);

app.notFound((c) => c.json({ success: false, error: "Not found" }, 404));
app.onError((err, c) => {
  console.error(err);
  return c.json({ success: false, error: "Server error" }, 500);
});

export default app;

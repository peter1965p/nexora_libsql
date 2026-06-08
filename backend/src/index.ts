import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { logger } from "hono/logger";
import { prettyJSON } from "hono/pretty-json";
import { secureHeaders } from "hono/secure-headers";
import { corsMiddleware } from "./middleware/cors.js";
import { contactRouter } from "./routes/contact.js";
import { newsletterRouter } from "./routes/newsletter.js";
import { servicesRouter } from "./routes/services.js";
import { initializeDatabase } from "./db/index.js";

const app = new Hono();

// ─── Global Middleware ────────────────────────────────────────────────────────
app.use("*", logger());
app.use("*", secureHeaders());
app.use("*", corsMiddleware);
app.use("*", prettyJSON());

// ─── Health Check ─────────────────────────────────────────────────────────────
app.get("/health", (c) =>
  c.json({
    status: "ok",
    service: "nexora-api",
    version: "1.0.0",
    timestamp: new Date().toISOString(),
  })
);

// ─── API Routes ───────────────────────────────────────────────────────────────
app.route("/api/contact", contactRouter);
app.route("/api/newsletter", newsletterRouter);
app.route("/api/services", servicesRouter);

// ─── 404 / Error ──────────────────────────────────────────────────────────────
app.notFound((c) => c.json({ success: false, error: "Route nicht gefunden" }, 404));
app.onError((err, c) => {
  console.error("Unhandled error:", err);
  return c.json({ success: false, error: "Interner Serverfehler" }, 500);
});

// ─── Bootstrap ────────────────────────────────────────────────────────────────
const port = Number(process.env.PORT ?? 3002);

initializeDatabase().then(() => {
  serve({ fetch: app.fetch, port }, (info) => {
    console.log(`\n🚀 Nexora API läuft auf http://localhost:${info.port}`);
    console.log(`📋 Health: http://localhost:${info.port}/health\n`);
  });
}).catch((err) => {
  console.error("❌ DB init failed:", err);
  process.exit(1);
});

export default app;

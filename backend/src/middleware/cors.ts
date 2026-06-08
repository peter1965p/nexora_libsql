import { cors } from "hono/cors";

export const corsMiddleware = cors({
  origin: ["http://localhost:4200", "https://nexora.dev"],
  allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowHeaders: ["Content-Type", "Authorization"],
  maxAge: 86400,
});

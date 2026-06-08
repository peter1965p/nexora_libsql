import { createClient } from "@libsql/client";
import { drizzle } from "drizzle-orm/libsql";
import * as schema from "./schema.js";

const client = createClient({
  url: process.env.DATABASE_URL ?? "file:./nexora.db",
  // For Cloudflare D1 / Turso:
  // url: process.env.TURSO_DATABASE_URL!,
  // authToken: process.env.TURSO_AUTH_TOKEN,
});

export const db = drizzle(client, { schema });

// ─── Initialize Tables ────────────────────────────────────────────────────────
export async function initializeDatabase() {
  await client.executeMultiple(`
    CREATE TABLE IF NOT EXISTS contacts (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      company TEXT,
      message TEXT NOT NULL,
      status TEXT NOT NULL DEFAULT 'new',
      created_at TEXT NOT NULL DEFAULT (datetime('now'))
    );

    CREATE TABLE IF NOT EXISTS subscribers (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      email TEXT NOT NULL UNIQUE,
      subscribed_at TEXT NOT NULL DEFAULT (datetime('now'))
    );

    CREATE TABLE IF NOT EXISTS services (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      slug TEXT NOT NULL UNIQUE,
      title TEXT NOT NULL,
      description TEXT NOT NULL,
      icon TEXT NOT NULL,
      sort_order INTEGER DEFAULT 0
    );
  `);

  // Seed services if empty
  const result = await client.execute("SELECT COUNT(*) as c FROM services");
  const count = result.rows[0]?.c as number ?? 0;

  if (count === 0) {
    await client.executeMultiple(`
      INSERT INTO services (slug, title, description, icon, sort_order) VALUES
      ('cloud-architecture', 'Cloud Architecture', 'Skalierbare Cloud-Infrastrukturen auf AWS, GCP und Azure.', '☁', 1);
      INSERT INTO services (slug, title, description, icon, sort_order) VALUES
      ('software-development', 'Softwareentwicklung', 'Maßgeschneiderte Web- und Backend-Systeme mit TypeScript.', '⌨', 2);
      INSERT INTO services (slug, title, description, icon, sort_order) VALUES
      ('devops-automation', 'DevOps & Automation', 'CI/CD-Pipelines, IaC mit Terraform und vollautomatische Deployments.', '⚙', 3);
      INSERT INTO services (slug, title, description, icon, sort_order) VALUES
      ('it-consulting', 'IT-Beratung', 'Strategische Technologieberatung für digitale Transformation.', '💼', 4);
      INSERT INTO services (slug, title, description, icon, sort_order) VALUES
      ('security-audit', 'Security Audits', 'Penetrationstests, Code-Reviews und DSGVO-konforme Architekturen.', '🛡', 5);
      INSERT INTO services (slug, title, description, icon, sort_order) VALUES
      ('data-engineering', 'Data Engineering', 'Datenpipelines, Analytics und KI-Integration.', '📊', 6);
    `);
  }

  console.log("✓ Database initialized");
}

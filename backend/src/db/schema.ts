import { sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

// ─── Contact Inquiries ───────────────────────────────────────────────────────
export const contacts = sqliteTable("contacts", {
  id:        integer("id").primaryKey({ autoIncrement: true }),
  name:      text("name").notNull(),
  email:     text("email").notNull(),
  company:   text("company"),
  message:   text("message").notNull(),
  status:    text("status", { enum: ["new", "read", "replied"] }).default("new").notNull(),
  createdAt: text("created_at").default(sql`(datetime('now'))`).notNull(),
});

// ─── Newsletter Subscribers ──────────────────────────────────────────────────
export const subscribers = sqliteTable("subscribers", {
  id:           integer("id").primaryKey({ autoIncrement: true }),
  email:        text("email").notNull().unique(),
  subscribedAt: text("subscribed_at").default(sql`(datetime('now'))`).notNull(),
});

// ─── Services ────────────────────────────────────────────────────────────────
export const services = sqliteTable("services", {
  id:          integer("id").primaryKey({ autoIncrement: true }),
  slug:        text("slug").notNull().unique(),
  title:       text("title").notNull(),
  description: text("description").notNull(),
  icon:        text("icon").notNull(),
  sortOrder:   integer("sort_order").default(0),
});

export type Contact    = typeof contacts.$inferSelect;
export type NewContact = typeof contacts.$inferInsert;
export type Subscriber = typeof subscribers.$inferSelect;
export type Service    = typeof services.$inferSelect;

# Nexora — Unternehmenswebseite

Professionelle Firmenwebseite für Nexora GmbH, gebaut mit modernstem TypeScript-Stack.

## Tech Stack

| Schicht | Technologie |
|---|---|
| **Frontend** | Angular 18 (Standalone, Signals) |
| **Styling** | Tailwind CSS 3.4.4 |
| **Backend** | Hono auf Node.js |
| **Datenbank** | SQLite via Drizzle ORM |
| **Deployment** | Cloudflare Workers + Pages |
| **Sprache** | TypeScript (vollständig) |

## Projektstruktur

```
nexora/
├── frontend/               # Angular 18 App
│   └── src/app/
│       ├── core/           # Services, Guards
│       ├── features/       # Seiten (Home, Leistungen, Über uns, Kontakt)
│       └── shared/         # Wiederverwendbare Komponenten (Navbar, Footer)
├── backend/                # Hono API Server
│   └── src/
│       ├── db/             # Drizzle Schema & Verbindung
│       ├── routes/         # API Routen (/contact, /newsletter, /services)
│       └── middleware/     # CORS, Auth
├── shared/                 # Gemeinsame TypeScript-Types
├── wrangler.toml           # Cloudflare Konfiguration
└── .github/workflows/      # CI/CD Pipeline
```

## Schnellstart

```bash
# Abhängigkeiten installieren
npm install

# Entwicklungsserver starten (Frontend + Backend parallel)
npm run dev

# Frontend: http://localhost:4200
# Backend:  http://localhost:3000
# API Docs: http://localhost:3000/health
```

## API Endpunkte

| Method | Route | Beschreibung |
|---|---|---|
| GET | `/health` | Health Check |
| POST | `/api/contact` | Kontaktformular senden |
| POST | `/api/newsletter/subscribe` | Newsletter anmelden |
| GET | `/api/services` | Leistungen abrufen |

## Deployment (Cloudflare)

```bash
# 1. Cloudflare D1 Datenbank erstellen
npx wrangler d1 create nexora-db

# 2. database_id in wrangler.toml eintragen

# 3. Alles bauen
npm run build

# 4. API deployen (Workers)
npx wrangler deploy

# 5. Frontend deployen (Pages)
npx wrangler pages deploy frontend/dist/nexora --project-name=nexora-web
```

## Umgebungsvariablen

Kopieren Sie `.env.example` zu `.env` und füllen Sie die Werte aus.

# Tide Bridge Live OS MVP

**Tide Bridge Live OS** is a private B2B platform MVP for connecting K-POP live IP with global promoters, venues, brands, investors, and fan demand data.

This starter is designed for Codex/GitHub/Vercel/Supabase development.

## Core positioning

> Connecting K-POP Live IP to Global Promoters.

The first release should feel like a premium entertainment business website on the outside, while operating as a private B2B deal platform behind login.

## Included in this MVP starter

- Public website
  - Home
  - About
  - Platform
  - For Promoters
  - For Agencies
  - IP Catalog Preview
  - Fan Demand
  - Partner Application
- Partner portal
  - Partner dashboard
  - Logged-in IP catalog
  - IP detail
  - Submit offer
- Admin console
  - Dashboard
  - IP management
  - Promoter applications
  - Offer pipeline
  - Fan demand dashboard
  - P&L / BEP simulator
- Supabase-ready API routes
  - `/api/fan-demand`
  - `/api/partner-applications`
  - `/api/offers`
- Supabase SQL schema
- PRD and Codex start prompt
- Local promoter recruitment playbook

## Tech stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Supabase
- Vercel-ready structure

## Run locally

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open `http://localhost:3000`.

## Supabase setup

1. Create a Supabase project.
2. Copy the SQL in `supabase/schema.sql` into Supabase SQL editor.
3. Add env variables to `.env.local`.
4. Restart the dev server.

If Supabase env variables are empty, forms will return mock success responses so the product can still be reviewed as a clickable MVP.

## Codex handoff

Use `CODEX_START_PROMPT.md` as the first Codex instruction. Then break implementation into issues based on `PRD.md`.

## Current MVP principle

Do **not** build ticketing, payment splitting, streaming, or merch commerce in v0.1.

The first monetizable goal is:

1. Recruit verified local promoters.
2. Show selected K-POP live IP/packages.
3. Collect structured offers.
4. Review each deal through P&L/BEP logic.
5. Move qualified offers into a controlled deal room process.

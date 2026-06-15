# Tide Bridge Live OS MVP

**Tide Bridge Live OS** is a private B2B infrastructure MVP for global K-POP live IP expansion through verified partners, private IP access, offer management, and market demand intelligence.

This starter is designed for Codex/GitHub/Vercel/Supabase development.

## Core positioning

> Private B2B Live IP Infrastructure.

The first release should read as a premium, confidential operating layer for reviewed global live IP opportunities. It is not an open marketplace, fan app, broker site, or consumer commerce product.

## Included in this MVP starter

- Public website
  - Home
  - About
  - Platform
  - For Promoters
  - For Agencies
  - Private IP Catalog preview
  - Market Demand Intelligence
  - Private access application
- Partner portal
  - Partner dashboard
  - Logged-in IP catalog
  - IP detail
  - Submit structured opportunity review
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

Requires Node.js 20 or newer.

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

Required variables:

```bash
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
```

If Supabase env variables are empty or set to obvious placeholder values, forms will return mock success responses so the product can still be reviewed as a clickable MVP.

## Vercel beta deployment

1. Import this GitHub repository into Vercel.
2. Set the Vercel project framework preset to Next.js.
3. Use the default install and build commands:
   - Install Command: `npm install`
   - Build Command: `npm run build`
   - Output Directory: leave blank for Next.js
4. Confirm the project uses Node.js 20 or newer. The repository includes `.nvmrc` and `package.json` engines for this baseline.
5. Add the Supabase environment variables in Vercel Project Settings, for Preview and Production:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY`
6. For a design-only preview, leave the Supabase values blank or use placeholder values. The intake APIs will respond in mock mode instead of writing to Supabase.
7. For a connected beta, create the Supabase tables from `supabase/schema.sql`, add the real Supabase values in Vercel, and redeploy.
8. After deployment, smoke test `/`, `/apply`, `/fan-demand`, `/partner/submit-offer`, and `/admin/pnl`.

Deployment checklist:

- `npm run typecheck` passes locally with Node.js 20.
- `npm run build` passes locally with Node.js 20.
- Supabase schema has been applied before using real env values.
- Preview URL is reviewed without adding consumer commerce, media delivery, or unrelated monetization scope.

## Codex handoff

Use `CODEX_START_PROMPT.md` as the first Codex instruction. Then break implementation into issues based on `PRD.md`.

## Current MVP principle

Do **not** build consumer commerce, media delivery, or unrelated monetization modules in v0.1.

The first monetizable goal is:

1. Recruit verified local promoters.
2. Show selected K-POP live IP/packages.
3. Collect structured opportunity review requests.
4. Review each opportunity through P&L/BEP and deal-readiness logic.
5. Move qualified opportunities into a controlled private review process.

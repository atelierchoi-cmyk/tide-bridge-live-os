# Codex Start Prompt — Tide Bridge Live OS

Build and harden this MVP web application called **Tide Bridge Live OS**.

It is a private B2B platform connecting K-POP live IP with global promoters, venues, brands, investors, and fan demand data.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Supabase database and auth
- Vercel deployment

## Product intent

This should not feel like a fan community app. It should feel like a premium, serious global entertainment business platform.

Design direction:

- cinematic black
- warm ivory
- restrained gold accent
- premium live-entertainment deal-room tone
- minimal, global, investor-grade

## MVP priorities

1. Public website for credibility and partner acquisition.
2. Promoter/application intake.
3. Fan demand signal collection.
4. IP Catalog and IP detail pages.
5. Submit Offer flow.
6. Admin dashboard and pipeline visibility.
7. P&L/BEP simulator.
8. Supabase persistence.
9. Authentication and role-based access.

## Database tables

Use `supabase/schema.sql` as the base schema.

Tables:

- users
- organizations
- artists
- ip_packages
- promoters
- venues
- deals
- offers
- pnl_scenarios
- demand_signals
- documents
- partner_applications

## Business logic

### Fan demand form

Save:

- name
- email
- country
- city
- artist preference
- ticket range
- VIP interest
- consent

### Partner application form

Save:

- company
- contact name
- email
- country
- city
- partner type
- past projects
- website
- status = pending

### Offer form

Save:

- IP package
- city
- venue
- capacity
- date window
- guarantee amount
- currency
- deal mode
- notes
- status = submitted

### P&L simulator

Calculate:

- gross revenue
- total cost
- platform fee
- projected profit
- BEP sales ratio

## Work plan

1. Run the project locally and fix build/type errors.
2. Wire forms to Supabase where env vars are present.
3. Add Supabase Auth.
4. Add role-based middleware: admin, partner, agency.
5. Convert mock data to database-backed data.
6. Polish UI and mobile responsiveness.
7. Add seed script.
8. Prepare Vercel deployment.
9. Create issues/PRs per feature.

## Exclusions for v0.1

Do not build:

- ticketing
- PG/payment splitting
- live streaming
- merch commerce
- fan community
- AI recommendation engine
- blockchain/NFT features

The first release must be a **homepage-style private B2B live IP deal platform**.

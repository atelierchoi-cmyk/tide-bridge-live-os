# Product Requirements Document v0.1

## Product name

**Tide Bridge Live OS**

## One-line definition

A private B2B platform that connects K-POP live IP with verified global promoters, venues, brands, investors, and fan demand signals.

## Business objective

Launch a functional MVP that can be used to recruit local promoters and collect structured offers for K-POP concerts, fan meetings, showcases, festivals, and brand-linked live events.

## Primary users

| User | Goal |
|---|---|
| Tide Bridge Admin | Manage IP, promoters, offers, P&L, demand, and pipeline |
| Local Promoter | Discover K-POP live IP and submit structured market offers |
| Agency/IP Holder | Submit or validate live IP packages and review market interest |
| Brand Sponsor | Explore sponsorship-ready K-POP live opportunities |
| Fan | Register demand for city/artist/VIP interest |

## MVP pages

### Public

- `/` Home
- `/about` About
- `/platform` Platform overview
- `/promoters` For Promoters
- `/agencies` For Agencies
- `/ip-catalog` Public IP preview
- `/fan-demand` Fan demand form
- `/apply` Partner application form
- `/login` Partner login placeholder

### Partner

- `/partner` Partner dashboard
- `/partner/ip-catalog` Private catalog
- `/partner/ip/[id]` IP detail
- `/partner/submit-offer` Submit offer

### Admin

- `/admin` Admin dashboard
- `/admin/ip` IP management
- `/admin/applications` Partner applications
- `/admin/offers` Offer pipeline
- `/admin/demand` Fan demand data
- `/admin/pnl` P&L/BEP simulator

## MVP success metrics

| Metric | v0.1 target |
|---|---:|
| Promoter applications | 50 |
| Verified promoters | 15 |
| IP packages listed | 10 |
| Submitted offers | 20 |
| Qualified deals | 5 |
| Fan demand signals | 5,000 |
| First monetizable deal | 1 |

## Core modules

### 1. IP Catalog

Stores and displays live IP packages.

Required fields:

- Artist/IP name
- Category
- Format
- Recommended markets
- Capacity range
- Base guarantee
- Currency
- Deal mode
- Market fit
- Assets access level

### 2. Partner Applications

Collects promoter, agency, venue, brand, and investor leads.

Status values:

- pending
- reviewing
- approved
- rejected

### 3. Offer Pipeline

Structured offer intake for IP packages.

Status values:

- submitted
- under_review
- counter_offer
- approved
- contracting
- confirmed
- settled
- archived

### 4. P&L/BEP Simulator

Inputs:

- capacity
- average ticket price
- sales ratio
- artist guarantee
- local production cost
- marketing cost
- travel cost
- platform fee percentage

Outputs:

- gross revenue
- total cost
- platform fee
- projected profit
- BEP sales ratio

### 5. Fan Demand Signal

Collects city and artist demand before a promoter commits.

Required fields:

- name
- email
- country
- city
- artist preference
- ticket range
- VIP interest
- consent

## Access rules

| Area | Public | Partner | Admin |
|---|---:|---:|---:|
| Public website | Yes | Yes | Yes |
| Public IP preview | Yes | Yes | Yes |
| Private IP details | No | Yes | Yes |
| Submit offer | No | Yes | Yes |
| Admin dashboards | No | No | Yes |
| P&L simulator | No | Limited | Full |

## v0.1 exclusions

- Native ticketing
- Payment/settlement automation
- Streaming platform
- Merchandise store
- Full fan community
- AI matching engine
- Blockchain/NFT

## Strategic note

The product should first convert the founder's network, IP knowledge, and promoter relationships into a repeatable operating system. The MVP must support deal flow before it expands into consumer-facing ticketing or fan monetization.

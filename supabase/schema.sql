create extension if not exists "uuid-ossp";

create table if not exists organizations (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  type text not null check (type in ('admin','promoter','agency','venue','brand','investor')),
  country text,
  city text,
  website text,
  status text not null default 'active',
  created_at timestamptz not null default now()
);

create table if not exists users (
  id uuid primary key default uuid_generate_v4(),
  auth_user_id uuid,
  organization_id uuid references organizations(id),
  name text,
  email text unique not null,
  role text not null default 'partner' check (role in ('admin','partner','agency')),
  created_at timestamptz not null default now()
);

create table if not exists artists (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  category text,
  agency text,
  summary text,
  access_level text not null default 'partner',
  created_at timestamptz not null default now()
);

create table if not exists ip_packages (
  id uuid primary key default uuid_generate_v4(),
  artist_id uuid references artists(id),
  title text not null,
  category text,
  format text,
  summary text,
  markets text[] default '{}',
  capacity_min integer,
  capacity_max integer,
  base_guarantee numeric,
  currency text not null default 'USD',
  deal_mode text not null default 'guarantee',
  access_level text not null default 'partner',
  created_at timestamptz not null default now()
);

create table if not exists promoters (
  id uuid primary key default uuid_generate_v4(),
  organization_id uuid references organizations(id),
  contact_name text,
  email text,
  whatsapp text,
  country text,
  city text,
  past_projects text,
  reliability_score integer default 0,
  payment_rating text,
  category_fit text[],
  created_at timestamptz not null default now()
);

create table if not exists venues (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  country text,
  city text,
  capacity integer,
  standing_allowed boolean default false,
  rental_cost numeric,
  technical_notes text,
  created_at timestamptz not null default now()
);

create table if not exists partner_applications (
  id uuid primary key default uuid_generate_v4(),
  company text not null,
  contact_name text not null,
  email text not null,
  country text,
  city text,
  partner_type text not null,
  website text,
  past_projects text,
  status text not null default 'pending',
  created_at timestamptz not null default now()
);

create table if not exists deals (
  id uuid primary key default uuid_generate_v4(),
  ip_package_id uuid references ip_packages(id),
  promoter_id uuid references promoters(id),
  venue_id uuid references venues(id),
  city text,
  country text,
  status text not null default 'lead',
  pipeline_value numeric,
  currency text default 'USD',
  created_at timestamptz not null default now()
);

create table if not exists offers (
  id uuid primary key default uuid_generate_v4(),
  deal_id uuid references deals(id),
  ip_package_id text,
  company text,
  contact_email text,
  city text,
  venue text,
  capacity integer,
  date_window text,
  guarantee_amount numeric,
  currency text default 'USD',
  deal_mode text,
  notes text,
  status text not null default 'submitted',
  created_at timestamptz not null default now()
);

create table if not exists pnl_scenarios (
  id uuid primary key default uuid_generate_v4(),
  deal_id uuid references deals(id),
  capacity integer,
  average_ticket_price numeric,
  sales_ratio numeric,
  artist_guarantee numeric,
  local_production_cost numeric,
  marketing_cost numeric,
  travel_cost numeric,
  platform_fee_pct numeric,
  gross_revenue numeric,
  total_cost numeric,
  projected_profit numeric,
  bep_sales_ratio numeric,
  created_at timestamptz not null default now()
);

create table if not exists demand_signals (
  id uuid primary key default uuid_generate_v4(),
  name text,
  email text,
  country text,
  city text,
  artist_preference text,
  ticket_range text,
  vip_interest boolean default false,
  consent boolean default true,
  created_at timestamptz not null default now()
);

create table if not exists documents (
  id uuid primary key default uuid_generate_v4(),
  deal_id uuid references deals(id),
  title text not null,
  file_url text,
  document_type text,
  access_level text default 'admin',
  created_at timestamptz not null default now()
);

alter table organizations enable row level security;
alter table users enable row level security;
alter table artists enable row level security;
alter table ip_packages enable row level security;
alter table partner_applications enable row level security;
alter table offers enable row level security;
alter table demand_signals enable row level security;

-- Production policy TODO:
-- 1. Admin role can read/write all tables.
-- 2. Approved partners can read partner/public IP packages.
-- 3. Public can insert partner_applications and demand_signals only.
-- 4. Public cannot read private applications, offers, or demand records.

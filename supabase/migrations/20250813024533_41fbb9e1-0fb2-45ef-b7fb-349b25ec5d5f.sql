
-- 1) Private bucket for originals (not public)
insert into storage.buckets (id, name, public)
values ('art-originals', 'art-originals', false)
on conflict (id) do nothing;

-- 2) Common trigger for updated_at
create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

-- 3) Artworks (publicly readable)
create table if not exists public.artworks (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  description text,
  tags text[] default '{}',
  gallery_image_url text,            -- public, reduced-size image used on site
  original_bucket text default 'art-originals',
  original_path text,                -- path/key inside the bucket for full-size file
  width_px integer,
  height_px integer,
  dpi integer,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

drop trigger if exists trg_artworks_updated_at on public.artworks;
create trigger trg_artworks_updated_at
before update on public.artworks
for each row execute function public.set_updated_at();

alter table public.artworks enable row level security;

-- Public read-only access for the website
drop policy if exists "Public read artworks" on public.artworks;
create policy "Public read artworks"
on public.artworks for select
to anon
using (true);

-- 4) Products (publicly readable)
create table if not exists public.products (
  id uuid primary key default gen_random_uuid(),
  artwork_id uuid not null references public.artworks(id) on delete cascade,
  title text not null,
  description text,
  base_price_cents integer not null default 0,
  currency text not null default 'usd',
  status text not null default 'draft', -- draft|published|archived
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

drop trigger if exists trg_products_updated_at on public.products;
create trigger trg_products_updated_at
before update on public.products
for each row execute function public.set_updated_at();

alter table public.products enable row level security;

drop policy if exists "Public read products" on public.products;
create policy "Public read products"
on public.products for select
to anon
using (true);

-- 5) Product variants (publicly readable)
create table if not exists public.product_variants (
  id uuid primary key default gen_random_uuid(),
  product_id uuid not null references public.products(id) on delete cascade,
  variant_id integer,                -- Printify variant id
  size text,
  color text,
  price_cents integer not null default 0,
  is_enabled boolean default true,
  mockup_url text,                   -- main mockup image for the variant
  data jsonb,                        -- raw variant payload (optional)
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

drop trigger if exists trg_product_variants_updated_at on public.product_variants;
create trigger trg_product_variants_updated_at
before update on public.product_variants
for each row execute function public.set_updated_at();

alter table public.product_variants enable row level security;

drop policy if exists "Public read product_variants" on public.product_variants;
create policy "Public read product_variants"
on public.product_variants for select
to anon
using (true);

-- 6) Printify product linkage (internal)
create table if not exists public.printify_products (
  id uuid primary key default gen_random_uuid(),
  product_id uuid not null references public.products(id) on delete cascade,
  shop_id text not null,
  printify_product_id text unique,
  print_provider_id integer,
  blueprint_id integer,
  is_published boolean default false,
  data jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

drop trigger if exists trg_printify_products_updated_at on public.printify_products;
create trigger trg_printify_products_updated_at
before update on public.printify_products
for each row execute function public.set_updated_at();

alter table public.printify_products enable row level security;
-- No public policies: internal-only via Edge Functions (service role bypasses RLS)

-- 7) Orders (internal)
create table if not exists public.orders (
  id uuid primary key default gen_random_uuid(),
  user_id uuid,                      -- optional; no FK to auth.users
  email text,
  status text not null default 'pending', -- pending|paid|failed|fulfilled|canceled
  amount_cents integer not null default 0,
  currency text not null default 'usd',
  stripe_session_id text,
  stripe_payment_intent text,
  printify_order_id text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

drop trigger if exists trg_orders_updated_at on public.orders;
create trigger trg_orders_updated_at
before update on public.orders
for each row execute function public.set_updated_at();

alter table public.orders enable row level security;
-- No public policies; Edge Functions will read/write with service role

-- 8) Sync jobs (internal operational logs)
create table if not exists public.sync_jobs (
  id uuid primary key default gen_random_uuid(),
  type text not null,                -- e.g., 'printify_create', 'printify_publish', 'update_prices'
  payload jsonb not null,
  status text not null default 'queued', -- queued|running|success|error
  error text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

drop trigger if exists trg_sync_jobs_updated_at on public.sync_jobs;
create trigger trg_sync_jobs_updated_at
before update on public.sync_jobs
for each row execute function public.set_updated_at();

alter table public.sync_jobs enable row level security;
-- No public policies

-- 9) Helpful indexes
create unique index if not exists artworks_slug_idx on public.artworks(slug);
create index if not exists products_artwork_id_idx on public.products(artwork_id);
create index if not exists variants_product_id_idx on public.product_variants(product_id);
create index if not exists printify_products_product_id_idx on public.printify_products(product_id);
create index if not exists orders_status_created_idx on public.orders(status, created_at desc);

-- 10) Enable realtime for public-facing tables
alter table public.artworks replica identity full;
alter table public.products replica identity full;
alter table public.product_variants replica identity full;

alter publication supabase_realtime add table public.artworks;
alter publication supabase_realtime add table public.products;
alter publication supabase_realtime add table public.product_variants;

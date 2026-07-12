-- Run this in your Supabase project's SQL Editor (Project -> SQL Editor -> New query)

-- 1. Category enum: which section an event shows up in on the website
create type event_category as enum ('upcoming', 'latest', 'previous');

-- 2. Events table
create table if not exists public.events (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text not null default '',
  event_date date not null,
  location text not null default '',
  image_url text,
  category event_category not null default 'upcoming',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- keep updated_at fresh on every edit
create or replace function public.set_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

drop trigger if exists events_set_updated_at on public.events;
create trigger events_set_updated_at
  before update on public.events
  for each row execute function public.set_updated_at();

-- 3. Row Level Security
alter table public.events enable row level security;

-- Anyone (including anonymous website visitors) can read events
create policy "Public can view events"
  on public.events for select
  to anon, authenticated
  using (true);

-- Only logged-in (admin) users can create/edit/delete events
create policy "Authenticated users can insert events"
  on public.events for insert
  to authenticated
  with check (true);

create policy "Authenticated users can update events"
  on public.events for update
  to authenticated
  using (true)
  with check (true);

create policy "Authenticated users can delete events"
  on public.events for delete
  to authenticated
  using (true);

-- 4. Storage bucket for event images (optional but recommended)
insert into storage.buckets (id, name, public)
values ('event-images', 'event-images', true)
on conflict (id) do nothing;

create policy "Public can view event images"
  on storage.objects for select
  to anon, authenticated
  using (bucket_id = 'event-images');

create policy "Authenticated users can upload event images"
  on storage.objects for insert
  to authenticated
  with check (bucket_id = 'event-images');

create policy "Authenticated users can update event images"
  on storage.objects for update
  to authenticated
  using (bucket_id = 'event-images');

create policy "Authenticated users can delete event images"
  on storage.objects for delete
  to authenticated
  using (bucket_id = 'event-images');

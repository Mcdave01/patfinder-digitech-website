# Events Admin Dashboard — Setup Guide

This adds a Supabase-backed Events system:
- **Public page**: `/events` — shows Latest, Upcoming, and Previous events.
- **Admin dashboard**: `/admin/dashboard` — add, edit, delete events (protected by login).
- **Login**: `/admin/login`.

## 1. Create a Supabase project
1. Go to https://supabase.com and create a free project (or use an existing one).
2. In the dashboard, go to **Project Settings -> API**. Copy the **Project URL** and the **anon public key**.

## 2. Set your environment variables
In the project root, copy `.env.local.example` to `.env.local` and fill in the values:

```
NEXT_PUBLIC_SUPABASE_URL=https://your-project-ref.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-public-key
```

`.env.local` is already gitignored, so it stays out of version control.

## 3. Run the database setup script
1. In Supabase, go to **SQL Editor -> New query**.
2. Paste the entire contents of `supabase/schema.sql` and run it.

This creates:
- An `events` table with `title`, `description`, `event_date`, `location`, `image_url`, `category` (`upcoming` / `latest` / `previous`).
- Row Level Security so anyone can *read* events, but only logged-in admins can create/edit/delete.
- A public `event-images` storage bucket for photo uploads from the dashboard.

## 4. Create your admin login
Supabase Auth needs at least one user so you can log in to `/admin/dashboard`.

1. In Supabase, go to **Authentication -> Users -> Add user**.
2. Create a user with your email and a password (check "Auto Confirm User" so you don't need email verification).
3. Use those credentials to sign in at `/admin/login`.

You can add more admin users the same way later.

## 5. Install dependencies & run
```bash
npm install --legacy-peer-deps
npm run dev
```

(`--legacy-peer-deps` is needed because of a pre-existing `date-fns`/`react-day-picker` version conflict in the project — unrelated to this feature.)

Visit:
- `http://localhost:3000/admin/login` to sign in.
- `http://localhost:3000/admin/dashboard` to manage events.
- `http://localhost:3000/events` to see the public events page.

## How it works
- `lib/supabase/client.ts` / `server.ts` — Supabase clients for the browser and server.
- `middleware.ts` — protects everything under `/admin` except `/admin/login`; redirects signed-in users away from the login page.
- `lib/actions/events.ts` — server actions (`createEvent`, `updateEvent`, `deleteEvent`, `signOutAction`) used by the dashboard. Each one checks that a user is authenticated before writing to the database (and RLS enforces it server-side too).
- `app/admin/dashboard/` — the dashboard UI (`EventManager.tsx` list + tabs, `EventFormDialog.tsx` add/edit modal with image upload to Supabase Storage).
- `app/events/page.tsx` — public-facing page, grouped by category.
- The **Header** nav now includes an "Events" link.

## Notes / things you may want to customize
- Only one "latest" event is really meant to be featured at a time — the category is just a manual dropdown, so you decide which event is "latest" by editing it.
- If you'd rather auto-derive Upcoming/Previous from today's date instead of a manual field, that's a small change in `lib/actions/events.ts` and the events page — happy to do that if you prefer.
- To add more admins later, just create more users in Supabase Auth — no code changes needed.

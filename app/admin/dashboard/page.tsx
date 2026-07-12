import { createClient } from '@/lib/supabase/server';
import type { EventRecord } from '@/lib/types';
import EventManager from './EventManager';
import { signOutAction } from '@/lib/actions/events';
import { LogOut } from 'lucide-react';
import Image from 'next/image';

export const dynamic = 'force-dynamic';

export default async function DashboardPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: events, error } = await supabase
    .from('events')
    .select('*')
    .order('event_date', { ascending: false });

  return (
    <div className="min-h-screen bg-[hsl(var(--muted))]">
      <header className="bg-white border-b border-[hsl(var(--border))] sticky top-0 z-10">
        <div className="container-custom flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-[hsl(var(--primary))] rounded-lg flex items-center justify-center">
              <Image src="/logo_path.jpg" alt="Logo" width={32} height={32} className="object-contain rounded" />
            </div>
            <div>
              <div className="font-bold leading-none">PathFinder Admin</div>
              <div className="text-xs text-[hsl(var(--muted-foreground))]">{user?.email}</div>
            </div>
          </div>
          <form action={signOutAction}>
            <button
              type="submit"
              className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-[hsl(var(--primary))] transition-colors"
            >
              <LogOut size={16} />
              Sign out
            </button>
          </form>
        </div>
      </header>

      <main className="container-custom py-8">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-foreground">Events</h1>
          <p className="text-sm text-[hsl(var(--muted-foreground))]">
            Add, edit, or remove upcoming, latest, and previous events shown on the website.
          </p>
        </div>

        {error && (
          <p className="mb-4 text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-2">
            Could not load events: {error.message}
          </p>
        )}

        <EventManager initialEvents={(events as EventRecord[]) || []} />
      </main>
    </div>
  );
}

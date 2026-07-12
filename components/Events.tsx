import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { createClient } from '@/lib/supabase/server';
import type { EventRecord } from '@/lib/types';
import EventCard from './EventCard';

export default async function Events() {
  const supabase = await createClient();
  const { data } = await supabase
    .from('events')
    .select('*')
    .order('event_date', { ascending: false })
    .limit(12);

  const events = (data as EventRecord[]) || [];
  if (events.length === 0) return null;

  const latestEvent = events.find((e) => e.category === 'latest');
  const upcomingEvents = events
    .filter((e) => e.category === 'upcoming')
    .sort((a, b) => a.event_date.localeCompare(b.event_date))
    .slice(0, 3);

  // Nothing worth showing on the homepage yet
  if (!latestEvent && upcomingEvents.length === 0) return null;

  return (
    <section id="events" className="section-spacing bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 bg-[hsl(var(--muted))] text-[hsl(var(--primary))] rounded-full text-sm font-semibold mb-4">
            EVENTS
          </div>
          <h2 className="heading-md">What's Happening</h2>
          <p className="subheading mt-4 mx-auto">
            Catch up on our latest event and see what's coming up next.
          </p>
        </div>

        {latestEvent && (
          <div className="mb-12">
            <EventCard event={latestEvent} featured />
          </div>
        )}

        {upcomingEvents.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {upcomingEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        )}

        <div className="text-center">
          <Link href="/events" className="btn-primary inline-flex items-center gap-2">
            View All Events
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}

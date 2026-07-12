import { createClient } from '@/lib/supabase/server';
import type { EventCategory, EventRecord } from '@/lib/types';
import EventCard from './EventCard';

interface EventsSectionProps {
  title: string;
  category: EventCategory;
  featureFirst?: boolean;
  emptyMessage?: string | null;
}

export default async function EventsSection({
  title,
  category,
  featureFirst = false,
  emptyMessage = null,
}: EventsSectionProps) {
  const supabase = await createClient();
  const { data } = await supabase
    .from('events')
    .select('*')
    .eq('category', category)
    .order('event_date', { ascending: category === 'upcoming' });

  const events = (data as EventRecord[]) || [];

  if (events.length === 0) {
    if (!emptyMessage) return null;
    return (
      <section className="section-spacing bg-white">
        <div className="container-custom">
          <h2 className="heading-md mb-8">{title}</h2>
          <p className="text-center text-[hsl(var(--muted-foreground))]">{emptyMessage}</p>
        </div>
      </section>
    );
  }

  const [first, ...rest] = events;

  return (
    <section className="section-spacing bg-white">
      <div className="container-custom">
        <h2 className="heading-md mb-8">{title}</h2>
        <div className="space-y-8">
          {featureFirst && <EventCard event={first} featured />}
          {(featureFirst ? rest : events).length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {(featureFirst ? rest : events).map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

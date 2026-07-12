'use client';

import { useEffect, useMemo, useState, useTransition } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Plus, Pencil, Trash2, Calendar, MapPin, Loader2 } from 'lucide-react';
import type { EventCategory, EventRecord } from '@/lib/types';
import { deleteEvent } from '@/lib/actions/events';
import EventFormDialog from './EventFormDialog';

const TABS: { key: 'all' | EventCategory; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'upcoming', label: 'Upcoming' },
  { key: 'latest', label: 'Latest' },
  { key: 'previous', label: 'Previous' },
];

const CATEGORY_STYLES: Record<EventCategory, string> = {
  upcoming: 'bg-blue-100 text-blue-700',
  latest: 'bg-green-100 text-green-700',
  previous: 'bg-gray-200 text-gray-700',
};

export default function EventManager({ initialEvents }: { initialEvents: EventRecord[] }) {
  const router = useRouter();
  const [events, setEvents] = useState(initialEvents);

  // Keep local state in sync whenever the server component re-fetches
  // (e.g. after router.refresh() following a create/update/delete).
  useEffect(() => {
    setEvents(initialEvents);
  }, [initialEvents]);
  const [tab, setTab] = useState<'all' | EventCategory>('all');
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingEvent, setEditingEvent] = useState<EventRecord | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const filtered = useMemo(
    () => (tab === 'all' ? events : events.filter((e) => e.category === tab)),
    [events, tab]
  );

  function openCreate() {
    setEditingEvent(null);
    setDialogOpen(true);
  }

  function openEdit(event: EventRecord) {
    setEditingEvent(event);
    setDialogOpen(true);
  }

  function handleDelete(id: string) {
    if (!confirm('Delete this event? This cannot be undone.')) return;
    setDeletingId(id);
    startTransition(async () => {
      const result = await deleteEvent(id);
      setDeletingId(null);
      if (result?.error) {
        alert(result.error);
        return;
      }
      setEvents((prev) => prev.filter((e) => e.id !== id));
      router.refresh();
    });
  }

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <div className="flex gap-2 flex-wrap">
          {TABS.map((t) => (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                tab === t.key
                  ? 'bg-[hsl(var(--primary))] text-white'
                  : 'bg-white text-foreground border border-[hsl(var(--border))] hover:border-[hsl(var(--primary))]'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
        <button
          onClick={openCreate}
          className="flex items-center gap-2 bg-[hsl(var(--primary))] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[hsl(var(--primary))]/90 transition-colors"
        >
          <Plus size={18} />
          Add Event
        </button>
      </div>

      {filtered.length === 0 ? (
        <div className="bg-white rounded-xl border border-[hsl(var(--border))] p-12 text-center text-[hsl(var(--muted-foreground))]">
          No events in this category yet.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-xl border border-[hsl(var(--border))] overflow-hidden flex flex-col"
            >
              <div className="relative h-36 bg-[hsl(var(--muted))]">
                <Image
                  src={event.image_url || '/placeholder.svg'}
                  alt={event.title}
                  fill
                  className="object-cover"
                />
                <span
                  className={`absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-semibold capitalize ${CATEGORY_STYLES[event.category]}`}
                >
                  {event.category}
                </span>
              </div>
              <div className="p-4 flex-1 flex flex-col">
                <h3 className="font-semibold text-foreground mb-1 line-clamp-2">{event.title}</h3>
                <div className="flex items-center gap-1.5 text-xs text-[hsl(var(--muted-foreground))] mb-1">
                  <Calendar size={13} />
                  {new Date(event.event_date + 'T00:00:00').toLocaleDateString(undefined, {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                  })}
                </div>
                {event.location && (
                  <div className="flex items-center gap-1.5 text-xs text-[hsl(var(--muted-foreground))] mb-3">
                    <MapPin size={13} />
                    {event.location}
                  </div>
                )}
                <p className="text-sm text-[hsl(var(--muted-foreground))] line-clamp-2 mb-4 flex-1">
                  {event.description}
                </p>
                <div className="flex gap-2 pt-3 border-t border-[hsl(var(--border))]">
                  <button
                    onClick={() => openEdit(event)}
                    className="flex-1 flex items-center justify-center gap-1.5 text-sm font-medium py-2 rounded-lg border border-[hsl(var(--border))] hover:border-[hsl(var(--primary))] hover:text-[hsl(var(--primary))] transition-colors"
                  >
                    <Pencil size={14} />
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(event.id)}
                    disabled={isPending && deletingId === event.id}
                    className="flex-1 flex items-center justify-center gap-1.5 text-sm font-medium py-2 rounded-lg border border-red-200 text-red-600 hover:bg-red-50 transition-colors disabled:opacity-60"
                  >
                    {isPending && deletingId === event.id ? (
                      <Loader2 size={14} className="animate-spin" />
                    ) : (
                      <Trash2 size={14} />
                    )}
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {dialogOpen && (
        <EventFormDialog
          event={editingEvent}
          onClose={() => setDialogOpen(false)}
          onSaved={() => {
            setDialogOpen(false);
            setEditingEvent(null);
            router.refresh();
          }}
        />
      )}
    </div>
  );
}

'use client';

import { useState, useTransition } from 'react';
import { X, Loader2 } from 'lucide-react';
import type { EventCategory, EventInput, EventRecord } from '@/lib/types';
import { createEvent, updateEvent } from '@/lib/actions/events';
import { createClient } from '@/lib/supabase/client';

export default function EventFormDialog({
  event,
  onClose,
  onSaved,
}: {
  event: EventRecord | null;
  onClose: () => void;
  onSaved: () => void;
}) {
  const isEditing = Boolean(event);

  const [form, setForm] = useState<EventInput>({
    title: event?.title ?? '',
    description: event?.description ?? '',
    event_date: event?.event_date ?? '',
    location: event?.location ?? '',
    image_url: event?.image_url ?? '',
    category: event?.category ?? 'upcoming',
  });
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  function update<K extends keyof EventInput>(key: K, value: EventInput[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function handleImageUpload(file: File) {
    setUploading(true);
    setError(null);
    try {
      const supabase = createClient();
      const ext = file.name.split('.').pop();
      const path = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;
      const { error: uploadError } = await supabase.storage
        .from('event-images')
        .upload(path, file);
      if (uploadError) throw uploadError;
      const { data } = supabase.storage.from('event-images').getPublicUrl(path);
      update('image_url', data.publicUrl);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Image upload failed');
    } finally {
      setUploading(false);
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    startTransition(async () => {
      const result = isEditing
        ? await updateEvent(event!.id, form)
        : await createEvent(form);

      if (result?.error) {
        setError(result.error);
        return;
      }
      onSaved();
    });
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between px-6 py-4 border-b border-[hsl(var(--border))]">
          <h2 className="font-semibold text-lg">{isEditing ? 'Edit Event' : 'Add Event'}</h2>
          <button onClick={onClose} aria-label="Close" className="text-[hsl(var(--muted-foreground))] hover:text-foreground">
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1.5">Title</label>
            <input
              required
              value={form.title}
              onChange={(e) => update('title', e.target.value)}
              className="w-full px-3 py-2 border-2 border-[hsl(var(--border))] rounded-lg focus:border-[hsl(var(--primary))] focus:outline-none"
              placeholder="Annual Tech Summit 2026"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1.5">Date</label>
              <input
                required
                type="date"
                value={form.event_date}
                onChange={(e) => update('event_date', e.target.value)}
                className="w-full px-3 py-2 border-2 border-[hsl(var(--border))] rounded-lg focus:border-[hsl(var(--primary))] focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1.5">Category</label>
              <select
                value={form.category}
                onChange={(e) => update('category', e.target.value as EventCategory)}
                className="w-full px-3 py-2 border-2 border-[hsl(var(--border))] rounded-lg focus:border-[hsl(var(--primary))] focus:outline-none bg-white"
              >
                <option value="upcoming">Upcoming</option>
                <option value="latest">Latest</option>
                <option value="previous">Previous</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1.5">Location</label>
            <input
              value={form.location}
              onChange={(e) => update('location', e.target.value)}
              className="w-full px-3 py-2 border-2 border-[hsl(var(--border))] rounded-lg focus:border-[hsl(var(--primary))] focus:outline-none"
              placeholder="Lagos, Nigeria"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1.5">Description</label>
            <textarea
              value={form.description}
              onChange={(e) => update('description', e.target.value)}
              rows={4}
              className="w-full px-3 py-2 border-2 border-[hsl(var(--border))] rounded-lg focus:border-[hsl(var(--primary))] focus:outline-none resize-none"
              placeholder="What is this event about?"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1.5">Event Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) handleImageUpload(file);
              }}
              className="w-full text-sm"
            />
            {uploading && (
              <p className="text-xs text-[hsl(var(--muted-foreground))] mt-1 flex items-center gap-1.5">
                <Loader2 size={12} className="animate-spin" /> Uploading...
              </p>
            )}
            {form.image_url && !uploading && (
              <img
                src={form.image_url}
                alt="Preview"
                className="mt-2 h-24 w-full object-cover rounded-lg border border-[hsl(var(--border))]"
              />
            )}
          </div>

          {error && (
            <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-2">
              {error}
            </p>
          )}

          <div className="flex gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-2.5 rounded-lg border border-[hsl(var(--border))] font-medium hover:bg-[hsl(var(--muted))] transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isPending || uploading}
              className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg bg-[hsl(var(--primary))] text-white font-semibold hover:bg-[hsl(var(--primary))]/90 transition-colors disabled:opacity-60"
            >
              {isPending && <Loader2 size={16} className="animate-spin" />}
              {isEditing ? 'Save Changes' : 'Add Event'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

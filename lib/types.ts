export type EventCategory = 'upcoming' | 'latest' | 'previous';

export interface EventRecord {
  id: string;
  title: string;
  description: string;
  event_date: string; // ISO date, e.g. 2026-08-20
  location: string;
  image_url: string | null;
  category: EventCategory;
  created_at: string;
  updated_at: string;
}

export interface EventInput {
  title: string;
  description: string;
  event_date: string;
  location: string;
  image_url?: string | null;
  category: EventCategory;
}

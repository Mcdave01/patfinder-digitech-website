'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';
import type { EventInput } from '@/lib/types';

async function requireUser() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return { supabase, user };
}

export async function createEvent(input: EventInput) {
  const { supabase, user } = await requireUser();
  if (!user) return { error: 'Not authenticated' };

  if (!input.title?.trim() || !input.event_date) {
    return { error: 'Title and date are required' };
  }

  const { error } = await supabase.from('events').insert({
    title: input.title.trim(),
    description: input.description?.trim() ?? '',
    event_date: input.event_date,
    location: input.location?.trim() ?? '',
    image_url: input.image_url || null,
    category: input.category,
  });

  if (error) return { error: error.message };

  revalidatePath('/admin/dashboard');
  revalidatePath('/events');
  revalidatePath('/');
  return { success: true };
}

export async function updateEvent(id: string, input: EventInput) {
  const { supabase, user } = await requireUser();
  if (!user) return { error: 'Not authenticated' };

  if (!input.title?.trim() || !input.event_date) {
    return { error: 'Title and date are required' };
  }

  const { error } = await supabase
    .from('events')
    .update({
      title: input.title.trim(),
      description: input.description?.trim() ?? '',
      event_date: input.event_date,
      location: input.location?.trim() ?? '',
      image_url: input.image_url || null,
      category: input.category,
    })
    .eq('id', id);

  if (error) return { error: error.message };

  revalidatePath('/admin/dashboard');
  revalidatePath('/events');
  revalidatePath('/');
  return { success: true };
}

export async function deleteEvent(id: string) {
  const { supabase, user } = await requireUser();
  if (!user) return { error: 'Not authenticated' };

  const { error } = await supabase.from('events').delete().eq('id', id);
  if (error) return { error: error.message };

  revalidatePath('/admin/dashboard');
  revalidatePath('/events');
  revalidatePath('/');
  return { success: true };
}

export async function signOutAction() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  redirect('/admin/login');
}

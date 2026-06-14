import { NextResponse } from 'next/server';
import { getSupabaseAdminClient } from '@/lib/supabase';

export async function POST(request: Request) {
  const body = await request.json();
  const supabase = getSupabaseAdminClient();

  if (!supabase) {
    return NextResponse.json({ ok: true, mode: 'mock', data: body });
  }

  const { error } = await supabase.from('demand_signals').insert({
    name: body.name,
    email: body.email,
    country: body.country,
    city: body.city,
    artist_preference: body.artistPreference,
    ticket_range: body.ticketRange,
    vip_interest: body.vipInterest,
    consent: body.consent
  });

  if (error) return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
  return NextResponse.json({ ok: true });
}

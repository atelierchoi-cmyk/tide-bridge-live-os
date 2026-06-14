import { NextResponse } from 'next/server';
import { validateFanDemand } from '@/lib/leadForms';
import { getSupabaseAdminClient } from '@/lib/supabase';

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const validation = validateFanDemand(body);

  if (!validation.ok) {
    return NextResponse.json({ ok: false, error: validation.error }, { status: 400 });
  }

  const data = validation.data;
  const supabase = getSupabaseAdminClient();

  if (!supabase) {
    return NextResponse.json({ ok: true, mode: 'mock', data });
  }

  const { error } = await supabase.from('demand_signals').insert({
    name: data.name,
    email: data.email,
    country: data.country,
    city: data.city,
    artist_preference: data.artistPreference,
    ticket_range: data.ticketRange,
    vip_interest: data.vipInterest,
    consent: data.consent
  });

  if (error) return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
  return NextResponse.json({ ok: true });
}

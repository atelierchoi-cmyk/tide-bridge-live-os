import { NextResponse } from 'next/server';
import { validateOffer } from '@/lib/leadForms';
import { getSupabaseAdminClient } from '@/lib/supabase';

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const validation = validateOffer(body);

  if (!validation.ok) {
    return NextResponse.json({ ok: false, error: validation.error }, { status: 400 });
  }

  const data = validation.data;
  const supabase = getSupabaseAdminClient();

  if (!supabase) {
    return NextResponse.json({ ok: true, mode: 'mock', data });
  }

  const { error } = await supabase.from('offers').insert({
    ip_package_id: data.ipPackageId,
    company: data.company,
    contact_email: data.contactEmail,
    city: data.city,
    venue: data.venue,
    capacity: data.capacity,
    date_window: data.dateWindow,
    guarantee_amount: data.guaranteeAmount,
    currency: data.currency,
    deal_mode: data.dealMode,
    notes: data.notes,
    status: 'submitted'
  });

  if (error) return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
  return NextResponse.json({ ok: true });
}

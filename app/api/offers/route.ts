import { NextResponse } from 'next/server';
import { getSupabaseAdminClient } from '@/lib/supabase';

export async function POST(request: Request) {
  const body = await request.json();
  const supabase = getSupabaseAdminClient();

  if (!supabase) {
    return NextResponse.json({ ok: true, mode: 'mock', data: body });
  }

  const { error } = await supabase.from('offers').insert({
    ip_package_id: body.ipPackageId,
    company: body.company,
    contact_email: body.contactEmail,
    city: body.city,
    venue: body.venue,
    capacity: body.capacity,
    date_window: body.dateWindow,
    guarantee_amount: body.guaranteeAmount,
    currency: body.currency,
    deal_mode: body.dealMode,
    notes: body.notes,
    status: 'submitted'
  });

  if (error) return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
  return NextResponse.json({ ok: true });
}

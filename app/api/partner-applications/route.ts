import { NextResponse } from 'next/server';
import { validatePartnerApplication } from '@/lib/leadForms';
import { getSupabaseAdminClient } from '@/lib/supabase';

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const validation = validatePartnerApplication(body);

  if (!validation.ok) {
    return NextResponse.json({ ok: false, error: validation.error }, { status: 400 });
  }

  const data = validation.data;
  const supabase = getSupabaseAdminClient();

  if (!supabase) {
    return NextResponse.json({ ok: true, mode: 'mock', data });
  }

  const { error } = await supabase.from('partner_applications').insert({
    company: data.company,
    contact_name: data.contactName,
    email: data.email,
    country: data.country,
    city: data.city,
    partner_type: data.partnerType,
    website: data.website,
    past_projects: data.pastProjects,
    status: 'pending'
  });

  if (error) return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
  return NextResponse.json({ ok: true });
}

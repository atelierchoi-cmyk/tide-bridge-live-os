import { NextResponse } from 'next/server';
import { getSupabaseAdminClient } from '@/lib/supabase';

export async function POST(request: Request) {
  const body = await request.json();
  const supabase = getSupabaseAdminClient();

  if (!supabase) {
    return NextResponse.json({ ok: true, mode: 'mock', data: body });
  }

  const { error } = await supabase.from('partner_applications').insert({
    company: body.company,
    contact_name: body.contactName,
    email: body.email,
    country: body.country,
    city: body.city,
    partner_type: body.partnerType,
    website: body.website,
    past_projects: body.pastProjects,
    status: 'pending'
  });

  if (error) return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
  return NextResponse.json({ ok: true });
}

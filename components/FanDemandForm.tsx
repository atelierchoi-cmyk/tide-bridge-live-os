'use client';

import { useState } from 'react';

const initial = {
  name: '',
  email: '',
  country: '',
  city: '',
  artistPreference: '',
  ticketRange: 'USD 80-120',
  vipInterest: false,
  consent: true
};

export function FanDemandForm() {
  const [form, setForm] = useState(initial);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('loading');
    const res = await fetch('/api/fan-demand', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    });
    setStatus(res.ok ? 'success' : 'error');
    if (res.ok) setForm(initial);
  }

  return (
    <form onSubmit={submit} className="card grid gap-5 p-6 md:grid-cols-2">
      <div>
        <label className="label">Name</label>
        <input className="input mt-2" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
      </div>
      <div>
        <label className="label">Email</label>
        <input className="input mt-2" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
      </div>
      <div>
        <label className="label">Country</label>
        <input className="input mt-2" value={form.country} onChange={(e) => setForm({ ...form, country: e.target.value })} required />
      </div>
      <div>
        <label className="label">City</label>
        <input className="input mt-2" value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })} required />
      </div>
      <div>
        <label className="label">Artist Preference</label>
        <input className="input mt-2" value={form.artistPreference} onChange={(e) => setForm({ ...form, artistPreference: e.target.value })} required />
      </div>
      <div>
        <label className="label">Ticket Range</label>
        <select className="input mt-2" value={form.ticketRange} onChange={(e) => setForm({ ...form, ticketRange: e.target.value })}>
          <option>USD 50-80</option>
          <option>USD 80-120</option>
          <option>USD 120-180</option>
          <option>USD 180+</option>
        </select>
      </div>
      <label className="md:col-span-2 flex items-center gap-3 text-sm text-ivory/65">
        <input type="checkbox" checked={form.vipInterest} onChange={(e) => setForm({ ...form, vipInterest: e.target.checked })} />
        Interested in VIP / soundcheck / premium fan package.
      </label>
      <div className="md:col-span-2 flex items-center gap-4">
        <button className="btn-primary" type="submit" disabled={status === 'loading'}>{status === 'loading' ? 'Saving...' : 'Register Demand'}</button>
        {status === 'success' ? <p className="text-sm text-champagne">Demand signal saved.</p> : null}
        {status === 'error' ? <p className="text-sm text-clay">Submission failed. Check API/Supabase settings.</p> : null}
      </div>
    </form>
  );
}

'use client';

import { useState } from 'react';
import { validateFanDemand } from '@/lib/leadForms';

const initial = {
  name: '',
  email: '',
  country: '',
  city: '',
  artistPreference: '',
  ticketRange: 'USD 80-120',
  vipInterest: false,
  consent: false
};

export function FanDemandForm() {
  const [form, setForm] = useState(initial);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const validation = validateFanDemand(form);

    if (!validation.ok) {
      setStatus('error');
      setMessage(validation.error);
      return;
    }

    setStatus('loading');
    setMessage('');

    try {
      const res = await fetch('/api/fan-demand', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(validation.data)
      });
      const result = await res.json().catch(() => ({}));

      if (!res.ok) throw new Error(result.error || 'Demand signal could not be saved.');

      setStatus('success');
      setMessage(result.mode === 'mock' ? 'Mock demand signal captured for preview review.' : 'Demand signal saved.');
      setForm(initial);
    } catch (error) {
      setStatus('error');
      setMessage(error instanceof Error ? error.message : 'Demand signal could not be saved.');
    }
  }

  return (
    <form onSubmit={submit} noValidate className="card grid gap-5 p-6 md:grid-cols-2">
      <div>
        <label className="label">Name</label>
        <input className="input mt-2" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" />
      </div>
      <div>
        <label className="label">Email</label>
        <input className="input mt-2" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@example.com" />
      </div>
      <div>
        <label className="label">Country</label>
        <input className="input mt-2" value={form.country} onChange={(e) => setForm({ ...form, country: e.target.value })} placeholder="Where you would attend" />
      </div>
      <div>
        <label className="label">City / Market</label>
        <input className="input mt-2" value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })} placeholder="City for potential routing" />
      </div>
      <div>
        <label className="label">Artist / IP Preference</label>
        <input className="input mt-2" value={form.artistPreference} onChange={(e) => setForm({ ...form, artistPreference: e.target.value })} placeholder="Artist, actor, group, or format" />
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
      <label className="md:col-span-2 flex items-start gap-3 text-sm leading-6 text-ivory/65">
        <input className="mt-1" type="checkbox" checked={form.consent} onChange={(e) => setForm({ ...form, consent: e.target.checked })} />
        I agree that Tide Bridge can use this demand signal to evaluate market interest for live IP routing.
      </label>
      <div className="md:col-span-2 flex flex-wrap items-center gap-4">
        <button className="btn-primary" type="submit" disabled={status === 'loading'}>{status === 'loading' ? 'Saving...' : 'Register Demand'}</button>
        {message ? <p className={`text-sm ${status === 'error' ? 'text-clay' : 'text-champagne'}`} aria-live="polite">{message}</p> : null}
      </div>
    </form>
  );
}

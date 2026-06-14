'use client';

import { useState } from 'react';

type FanDemandFormCopy = {
  labels: Record<'name' | 'email' | 'country' | 'city' | 'artistPreference' | 'ticketRange', string>;
  placeholders: Record<'name' | 'email' | 'country' | 'city' | 'artistPreference', string>;
  vip: string;
  consent: string;
  submit: string;
  loading: string;
  success: string;
  mockSuccess: string;
  error: string;
  validation: Record<'name' | 'email' | 'country' | 'city' | 'artistPreference' | 'consent', string>;
  ticketRanges: string[];
};

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

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function FanDemandForm({ copy }: { copy: FanDemandFormCopy }) {
  const [form, setForm] = useState(initial);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  function validate() {
    if (!form.name.trim()) return copy.validation.name;
    if (!isEmail(form.email.trim())) return copy.validation.email;
    if (!form.country.trim()) return copy.validation.country;
    if (!form.city.trim()) return copy.validation.city;
    if (!form.artistPreference.trim()) return copy.validation.artistPreference;
    if (!form.consent) return copy.validation.consent;
    return '';
  }

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const validationError = validate();

    if (validationError) {
      setStatus('error');
      setMessage(validationError);
      return;
    }

    setStatus('loading');
    setMessage('');

    try {
      const res = await fetch('/api/fan-demand', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      const result = await res.json().catch(() => ({}));

      if (!res.ok) throw new Error(result.error || copy.error);

      setStatus('success');
      setMessage(result.mode === 'mock' ? copy.mockSuccess : copy.success);
      setForm(initial);
    } catch (error) {
      setStatus('error');
      setMessage(error instanceof Error ? error.message : copy.error);
    }
  }

  return (
    <form onSubmit={submit} noValidate className="card grid gap-5 p-6 md:grid-cols-2">
      <div>
        <label className="label">{copy.labels.name}</label>
        <input className="input mt-2" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder={copy.placeholders.name} />
      </div>
      <div>
        <label className="label">{copy.labels.email}</label>
        <input className="input mt-2" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder={copy.placeholders.email} />
      </div>
      <div>
        <label className="label">{copy.labels.country}</label>
        <input className="input mt-2" value={form.country} onChange={(e) => setForm({ ...form, country: e.target.value })} placeholder={copy.placeholders.country} />
      </div>
      <div>
        <label className="label">{copy.labels.city}</label>
        <input className="input mt-2" value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })} placeholder={copy.placeholders.city} />
      </div>
      <div>
        <label className="label">{copy.labels.artistPreference}</label>
        <input className="input mt-2" value={form.artistPreference} onChange={(e) => setForm({ ...form, artistPreference: e.target.value })} placeholder={copy.placeholders.artistPreference} />
      </div>
      <div>
        <label className="label">{copy.labels.ticketRange}</label>
        <select className="input mt-2" value={form.ticketRange} onChange={(e) => setForm({ ...form, ticketRange: e.target.value })}>
          {copy.ticketRanges.map((ticketRange) => <option key={ticketRange}>{ticketRange}</option>)}
        </select>
      </div>
      <label className="md:col-span-2 flex items-center gap-3 text-sm text-ivory/65">
        <input type="checkbox" checked={form.vipInterest} onChange={(e) => setForm({ ...form, vipInterest: e.target.checked })} />
        {copy.vip}
      </label>
      <label className="md:col-span-2 flex items-start gap-3 text-sm leading-6 text-ivory/65">
        <input className="mt-1" type="checkbox" checked={form.consent} onChange={(e) => setForm({ ...form, consent: e.target.checked })} />
        {copy.consent}
      </label>
      <div className="md:col-span-2 flex flex-wrap items-center gap-4">
        <button className="btn-primary" type="submit" disabled={status === 'loading'}>{status === 'loading' ? copy.loading : copy.submit}</button>
        {message ? <p className={`text-sm ${status === 'error' ? 'text-clay' : 'text-champagne'}`} aria-live="polite">{message}</p> : null}
      </div>
    </form>
  );
}

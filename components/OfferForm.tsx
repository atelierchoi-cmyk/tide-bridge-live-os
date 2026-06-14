'use client';

import { useState } from 'react';
import { ipPackages } from '@/lib/data';
import { validateOffer } from '@/lib/leadForms';

const initial = {
  ipPackageId: ipPackages[0]?.id ?? '',
  company: '',
  contactEmail: '',
  city: '',
  venue: '',
  capacity: 3000,
  dateWindow: '',
  guaranteeAmount: 60000,
  currency: 'USD',
  dealMode: 'guarantee',
  notes: ''
};

export function OfferForm() {
  const [form, setForm] = useState(initial);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const validation = validateOffer(form);

    if (!validation.ok) {
      setStatus('error');
      setMessage(validation.error);
      return;
    }

    setStatus('loading');
    setMessage('');

    try {
      const res = await fetch('/api/offers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(validation.data)
      });
      const result = await res.json().catch(() => ({}));

      if (!res.ok) throw new Error(result.error || 'Offer could not be submitted.');

      setStatus('success');
      setMessage(result.mode === 'mock' ? 'Mock offer captured for preview review.' : 'Offer submitted. Status: submitted.');
      setForm(initial);
    } catch (error) {
      setStatus('error');
      setMessage(error instanceof Error ? error.message : 'Offer could not be submitted.');
    }
  }

  return (
    <form onSubmit={submit} noValidate className="card grid gap-5 p-6 md:grid-cols-2">
      <div className="md:col-span-2">
        <label className="label">IP Package</label>
        <select className="input mt-2" value={form.ipPackageId} onChange={(e) => setForm({ ...form, ipPackageId: e.target.value })}>
          {ipPackages.map((item) => <option key={item.id} value={item.id}>{item.title}</option>)}
        </select>
      </div>
      <div>
        <label className="label">Promoter Company</label>
        <input className="input mt-2" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} placeholder="Company making the offer" />
      </div>
      <div>
        <label className="label">Contact Email</label>
        <input className="input mt-2" type="email" value={form.contactEmail} onChange={(e) => setForm({ ...form, contactEmail: e.target.value })} placeholder="deal lead email" />
      </div>
      <div>
        <label className="label">City / Market</label>
        <input className="input mt-2" value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })} placeholder="Target city for the event" />
      </div>
      <div>
        <label className="label">Venue</label>
        <input className="input mt-2" value={form.venue} onChange={(e) => setForm({ ...form, venue: e.target.value })} placeholder="Venue name or preferred venue type" />
      </div>
      <div>
        <label className="label">Capacity</label>
        <input className="input mt-2" type="number" min={100} value={form.capacity} onChange={(e) => setForm({ ...form, capacity: Number(e.target.value) })} />
        <p className="mt-2 text-xs leading-5 text-ivory/45">Use realistic sellable capacity, not only maximum venue capacity.</p>
      </div>
      <div>
        <label className="label">Date Window</label>
        <input className="input mt-2" value={form.dateWindow} onChange={(e) => setForm({ ...form, dateWindow: e.target.value })} placeholder="e.g. May-June 2027" />
      </div>
      <div>
        <label className="label">Guarantee Amount</label>
        <input className="input mt-2" type="number" min={1} value={form.guaranteeAmount} onChange={(e) => setForm({ ...form, guaranteeAmount: Number(e.target.value) })} />
      </div>
      <div>
        <label className="label">Currency</label>
        <select className="input mt-2" value={form.currency} onChange={(e) => setForm({ ...form, currency: e.target.value })}>
          <option value="USD">USD</option>
          <option value="KRW">KRW</option>
          <option value="JPY">JPY</option>
          <option value="TWD">TWD</option>
          <option value="THB">THB</option>
          <option value="EUR">EUR</option>
        </select>
      </div>
      <div>
        <label className="label">Deal Mode</label>
        <select className="input mt-2" value={form.dealMode} onChange={(e) => setForm({ ...form, dealMode: e.target.value })}>
          <option value="guarantee">Guarantee</option>
          <option value="resale">Resale</option>
          <option value="co_promotion">Co-Promotion</option>
          <option value="sponsorship">Sponsorship</option>
        </select>
      </div>
      <div className="md:col-span-2">
        <label className="label">Market Rationale / Notes</label>
        <textarea className="input mt-2 min-h-32" value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} placeholder="Summarize ticketing assumptions, local sponsor interest, audience fit, and promotion plan." />
      </div>
      <div className="md:col-span-2 flex flex-wrap items-center gap-4">
        <button className="btn-primary" type="submit" disabled={status === 'loading'}>{status === 'loading' ? 'Submitting...' : 'Submit Offer'}</button>
        {message ? <p className={`text-sm ${status === 'error' ? 'text-clay' : 'text-champagne'}`} aria-live="polite">{message}</p> : null}
      </div>
    </form>
  );
}

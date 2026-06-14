'use client';

import { useState } from 'react';
import { ipPackages } from '@/lib/data';

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

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('loading');
    const res = await fetch('/api/offers', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    });
    setStatus(res.ok ? 'success' : 'error');
  }

  return (
    <form onSubmit={submit} className="card grid gap-5 p-6 md:grid-cols-2">
      <div className="md:col-span-2">
        <label className="label">IP Package</label>
        <select className="input mt-2" value={form.ipPackageId} onChange={(e) => setForm({ ...form, ipPackageId: e.target.value })}>
          {ipPackages.map((item) => <option key={item.id} value={item.id}>{item.title}</option>)}
        </select>
      </div>
      <div>
        <label className="label">Company</label>
        <input className="input mt-2" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} required />
      </div>
      <div>
        <label className="label">Contact Email</label>
        <input className="input mt-2" type="email" value={form.contactEmail} onChange={(e) => setForm({ ...form, contactEmail: e.target.value })} required />
      </div>
      <div>
        <label className="label">City</label>
        <input className="input mt-2" value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })} required />
      </div>
      <div>
        <label className="label">Venue</label>
        <input className="input mt-2" value={form.venue} onChange={(e) => setForm({ ...form, venue: e.target.value })} required />
      </div>
      <div>
        <label className="label">Capacity</label>
        <input className="input mt-2" type="number" value={form.capacity} onChange={(e) => setForm({ ...form, capacity: Number(e.target.value) })} />
      </div>
      <div>
        <label className="label">Date Window</label>
        <input className="input mt-2" value={form.dateWindow} onChange={(e) => setForm({ ...form, dateWindow: e.target.value })} placeholder="e.g. May-June 2027" />
      </div>
      <div>
        <label className="label">Guarantee Amount</label>
        <input className="input mt-2" type="number" value={form.guaranteeAmount} onChange={(e) => setForm({ ...form, guaranteeAmount: Number(e.target.value) })} />
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
        <label className="label">Notes</label>
        <textarea className="input mt-2 min-h-32" value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} />
      </div>
      <div className="md:col-span-2 flex items-center gap-4">
        <button className="btn-primary" type="submit" disabled={status === 'loading'}>{status === 'loading' ? 'Submitting...' : 'Submit Offer'}</button>
        {status === 'success' ? <p className="text-sm text-champagne">Offer submitted. Status: submitted.</p> : null}
        {status === 'error' ? <p className="text-sm text-clay">Submission failed. Check API/Supabase settings.</p> : null}
      </div>
    </form>
  );
}

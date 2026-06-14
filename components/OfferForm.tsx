'use client';

import { useState } from 'react';
import { ipPackages } from '@/lib/data';

type OfferFormCopy = {
  labels: Record<'ipPackage' | 'company' | 'contactEmail' | 'city' | 'venue' | 'capacity' | 'dateWindow' | 'guaranteeAmount' | 'currency' | 'dealMode' | 'notes', string>;
  placeholders: Record<'company' | 'contactEmail' | 'city' | 'venue' | 'dateWindow' | 'notes', string>;
  capacityHelper: string;
  submit: string;
  loading: string;
  success: string;
  mockSuccess: string;
  error: string;
  validation: Record<'ipPackage' | 'company' | 'contactEmail' | 'city' | 'venue' | 'capacity' | 'dateWindow' | 'guaranteeAmount', string>;
  dealModes: Record<string, string>;
};

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

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function OfferForm({ copy }: { copy: OfferFormCopy }) {
  const [form, setForm] = useState(initial);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  function validate() {
    if (!form.ipPackageId) return copy.validation.ipPackage;
    if (!form.company.trim()) return copy.validation.company;
    if (!isEmail(form.contactEmail.trim())) return copy.validation.contactEmail;
    if (!form.city.trim()) return copy.validation.city;
    if (!form.venue.trim()) return copy.validation.venue;
    if (!Number.isFinite(form.capacity) || form.capacity < 100) return copy.validation.capacity;
    if (!form.dateWindow.trim()) return copy.validation.dateWindow;
    if (!Number.isFinite(form.guaranteeAmount) || form.guaranteeAmount <= 0) return copy.validation.guaranteeAmount;
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
      const res = await fetch('/api/offers', {
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
      <div className="md:col-span-2">
        <label className="label">{copy.labels.ipPackage}</label>
        <select className="input mt-2" value={form.ipPackageId} onChange={(e) => setForm({ ...form, ipPackageId: e.target.value })}>
          {ipPackages.map((item) => <option key={item.id} value={item.id}>{item.title}</option>)}
        </select>
      </div>
      <div>
        <label className="label">{copy.labels.company}</label>
        <input className="input mt-2" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} placeholder={copy.placeholders.company} />
      </div>
      <div>
        <label className="label">{copy.labels.contactEmail}</label>
        <input className="input mt-2" type="email" value={form.contactEmail} onChange={(e) => setForm({ ...form, contactEmail: e.target.value })} placeholder={copy.placeholders.contactEmail} />
      </div>
      <div>
        <label className="label">{copy.labels.city}</label>
        <input className="input mt-2" value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })} placeholder={copy.placeholders.city} />
      </div>
      <div>
        <label className="label">{copy.labels.venue}</label>
        <input className="input mt-2" value={form.venue} onChange={(e) => setForm({ ...form, venue: e.target.value })} placeholder={copy.placeholders.venue} />
      </div>
      <div>
        <label className="label">{copy.labels.capacity}</label>
        <input className="input mt-2" type="number" min={100} value={form.capacity} onChange={(e) => setForm({ ...form, capacity: Number(e.target.value) })} />
        <p className="mt-2 text-xs leading-5 text-ivory/45">{copy.capacityHelper}</p>
      </div>
      <div>
        <label className="label">{copy.labels.dateWindow}</label>
        <input className="input mt-2" value={form.dateWindow} onChange={(e) => setForm({ ...form, dateWindow: e.target.value })} placeholder={copy.placeholders.dateWindow} />
      </div>
      <div>
        <label className="label">{copy.labels.guaranteeAmount}</label>
        <input className="input mt-2" type="number" min={1} value={form.guaranteeAmount} onChange={(e) => setForm({ ...form, guaranteeAmount: Number(e.target.value) })} />
      </div>
      <div>
        <label className="label">{copy.labels.currency}</label>
        <select className="input mt-2" value={form.currency} onChange={(e) => setForm({ ...form, currency: e.target.value })}>
          {['USD', 'KRW', 'JPY', 'TWD', 'THB', 'EUR'].map((currency) => <option key={currency} value={currency}>{currency}</option>)}
        </select>
      </div>
      <div>
        <label className="label">{copy.labels.dealMode}</label>
        <select className="input mt-2" value={form.dealMode} onChange={(e) => setForm({ ...form, dealMode: e.target.value })}>
          {Object.entries(copy.dealModes).map(([value, label]) => <option key={value} value={value}>{label}</option>)}
        </select>
      </div>
      <div className="md:col-span-2">
        <label className="label">{copy.labels.notes}</label>
        <textarea className="input mt-2 min-h-32" value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} placeholder={copy.placeholders.notes} />
      </div>
      <div className="md:col-span-2 flex flex-wrap items-center gap-4">
        <button className="btn-primary" type="submit" disabled={status === 'loading'}>{status === 'loading' ? copy.loading : copy.submit}</button>
        {message ? <p className={`text-sm ${status === 'error' ? 'text-clay' : 'text-champagne'}`} aria-live="polite">{message}</p> : null}
      </div>
    </form>
  );
}

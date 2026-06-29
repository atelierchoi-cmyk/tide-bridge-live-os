'use client';

import { useState } from 'react';

type ApplicationFormCopy = {
  labels: Record<'company' | 'contactName' | 'email' | 'partnerType' | 'country' | 'city' | 'website' | 'pastProjects', string>;
  placeholders: Record<'company' | 'contactName' | 'email' | 'country' | 'city' | 'website' | 'pastProjects', string>;
  helper: string;
  submit: string;
  loading: string;
  success: string;
  mockSuccess: string;
  error: string;
  validation: Record<'company' | 'contactName' | 'email' | 'country' | 'city', string>;
  options: Record<string, string>;
};

const initial = {
  company: '',
  contactName: '',
  email: '',
  country: '',
  city: '',
  partnerType: 'promoter',
  website: '',
  pastProjects: ''
};

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function ApplicationForm({ copy }: { copy: ApplicationFormCopy }) {
  const [form, setForm] = useState(initial);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  function validate() {
    if (!form.company.trim()) return copy.validation.company;
    if (!form.contactName.trim()) return copy.validation.contactName;
    if (!isEmail(form.email.trim())) return copy.validation.email;
    if (!form.country.trim()) return copy.validation.country;
    if (!form.city.trim()) return copy.validation.city;
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
      const res = await fetch('/api/partner-applications', {
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
        <label className="label">{copy.labels.company}</label>
        <input className="input mt-2" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} placeholder={copy.placeholders.company} />
        <p className="cjk-copy mt-2 whitespace-pre-line text-xs leading-5 text-ivory/45">{copy.helper}</p>
      </div>
      <div>
        <label className="label">{copy.labels.contactName}</label>
        <input className="input mt-2" value={form.contactName} onChange={(e) => setForm({ ...form, contactName: e.target.value })} placeholder={copy.placeholders.contactName} />
      </div>
      <div>
        <label className="label">{copy.labels.email}</label>
        <input className="input mt-2" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder={copy.placeholders.email} />
      </div>
      <div>
        <label className="label">{copy.labels.partnerType}</label>
        <select className="input mt-2" value={form.partnerType} onChange={(e) => setForm({ ...form, partnerType: e.target.value })}>
          {Object.entries(copy.options).map(([value, label]) => <option key={value} value={value}>{label}</option>)}
        </select>
      </div>
      <div>
        <label className="label">{copy.labels.country}</label>
        <input className="input mt-2" value={form.country} onChange={(e) => setForm({ ...form, country: e.target.value })} placeholder={copy.placeholders.country} />
      </div>
      <div>
        <label className="label">{copy.labels.city}</label>
        <input className="input mt-2" value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })} placeholder={copy.placeholders.city} />
      </div>
      <div className="md:col-span-2">
        <label className="label">{copy.labels.website}</label>
        <input className="input mt-2" type="url" value={form.website} onChange={(e) => setForm({ ...form, website: e.target.value })} placeholder={copy.placeholders.website} />
      </div>
      <div className="md:col-span-2">
        <label className="label">{copy.labels.pastProjects}</label>
        <textarea className="input mt-2 min-h-32" value={form.pastProjects} onChange={(e) => setForm({ ...form, pastProjects: e.target.value })} placeholder={copy.placeholders.pastProjects} />
      </div>
      <div className="md:col-span-2 flex flex-wrap items-center gap-4">
        <button className="btn-primary" type="submit" disabled={status === 'loading'}>{status === 'loading' ? copy.loading : copy.submit}</button>
        {message ? <p className={`cjk-copy whitespace-pre-line text-sm ${status === 'error' ? 'text-clay' : 'text-champagne'}`} aria-live="polite">{message}</p> : null}
      </div>
    </form>
  );
}

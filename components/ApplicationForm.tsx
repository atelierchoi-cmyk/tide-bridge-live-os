'use client';

import { useState } from 'react';
import { validatePartnerApplication } from '@/lib/leadForms';

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

export function ApplicationForm() {
  const [form, setForm] = useState(initial);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const validation = validatePartnerApplication(form);

    if (!validation.ok) {
      setStatus('error');
      setMessage(validation.error);
      return;
    }

    setStatus('loading');
    setMessage('');

    try {
      const res = await fetch('/api/partner-applications', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(validation.data)
      });
      const result = await res.json().catch(() => ({}));

      if (!res.ok) throw new Error(result.error || 'Submission failed. Please review the form and try again.');

      setStatus('success');
      setMessage(result.mode === 'mock' ? 'Mock application captured for preview review.' : 'Application saved. Status: pending review.');
      setForm(initial);
    } catch (error) {
      setStatus('error');
      setMessage(error instanceof Error ? error.message : 'Submission failed. Please try again.');
    }
  }

  return (
    <form onSubmit={submit} noValidate className="card grid gap-5 p-6 md:grid-cols-2">
      <div>
        <label className="label">Company / Organization</label>
        <input className="input mt-2" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} placeholder="Legal or trade name" />
        <p className="mt-2 text-xs leading-5 text-ivory/45">Use the entity that would contract or operate locally.</p>
      </div>
      <div>
        <label className="label">Contact Name</label>
        <input className="input mt-2" value={form.contactName} onChange={(e) => setForm({ ...form, contactName: e.target.value })} placeholder="Primary deal contact" />
      </div>
      <div>
        <label className="label">Work Email</label>
        <input className="input mt-2" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="name@company.com" />
      </div>
      <div>
        <label className="label">Partner Type</label>
        <select className="input mt-2" value={form.partnerType} onChange={(e) => setForm({ ...form, partnerType: e.target.value })}>
          <option value="promoter">Local Promoter</option>
          <option value="agency">Agency / IP Holder</option>
          <option value="venue">Venue Partner</option>
          <option value="brand">Brand Sponsor</option>
          <option value="investor">Investor / Co-Promoter</option>
        </select>
      </div>
      <div>
        <label className="label">Country</label>
        <input className="input mt-2" value={form.country} onChange={(e) => setForm({ ...form, country: e.target.value })} placeholder="Primary operating country" />
      </div>
      <div>
        <label className="label">Primary City</label>
        <input className="input mt-2" value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })} placeholder="Market you can activate" />
      </div>
      <div className="md:col-span-2">
        <label className="label">Website / Profile</label>
        <input className="input mt-2" type="url" value={form.website} onChange={(e) => setForm({ ...form, website: e.target.value })} placeholder="https://..." />
      </div>
      <div className="md:col-span-2">
        <label className="label">Relevant Live Projects</label>
        <textarea className="input mt-2 min-h-32" value={form.pastProjects} onChange={(e) => setForm({ ...form, pastProjects: e.target.value })} placeholder="List K-POP, concert, fan meeting, venue, sponsorship, or festival projects with market/capacity context." />
      </div>
      <div className="md:col-span-2 flex flex-wrap items-center gap-4">
        <button className="btn-primary" type="submit" disabled={status === 'loading'}>{status === 'loading' ? 'Submitting...' : 'Submit Application'}</button>
        {message ? <p className={`text-sm ${status === 'error' ? 'text-clay' : 'text-champagne'}`} aria-live="polite">{message}</p> : null}
      </div>
    </form>
  );
}

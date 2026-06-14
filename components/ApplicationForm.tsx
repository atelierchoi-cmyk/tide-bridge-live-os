'use client';

import { useState } from 'react';

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

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('loading');
    const res = await fetch('/api/partner-applications', {
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
        <label className="label">Company</label>
        <input className="input mt-2" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} required />
      </div>
      <div>
        <label className="label">Contact Name</label>
        <input className="input mt-2" value={form.contactName} onChange={(e) => setForm({ ...form, contactName: e.target.value })} required />
      </div>
      <div>
        <label className="label">Email</label>
        <input className="input mt-2" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
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
        <input className="input mt-2" value={form.country} onChange={(e) => setForm({ ...form, country: e.target.value })} required />
      </div>
      <div>
        <label className="label">City</label>
        <input className="input mt-2" value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })} required />
      </div>
      <div className="md:col-span-2">
        <label className="label">Website</label>
        <input className="input mt-2" value={form.website} onChange={(e) => setForm({ ...form, website: e.target.value })} />
      </div>
      <div className="md:col-span-2">
        <label className="label">Past Projects</label>
        <textarea className="input mt-2 min-h-32" value={form.pastProjects} onChange={(e) => setForm({ ...form, pastProjects: e.target.value })} placeholder="List relevant K-POP, fan meeting, concert, or venue projects." />
      </div>
      <div className="md:col-span-2 flex items-center gap-4">
        <button className="btn-primary" type="submit" disabled={status === 'loading'}>{status === 'loading' ? 'Submitting...' : 'Submit Application'}</button>
        {status === 'success' ? <p className="text-sm text-champagne">Application saved. Status: pending review.</p> : null}
        {status === 'error' ? <p className="text-sm text-clay">Submission failed. Check API/Supabase settings.</p> : null}
      </div>
    </form>
  );
}

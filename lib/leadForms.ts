import type { DealMode, FanDemandSignal, OfferInput, PartnerApplication } from '@/types';

const partnerTypes = ['promoter', 'agency', 'venue', 'brand', 'investor'] as const;
const dealModes: DealMode[] = ['guarantee', 'resale', 'co_promotion', 'sponsorship'];

type ValidationResult<T> =
  | { ok: true; data: T }
  | { ok: false; error: string };

function valueFrom(body: unknown, key: string) {
  if (!body || typeof body !== 'object') return undefined;
  return (body as Record<string, unknown>)[key];
}

function text(body: unknown, key: string) {
  const value = valueFrom(body, key);
  return typeof value === 'string' ? value.trim() : '';
}

function optionalText(body: unknown, key: string) {
  const value = text(body, key);
  return value || undefined;
}

function numberValue(body: unknown, key: string) {
  const value = valueFrom(body, key);
  const number = typeof value === 'number' ? value : Number(value);
  return Number.isFinite(number) ? number : 0;
}

function booleanValue(body: unknown, key: string) {
  return valueFrom(body, key) === true;
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function missing(label: string) {
  return `${label} is required.`;
}

export function validatePartnerApplication(body: unknown): ValidationResult<PartnerApplication> {
  const data: PartnerApplication = {
    company: text(body, 'company'),
    contactName: text(body, 'contactName'),
    email: text(body, 'email').toLowerCase(),
    country: text(body, 'country'),
    city: text(body, 'city'),
    partnerType: text(body, 'partnerType'),
    website: optionalText(body, 'website'),
    pastProjects: optionalText(body, 'pastProjects')
  };

  if (!data.company) return { ok: false, error: missing('Company') };
  if (!data.contactName) return { ok: false, error: missing('Contact name') };
  if (!isEmail(data.email)) return { ok: false, error: 'A valid work email is required.' };
  if (!data.country) return { ok: false, error: missing('Country') };
  if (!data.city) return { ok: false, error: missing('City') };
  if (!partnerTypes.includes(data.partnerType as (typeof partnerTypes)[number])) {
    return { ok: false, error: 'Select a valid partner type.' };
  }
  if (!data.pastProjects) return { ok: false, error: 'Past projects or relevant operating experience is required.' };

  return { ok: true, data };
}

export function validateFanDemand(body: unknown): ValidationResult<FanDemandSignal> {
  const data: FanDemandSignal = {
    name: text(body, 'name'),
    email: text(body, 'email').toLowerCase(),
    country: text(body, 'country'),
    city: text(body, 'city'),
    artistPreference: text(body, 'artistPreference'),
    ticketRange: text(body, 'ticketRange'),
    vipInterest: booleanValue(body, 'vipInterest'),
    consent: booleanValue(body, 'consent')
  };

  if (!data.name) return { ok: false, error: missing('Name') };
  if (!isEmail(data.email)) return { ok: false, error: 'A valid email is required.' };
  if (!data.country) return { ok: false, error: missing('Country') };
  if (!data.city) return { ok: false, error: missing('City') };
  if (!data.artistPreference) return { ok: false, error: missing('Artist preference') };
  if (!data.ticketRange) return { ok: false, error: 'Select a ticket range.' };
  if (!data.consent) return { ok: false, error: 'Consent is required to submit demand data.' };

  return { ok: true, data };
}

export function validateOffer(body: unknown): ValidationResult<OfferInput> {
  const data: OfferInput = {
    ipPackageId: text(body, 'ipPackageId'),
    company: text(body, 'company'),
    contactEmail: text(body, 'contactEmail').toLowerCase(),
    city: text(body, 'city'),
    venue: text(body, 'venue'),
    capacity: Math.round(numberValue(body, 'capacity')),
    dateWindow: text(body, 'dateWindow'),
    guaranteeAmount: numberValue(body, 'guaranteeAmount'),
    currency: text(body, 'currency') || 'USD',
    dealMode: text(body, 'dealMode') as DealMode,
    notes: optionalText(body, 'notes')
  };

  if (!data.ipPackageId) return { ok: false, error: 'Select an IP package.' };
  if (!data.company) return { ok: false, error: missing('Company') };
  if (!isEmail(data.contactEmail)) return { ok: false, error: 'A valid contact email is required.' };
  if (!data.city) return { ok: false, error: missing('City') };
  if (!data.venue) return { ok: false, error: missing('Venue') };
  if (!Number.isInteger(data.capacity) || data.capacity < 100) return { ok: false, error: 'Capacity must be at least 100.' };
  if (!data.dateWindow) return { ok: false, error: missing('Date window') };
  if (data.guaranteeAmount <= 0) return { ok: false, error: 'Guarantee amount must be greater than 0.' };
  if (!data.currency) return { ok: false, error: missing('Currency') };
  if (!dealModes.includes(data.dealMode)) return { ok: false, error: 'Select a valid deal mode.' };

  return { ok: true, data };
}

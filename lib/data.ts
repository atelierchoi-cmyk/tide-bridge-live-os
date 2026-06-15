import type { IPPackage } from '@/types';

export const ipPackages: IPPackage[] = [
  {
    id: 'actor-fanmeeting-asia',
    title: 'Private Actor Fan Meeting Review Package',
    artist: 'K-Drama Actor IP',
    category: 'Actor / Fan Meeting',
    format: 'Fan Meeting + Premium Fan Experience + Photo Moment',
    summary: 'A controlled review package for 2,000-5,000 capacity theaters across Asia.',
    markets: ['Japan', 'Taiwan', 'Thailand', 'Singapore', 'Indonesia'],
    capacityRange: '2,000–5,000',
    baseGuarantee: 60000,
    currency: 'USD',
    dealMode: 'guarantee',
    accessLevel: 'partner'
  },
  {
    id: 'kpop-showcase-na',
    title: 'K-POP Showcase North America Review Route',
    artist: 'Emerging K-POP Artist IP',
    category: 'K-POP / Showcase',
    format: 'Showcase + Premium Access Session + Local Media Moment',
    summary: 'A lean 500-1,500 capacity route for North American market readiness review.',
    markets: ['Los Angeles', 'New York', 'Toronto', 'Chicago', 'Dallas'],
    capacityRange: '500–1,500',
    baseGuarantee: 50000,
    currency: 'USD',
    dealMode: 'resale',
    accessLevel: 'partner'
  },
  {
    id: 'vocal-group-eu-us',
    title: 'Vocal Group Concert Tour Package',
    artist: 'Korean Crossover Vocal IP',
    category: 'Concert / Crossover',
    format: 'Concert Tour + Cultural Venue Collaboration',
    summary: 'A concert review package for seated theaters and cultural venues in Europe/North America.',
    markets: ['London', 'Paris', 'Berlin', 'New York', 'Los Angeles'],
    capacityRange: '1,500–3,500',
    baseGuarantee: 45000,
    currency: 'USD',
    dealMode: 'co_promotion',
    accessLevel: 'public'
  },
  {
    id: 'esports-fan-live',
    title: 'K-Esports Live Fan Experience Review',
    artist: 'K-Esports IP',
    category: 'Esports / Fan Experience',
    format: 'Fan Meeting + Show Match + Brand Activation',
    summary: 'A live esports fan experience format for venue, arena, and brand partnership review.',
    markets: ['UAE', 'Singapore', 'Thailand', 'United States'],
    capacityRange: '1,000–7,000',
    baseGuarantee: 80000,
    currency: 'USD',
    dealMode: 'sponsorship',
    accessLevel: 'partner'
  }
];

export const adminMetrics = [
  { label: 'Partner Verification', value: '64', delta: '+18 under review' },
  { label: 'Demand Signals', value: '8,420', delta: 'Top market: Bangkok' },
  { label: 'Offers in Review', value: '23', delta: '5 active reviews' },
  { label: 'Opportunity Value', value: '$1.84M', delta: 'Commercial baseline' }
];

export const pipelineRows = [
  { ip: 'Actor Fan Meeting', market: 'Taipei', promoter: 'Verified local promoter', value: '$60,000', status: 'Under Review' },
  { ip: 'K-POP Showcase', market: 'Los Angeles', promoter: 'Theater route partner', value: '$50,000', status: 'Submitted for Review' },
  { ip: 'Vocal Group Tour', market: 'London', promoter: 'Cultural venue operator', value: '$45,000', status: 'Readiness Review' },
  { ip: 'K-Esports Live', market: 'Dubai', promoter: 'Brand partnership operator', value: '$80,000', status: 'Internal Approval' }
];

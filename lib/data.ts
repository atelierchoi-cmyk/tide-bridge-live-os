import type { IPPackage } from '@/types';

export const ipPackages: IPPackage[] = [
  {
    id: 'actor-fanmeeting-asia',
    title: 'Premium Actor Fan Meeting Package',
    artist: 'K-Drama Actor IP',
    category: 'Actor / Fan Meeting',
    format: 'Fan Meeting + Hi-touch + Photo Moment',
    summary: 'A scalable fan meeting package for 2,000–5,000 capacity theaters across Asia.',
    markets: ['Japan', 'Taiwan', 'Thailand', 'Singapore', 'Indonesia'],
    capacityRange: '2,000–5,000',
    baseGuarantee: 60000,
    currency: 'USD',
    dealMode: 'guarantee',
    accessLevel: 'partner'
  },
  {
    id: 'kpop-showcase-na',
    title: 'K-POP Showcase North America Route',
    artist: 'Emerging K-POP Artist IP',
    category: 'K-POP / Showcase',
    format: 'Showcase + VIP Soundcheck + Merch Bundle',
    summary: 'Lean 500–1,500 capacity showcase route for North American launch markets.',
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
    format: 'Concert Tour + Premium Seating + Local Choir Collaboration',
    summary: 'Concert package for seated theaters and cultural venues in Europe/North America.',
    markets: ['London', 'Paris', 'Berlin', 'New York', 'Los Angeles'],
    capacityRange: '1,500–3,500',
    baseGuarantee: 45000,
    currency: 'USD',
    dealMode: 'co_promotion',
    accessLevel: 'public'
  },
  {
    id: 'esports-fan-live',
    title: 'Esports Fan Live Event',
    artist: 'K-Esports IP',
    category: 'Esports / Fan Experience',
    format: 'Fan Meeting + Show Match + Brand Activation',
    summary: 'Live esports fan experience for malls, arenas, and brand-sponsored venues.',
    markets: ['UAE', 'Singapore', 'Thailand', 'United States'],
    capacityRange: '1,000–7,000',
    baseGuarantee: 80000,
    currency: 'USD',
    dealMode: 'sponsorship',
    accessLevel: 'partner'
  }
];

export const adminMetrics = [
  { label: 'Partner Applications', value: '64', delta: '+18 this month' },
  { label: 'Demand Signals', value: '8,420', delta: 'Top city: Bangkok' },
  { label: 'Submitted Offers', value: '23', delta: '5 under review' },
  { label: 'Pipeline Value', value: '$1.84M', delta: 'Guarantee basis' }
];

export const pipelineRows = [
  { ip: 'Actor Fan Meeting', market: 'Taipei', promoter: 'A-Class local promoter', value: '$60,000', status: 'Under Review' },
  { ip: 'K-POP Showcase', market: 'Los Angeles', promoter: 'Theater route partner', value: '$50,000', status: 'Submitted' },
  { ip: 'Vocal Group Tour', market: 'London', promoter: 'Cultural venue promoter', value: '$45,000', status: 'Counter Offer' },
  { ip: 'Esports Fan Live', market: 'Dubai', promoter: 'Brand event partner', value: '$80,000', status: 'Approved' }
];

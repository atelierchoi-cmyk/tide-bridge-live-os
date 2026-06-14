export type DealMode = 'resale' | 'guarantee' | 'co_promotion' | 'sponsorship';

export type IPPackage = {
  id: string;
  title: string;
  artist: string;
  category: string;
  format: string;
  summary: string;
  markets: string[];
  capacityRange: string;
  baseGuarantee: number;
  currency: 'USD' | 'KRW' | 'JPY' | 'TWD' | 'THB' | 'EUR';
  dealMode: DealMode;
  accessLevel: 'public' | 'partner' | 'restricted';
};

export type PartnerApplication = {
  company: string;
  contactName: string;
  email: string;
  country: string;
  city: string;
  partnerType: string;
  website?: string;
  pastProjects?: string;
};

export type FanDemandSignal = {
  name: string;
  email: string;
  country: string;
  city: string;
  artistPreference: string;
  ticketRange: string;
  vipInterest: boolean;
  consent: boolean;
};

export type OfferInput = {
  ipPackageId: string;
  company: string;
  contactEmail: string;
  city: string;
  venue: string;
  capacity: number;
  dateWindow: string;
  guaranteeAmount: number;
  currency: string;
  dealMode: DealMode;
  notes?: string;
};

export type PnlInput = {
  capacity: number;
  averageTicketPrice: number;
  salesRatio: number;
  artistGuarantee: number;
  localProductionCost: number;
  marketingCost: number;
  travelCost: number;
  platformFeePct: number;
};

export type PnlResult = {
  grossRevenue: number;
  platformFee: number;
  totalCost: number;
  projectedProfit: number;
  bepSalesRatio: number;
};

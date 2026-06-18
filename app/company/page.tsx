import type { Metadata } from 'next';
import { CompanyLandingPage } from '@/components/CompanyLandingPage';

export const metadata: Metadata = {
  title: 'Tide Bridge | Global Live & Cultural IP Infrastructure',
  description: 'A private B2B layer connecting Korean content, global live opportunities, verified partners, and market intelligence.'
};

export default function CompanyPage() {
  return <CompanyLandingPage locale="root" />;
}

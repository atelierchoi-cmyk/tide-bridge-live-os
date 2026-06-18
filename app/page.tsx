import type { Metadata } from 'next';
import { BrandHomePage } from '@/components/BrandHomePage';

export const metadata: Metadata = {
  title: 'Tide Bridge | Global Live & Cultural IP Company',
  description: 'Korean content, global live IP, and one cross-border bridge.'
};

export default function RootPage() {
  return <BrandHomePage locale="root" />;
}

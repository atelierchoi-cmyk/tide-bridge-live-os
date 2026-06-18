import type { Metadata } from 'next';
import { CinematicHomePage } from '@/components/CinematicHomePage';

export const metadata: Metadata = {
  title: 'Tide Bridge | Global Live & Cultural IP Bridge',
  description: 'Korean content, global live IP, and one cross-border bridge.'
};

export default function RootPage() {
  return <CinematicHomePage locale="root" />;
}

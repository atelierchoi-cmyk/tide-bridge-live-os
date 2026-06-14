import { PnlSimulator } from '@/components/PnlSimulator';
import { Section } from '@/components/Section';

export default function PnlPage() {
  return (
    <Section eyebrow="Admin" title="P&L / BEP Simulator" body="Model capacity, ticket price, sales ratio, guarantee, production, marketing, travel, platform fee, profit, and BEP sales ratio.">
      <PnlSimulator />
    </Section>
  );
}

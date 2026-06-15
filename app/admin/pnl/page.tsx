import { PnlSimulator } from '@/components/PnlSimulator';
import { Section } from '@/components/Section';

export default function PnlPage() {
  return (
    <Section eyebrow="Admin" title="Deal Readiness Simulator" body="Model sellable capacity, baseline revenue, sales ratio, guarantee, production, marketing, travel, platform fee, profit, and BEP sales ratio.">
      <PnlSimulator />
    </Section>
  );
}

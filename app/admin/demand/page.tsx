import { Section } from '@/components/Section';
import { StatCard } from '@/components/StatCard';

const demand = [
  { label: 'Bangkok', value: '2,180', delta: 'VIP intent 21%' },
  { label: 'Taipei', value: '1,540', delta: 'VIP intent 18%' },
  { label: 'Los Angeles', value: '1,120', delta: 'VIP intent 24%' },
  { label: 'Dubai', value: '840', delta: 'Brand fit high' }
];

export default function DemandPage() {
  return (
    <Section eyebrow="Admin" title="Fan Demand Dashboard" body="Use demand signal data to support routing, offer negotiation, sponsorship, and ticket price assumptions.">
      <div className="grid gap-4 md:grid-cols-4">
        {demand.map((metric) => <StatCard key={metric.label} {...metric} />)}
      </div>
    </Section>
  );
}

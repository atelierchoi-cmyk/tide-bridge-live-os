import { Hero } from '@/components/Hero';
import { Section } from '@/components/Section';
import { StatCard } from '@/components/StatCard';
import { adminMetrics } from '@/lib/data';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Section
        eyebrow="What We Connect"
        title="From one-off concerts to repeatable global live IP business."
        body="The platform converts IP sourcing, promoter relationships, fan demand, offer negotiation, and P&L judgment into one operating system."
      >
        <div className="grid gap-4 md:grid-cols-3">
          {['K-POP IP', 'Local Promoters', 'Venues', 'Brands', 'Fan Demand', 'Investors'].map((item) => (
            <div key={item} className="card p-6 text-xl font-semibold tracking-[-0.03em] text-ivory">{item}</div>
          ))}
        </div>
      </Section>
      <Section eyebrow="MVP Control Metrics" title="Built for promoter recruitment and deal conversion.">
        <div className="grid gap-4 md:grid-cols-4">
          {adminMetrics.map((metric) => <StatCard key={metric.label} {...metric} />)}
        </div>
      </Section>
    </>
  );
}

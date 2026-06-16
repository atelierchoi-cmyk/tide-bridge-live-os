import Link from 'next/link';
import { Section } from '@/components/Section';
import { StatCard } from '@/components/StatCard';
import { PipelineTable } from '@/components/PipelineTable';
import { adminMetrics } from '@/lib/data';

export default function AdminDashboardPage() {
  return (
    <Section eyebrow="Admin Console" title="Operating controls for global live IP opportunity review.">
      <div className="grid gap-4 md:grid-cols-4">
        {adminMetrics.map((metric) => <StatCard key={metric.label} {...metric} />)}
      </div>
      <div className="mt-8 grid gap-4 md:grid-cols-5">
        {[
          ['/admin/ip', 'IP Management'],
          ['/admin/applications', 'Applications'],
          ['/admin/offers', 'Offers'],
          ['/admin/demand', 'Demand'],
          ['/admin/pnl', 'Deal Readiness']
        ].map(([href, label]) => <Link key={href} className="btn-secondary text-center" href={href}>{label}</Link>)}
      </div>
      <div className="mt-8">
        <PipelineTable />
      </div>
    </Section>
  );
}

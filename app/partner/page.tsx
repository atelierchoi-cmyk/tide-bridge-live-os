import Link from 'next/link';
import { Section } from '@/components/Section';

export default function PartnerDashboardPage() {
  return (
    <Section eyebrow="Partner Portal" title="Review IP, submit offers, and move into deal review.">
      <div className="grid gap-5 md:grid-cols-3">
        {[
          ['/partner/ip-catalog', 'Private IP Catalog', 'View curated packages and recommended market fit.'],
          ['/partner/submit-offer', 'Submit Offer', 'Create a structured offer for Tide Bridge review.'],
          ['/admin/pnl', 'P&L Preview', 'Test capacity, ticket, cost, and profit assumptions.']
        ].map(([href, title, body]) => (
          <Link href={href} key={href} className="card p-6 transition hover:border-champagne/50">
            <p className="text-2xl font-semibold tracking-[-0.03em] text-ivory">{title}</p>
            <p className="mt-4 text-sm leading-7 text-ivory/55">{body}</p>
          </Link>
        ))}
      </div>
    </Section>
  );
}

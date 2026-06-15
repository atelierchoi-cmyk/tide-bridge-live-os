import Link from 'next/link';
import { Section } from '@/components/Section';

export default function PartnerDashboardPage() {
  return (
    <Section eyebrow="Partner Portal" title="Review private IP access, submit structured opportunities, and move into readiness review.">
      <div className="grid gap-5 md:grid-cols-3">
        {[
          ['/partner/ip-catalog', 'Private IP Catalog', 'Review controlled packages and market fit notes.'],
          ['/partner/submit-offer', 'Request Review', 'Submit structured market coverage, capacity, and commercial assumptions.'],
          ['/admin/pnl', 'Deal Readiness', 'Review capacity, baseline revenue, cost, and readiness assumptions.']
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

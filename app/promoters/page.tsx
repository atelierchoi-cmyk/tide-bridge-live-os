import Link from 'next/link';
import { Section } from '@/components/Section';

export default function PromotersPage() {
  return (
    <Section
      eyebrow="For Promoters"
      title="Access Korean live IP with a structured offer process."
      body="Approved local promoters can review selected IP packages, submit market-specific offers, and move into Tide Bridge's controlled deal process."
    >
      <div className="grid gap-5 md:grid-cols-2">
        {[
          ['What you can propose', 'City, venue, date window, capacity, guarantee, deal mode, sponsorship angle, and market rationale.'],
          ['What you receive', 'IP format, market fit, base terms, package potential, and deal room access after review.'],
          ['Evaluation logic', 'Execution history, payment reliability, venue access, K-POP experience, and market demand alignment.'],
          ['Next step', 'Submit your promoter application and request access to the private catalog.']
        ].map(([title, body]) => (
          <div key={title} className="card p-6">
            <h3 className="text-2xl font-semibold tracking-[-0.03em]">{title}</h3>
            <p className="mt-4 text-sm leading-7 text-ivory/55">{body}</p>
          </div>
        ))}
      </div>
      <Link href="/apply" className="btn-primary mt-8 inline-flex">Apply as Promoter</Link>
    </Section>
  );
}

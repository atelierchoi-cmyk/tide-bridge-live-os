import Link from 'next/link';
import { Section } from '@/components/Section';

export default function AgenciesPage() {
  return (
    <Section
      eyebrow="For Agencies"
      title="Package your artists and actors for global live markets."
      body="Tide Bridge helps IP holders translate Korean entertainment assets into market-ready concert, fan meeting, showcase, festival, and brand live opportunities."
    >
      <div className="grid gap-5 md:grid-cols-3">
        {[
          ['Market Fit', 'Identify which cities and promoters are suitable for the artist/IP.'],
          ['Deal Terms', 'Structure guarantee, resale, co-promotion, or sponsorship models.'],
          ['Demand Data', 'Use city-level fan demand and VIP intent to validate routing.']
        ].map(([title, body]) => (
          <div key={title} className="card p-6">
            <h3 className="text-2xl font-semibold tracking-[-0.03em]">{title}</h3>
            <p className="mt-4 text-sm leading-7 text-ivory/55">{body}</p>
          </div>
        ))}
      </div>
      <Link href="/apply" className="btn-primary mt-8 inline-flex">Submit Your IP</Link>
    </Section>
  );
}

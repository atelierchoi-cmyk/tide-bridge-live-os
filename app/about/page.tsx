import { Section } from '@/components/Section';

export default function AboutPage() {
  return (
    <Section
      eyebrow="About"
      title="Tide Bridge turns Korean live IP into structured global market opportunities."
      body="The first release focuses on trusted B2B deal flow: verified promoters, curated IP packages, structured offers, fan demand signals, and P&L-based decision making."
    >
      <div className="grid gap-5 md:grid-cols-3">
        {[
          ['Live IP Packaging', 'Concerts, fan meetings, showcases, festivals, and brand live events are translated into market-ready packages.'],
          ['Promoter Network', 'Local promoters are screened by territory, execution record, venue access, payment reliability, and category fit.'],
          ['Deal Operating System', 'Each offer moves through pipeline, documents, P&L, approval, contracting, and settlement stages.']
        ].map(([title, body]) => (
          <div key={title} className="card p-6">
            <h3 className="text-2xl font-semibold tracking-[-0.03em]">{title}</h3>
            <p className="mt-4 text-sm leading-7 text-ivory/55">{body}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

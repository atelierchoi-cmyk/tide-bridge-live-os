import { Section } from '@/components/Section';

const modules = [
  ['IP Catalog', 'Curated K-POP and Korean entertainment live IP packages.'],
  ['Submit Offer', 'Structured city, venue, date window, guarantee, and deal mode intake.'],
  ['Deal Room', 'Controlled negotiation, files, approval, and contracting workflow.'],
  ['P&L / BEP', 'Sales ratio, ticket price, cost, fee, and profit scenario modeling.'],
  ['Demand Signal', 'Fan city demand and VIP intent before local market commitment.'],
  ['Partner CRM', 'Promoter and venue reliability records by territory.']
];

export default function PlatformPage() {
  return (
    <Section
      eyebrow="Platform"
      title="Homepage outside. Deal platform inside."
      body="The platform should launch as a premium public website, then unlock private B2B workflows for approved partners."
    >
      <div className="grid gap-4 md:grid-cols-3">
        {modules.map(([title, body]) => (
          <div key={title} className="card p-6">
            <h3 className="text-xl font-semibold text-ivory">{title}</h3>
            <p className="mt-3 text-sm leading-6 text-ivory/55">{body}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

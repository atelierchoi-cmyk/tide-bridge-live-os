import { Section } from '@/components/Section';

const rows = [
  ['ABC Live Bangkok', 'Promoter', 'Thailand', 'pending'],
  ['Seoul Wave Taipei', 'Promoter', 'Taiwan', 'reviewing'],
  ['Arena Partner UAE', 'Venue', 'UAE', 'approved']
];

export default function ApplicationsPage() {
  return (
    <Section eyebrow="Admin" title="Promoter Applications">
      <div className="card overflow-hidden">
        <table className="w-full text-left text-sm">
          <tbody>{rows.map(([company, type, country, status]) => (
            <tr key={company} className="border-b border-white/5 last:border-0">
              <td className="px-5 py-4 text-ivory">{company}</td>
              <td className="px-5 py-4 text-ivory/60">{type}</td>
              <td className="px-5 py-4 text-ivory/60">{country}</td>
              <td className="px-5 py-4 text-champagne">{status}</td>
            </tr>
          ))}</tbody>
        </table>
      </div>
    </Section>
  );
}

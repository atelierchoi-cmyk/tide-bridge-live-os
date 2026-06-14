import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Section } from '@/components/Section';
import { ipPackages } from '@/lib/data';
import { money } from '@/lib/pnl';

export default function PartnerIPDetailPage({ params }: { params: { id: string } }) {
  const item = ipPackages.find((pkg) => pkg.id === params.id);
  if (!item) notFound();

  return (
    <Section eyebrow={item.category} title={item.title} body={item.summary}>
      <div className="grid gap-6 lg:grid-cols-[1fr_0.8fr]">
        <div className="card p-6">
          <h3 className="text-2xl font-semibold tracking-[-0.03em]">Package Overview</h3>
          <dl className="mt-6 grid gap-4 text-sm md:grid-cols-2">
            <div className="rounded-2xl bg-white/[0.04] p-4"><dt className="text-ivory/40">Format</dt><dd className="mt-1 text-ivory">{item.format}</dd></div>
            <div className="rounded-2xl bg-white/[0.04] p-4"><dt className="text-ivory/40">Capacity</dt><dd className="mt-1 text-ivory">{item.capacityRange}</dd></div>
            <div className="rounded-2xl bg-white/[0.04] p-4"><dt className="text-ivory/40">Base Guarantee</dt><dd className="mt-1 text-ivory">{money(item.baseGuarantee, item.currency)}</dd></div>
            <div className="rounded-2xl bg-white/[0.04] p-4"><dt className="text-ivory/40">Deal Mode</dt><dd className="mt-1 capitalize text-ivory">{item.dealMode.replace('_', ' ')}</dd></div>
          </dl>
        </div>
        <div className="card p-6">
          <h3 className="text-2xl font-semibold tracking-[-0.03em]">Recommended Markets</h3>
          <div className="mt-5 flex flex-wrap gap-2">
            {item.markets.map((market) => <span key={market} className="rounded-full bg-white/[0.05] px-4 py-2 text-sm text-ivory/65">{market}</span>)}
          </div>
          <Link href="/partner/submit-offer" className="btn-primary mt-8 inline-flex">Submit Offer</Link>
        </div>
      </div>
    </Section>
  );
}

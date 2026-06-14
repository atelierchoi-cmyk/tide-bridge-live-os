import Link from 'next/link';
import type { IPPackage } from '@/types';
import { money } from '@/lib/pnl';

export function IPCard({
  item,
  privateMode = false,
  locale = 'ko',
  copy = { capacity: 'Capacity', base: 'Base', request: 'Request Access', viewDetails: 'View Details' }
}: {
  item: IPPackage;
  privateMode?: boolean;
  locale?: string;
  copy?: { capacity: string; base: string; request: string; viewDetails: string };
}) {
  const href = privateMode ? `/partner/ip/${item.id}` : `/${locale}/apply`;

  return (
    <div className="card flex h-full flex-col p-6">
      <div className="flex items-start justify-between gap-4">
        <p className="label">{item.category}</p>
        <span className="rounded-full border border-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-ivory/45">{item.accessLevel}</span>
      </div>
      <h3 className="mt-5 text-2xl font-semibold tracking-[-0.03em] text-ivory">{item.title}</h3>
      <p className="mt-2 text-sm text-champagne/80">{item.format}</p>
      <p className="mt-5 flex-1 text-sm leading-7 text-ivory/55">{item.summary}</p>
      <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
        <div className="rounded-2xl bg-white/[0.04] p-4">
          <p className="text-ivory/40">{copy.capacity}</p>
          <p className="mt-1 font-semibold text-ivory">{item.capacityRange}</p>
        </div>
        <div className="rounded-2xl bg-white/[0.04] p-4">
          <p className="text-ivory/40">{copy.base}</p>
          <p className="mt-1 font-semibold text-ivory">{money(item.baseGuarantee, item.currency)}</p>
        </div>
      </div>
      <div className="mt-6 flex flex-wrap gap-2">
        {item.markets.slice(0, 4).map((market) => (
          <span key={market} className="rounded-full bg-white/[0.05] px-3 py-1 text-xs text-ivory/55">{market}</span>
        ))}
      </div>
      <Link href={href} className="btn-secondary mt-7 text-center">{privateMode ? copy.viewDetails : copy.request}</Link>
    </div>
  );
}

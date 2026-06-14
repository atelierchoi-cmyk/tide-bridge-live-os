import Link from 'next/link';

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-smoke/40">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-ivory">Tide Bridge Live OS</p>
          <p className="mt-4 max-w-xl text-sm leading-7 text-ivory/55">
            A private B2B live IP deal platform connecting K-POP projects with verified global promoters, venues, brands, investors, and demand data.
          </p>
        </div>
        <div className="space-y-3 text-sm text-ivory/60">
          <p className="label">Platform</p>
          <Link href="/promoters" className="block hover:text-champagne">For Promoters</Link>
          <Link href="/agencies" className="block hover:text-champagne">For Agencies</Link>
          <Link href="/partner" className="block hover:text-champagne">Partner Portal</Link>
        </div>
        <div className="space-y-3 text-sm text-ivory/60">
          <p className="label">Operate</p>
          <Link href="/admin" className="block hover:text-champagne">Admin</Link>
          <Link href="/admin/pnl" className="block hover:text-champagne">P&L Simulator</Link>
          <Link href="/fan-demand" className="block hover:text-champagne">Fan Demand</Link>
        </div>
      </div>
    </footer>
  );
}

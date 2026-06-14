import Link from 'next/link';

const navItems = [
  { href: '/platform', label: 'Platform' },
  { href: '/promoters', label: 'Promoters' },
  { href: '/agencies', label: 'Agencies' },
  { href: '/ip-catalog', label: 'IP Catalog' },
  { href: '/fan-demand', label: 'Fan Demand' }
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <Link href="/" className="text-sm font-bold uppercase tracking-[0.35em] text-ivory">
          Tide Bridge
        </Link>
        <nav className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-xs uppercase tracking-[0.22em] text-ivory/65 transition hover:text-champagne">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link href="/login" className="hidden text-xs uppercase tracking-[0.22em] text-ivory/65 hover:text-champagne sm:block">
            Login
          </Link>
          <Link href="/apply" className="rounded-full border border-champagne/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-champagne hover:bg-champagne hover:text-ink">
            Apply
          </Link>
        </div>
      </div>
    </header>
  );
}

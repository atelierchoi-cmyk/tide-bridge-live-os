'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { defaultLocale, getDictionary, isLocale, locales, type Locale } from '@/lib/i18n';

function localeFromPathname(pathname: string): Locale {
  const segment = pathname.split('/')[1];
  return isLocale(segment) ? segment : defaultLocale;
}

function localizedPath(pathname: string, nextLocale: Locale) {
  const segments = pathname.split('/');

  if (isLocale(segments[1])) {
    segments[1] = nextLocale;
    return segments.join('/') || `/${nextLocale}`;
  }

  return `/${nextLocale}${pathname === '/' ? '' : pathname}`;
}

function isCinematicHomePath(pathname: string) {
  return pathname === '/' || locales.some((locale) => pathname === `/${locale}`);
}

type NavItem = {
  label: string;
  href?: string;
  items?: { label: string; href: string }[];
};

export function SiteHeader() {
  const pathname = usePathname() || `/${defaultLocale}`;
  if (isCinematicHomePath(pathname)) return null;

  const locale = localeFromPathname(pathname);
  const prefix = `/${locale}`;
  const navItems: NavItem[] = [
    {
      href: `${prefix}/platform`,
      label: 'Platform',
      items: [
        { href: `${prefix}/ip-catalog`, label: 'IP Catalog' },
        { href: `${prefix}/fan-demand`, label: 'Market Signals' },
        { href: `${prefix}/partner/submit-offer`, label: 'Offer Management' },
        { href: `${prefix}/intelligence`, label: 'Intelligence Layer' }
      ]
    },
    { href: `${prefix}/intelligence`, label: 'Intelligence' },
    { href: `${prefix}/launchpad`, label: 'Launchpad' },
    {
      label: 'Network',
      items: [
        { href: `${prefix}/verified-network`, label: 'Verified Network' },
        { href: `${prefix}/public-sector`, label: 'Public Alignment' },
        { href: `${prefix}/advisory-board`, label: 'Advisory Structure' }
      ]
    },
    {
      label: 'Use Cases',
      items: [
        { href: `${prefix}/promoters`, label: 'For Promoters' },
        { href: `${prefix}/agencies`, label: 'For IP Owners' },
        { href: `${prefix}/apply`, label: 'For Brands & Sponsors' },
        { href: `${prefix}/public-sector`, label: 'For Public & Industry Partners' }
      ]
    }
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-4">
        <Link href={prefix} className="text-sm font-bold uppercase tracking-[0.35em] text-ivory">
          Tide Bridge
        </Link>
        <nav className="hidden items-center gap-4 lg:flex xl:gap-6">
          {navItems.map((item) => (
            <div key={item.label} className="group relative">
              {item.href ? (
                <Link href={item.href} className="text-xs uppercase tracking-[0.22em] text-ivory/65 transition hover:text-champagne">
                  {item.label}
                </Link>
              ) : (
                <button className="text-xs uppercase tracking-[0.22em] text-ivory/65 transition hover:text-champagne" type="button">
                  {item.label}
                </button>
              )}
              {item.items ? (
                <div className="invisible absolute left-0 top-8 w-64 rounded-2xl border border-white/10 bg-ink/95 p-3 opacity-0 shadow-glow transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  {item.items.map((child) => (
                    <Link key={child.href} href={child.href} className="block rounded-xl px-3 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-ivory/60 transition hover:bg-white/[0.04] hover:text-champagne">
                      {child.label}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-2 lg:flex">
            {locales.map((item) => (
              <Link
                key={item}
                href={localizedPath(pathname, item)}
                className={`text-[10px] font-semibold uppercase tracking-[0.16em] ${item === locale ? 'text-champagne' : 'text-ivory/45 hover:text-ivory'}`}
                aria-current={item === locale ? 'page' : undefined}
              >
                {getDictionary(item).shortName}
              </Link>
            ))}
          </div>
          <Link href={`${prefix}/login`} className="hidden text-xs uppercase tracking-[0.22em] text-ivory/65 hover:text-champagne sm:block">
            Login
          </Link>
          <Link href={`${prefix}/apply`} className="rounded-full border border-champagne/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-champagne hover:bg-champagne hover:text-ink">
            Request Access
          </Link>
          <details className="relative lg:hidden">
            <summary className="cursor-pointer list-none rounded-full border border-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-ivory/70 transition hover:border-champagne/60 hover:text-champagne">
              Menu
            </summary>
            <div className="absolute right-0 top-12 max-h-[80vh] w-[min(86vw,22rem)] overflow-y-auto rounded-2xl border border-white/10 bg-ink/95 p-4 shadow-glow">
              <nav className="space-y-2">
                {navItems.map((item) => (
                  <div key={item.label} className="border-b border-white/10 pb-2 last:border-b-0">
                    {item.href ? (
                      <Link href={item.href} className="block rounded-xl px-3 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-ivory hover:bg-white/[0.04]">
                        {item.label}
                      </Link>
                    ) : (
                      <p className="px-3 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-ivory">{item.label}</p>
                    )}
                    {item.items ? (
                      <div className="pb-2 pl-3">
                        {item.items.map((child) => (
                          <Link key={child.href} href={child.href} className="block rounded-xl px-3 py-2 text-xs uppercase tracking-[0.14em] text-ivory/55 hover:bg-white/[0.04] hover:text-champagne">
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    ) : null}
                  </div>
                ))}
                <div className="flex items-center gap-3 px-3 pt-3">
                  {locales.map((item) => (
                    <Link
                      key={item}
                      href={localizedPath(pathname, item)}
                      className={`text-[10px] font-semibold uppercase tracking-[0.16em] ${item === locale ? 'text-champagne' : 'text-ivory/45 hover:text-ivory'}`}
                      aria-current={item === locale ? 'page' : undefined}
                    >
                      {getDictionary(item).shortName}
                    </Link>
                  ))}
                </div>
              </nav>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}

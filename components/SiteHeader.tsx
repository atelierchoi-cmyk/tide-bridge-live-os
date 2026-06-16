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

export function SiteHeader() {
  const pathname = usePathname() || `/${defaultLocale}`;
  const locale = localeFromPathname(pathname);
  const dict = getDictionary(locale);
  const prefix = `/${locale}`;
  const navItems = [
    { href: `${prefix}/platform`, label: 'Platform' },
    { href: `${prefix}/launchpad`, label: 'Launchpad' },
    { href: `${prefix}/promoters`, label: 'For Promoters' },
    { href: `${prefix}/agencies`, label: 'For Agencies' },
    { href: `${prefix}/ip-catalog`, label: 'IP Catalog' },
    { href: `${prefix}/fan-demand`, label: 'Fan Demand' }
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <Link href={prefix} className="text-sm font-bold uppercase tracking-[0.35em] text-ivory">
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
            {dict.nav.login}
          </Link>
          <Link href={`${prefix}/apply`} className="rounded-full border border-champagne/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-champagne hover:bg-champagne hover:text-ink">
            {dict.nav.apply}
          </Link>
        </div>
      </div>
    </header>
  );
}

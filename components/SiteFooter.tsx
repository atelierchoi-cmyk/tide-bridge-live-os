'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { defaultLocale, getDictionary, isLocale, type Locale } from '@/lib/i18n';
import { trustNav } from '@/lib/trust-pages';

function localeFromPathname(pathname: string): Locale {
  const segment = pathname.split('/')[1];
  return isLocale(segment) ? segment : defaultLocale;
}

export function SiteFooter() {
  const pathname = usePathname() || `/${defaultLocale}`;
  const locale = localeFromPathname(pathname);
  const dict = getDictionary(locale);
  const trust = trustNav[locale];
  const prefix = `/${locale}`;

  return (
    <footer className="border-t border-white/10 bg-smoke/40">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-ivory">Tide Bridge Live OS</p>
          <p className="cjk-copy mt-4 max-w-xl whitespace-pre-line text-sm leading-7 text-ivory/55">{dict.footer.description}</p>
        </div>
        <div className="space-y-3 text-sm text-ivory/60">
          <p className="label">{dict.footer.platform}</p>
          <Link href={`${prefix}/intelligence`} className="block hover:text-champagne">Intelligence</Link>
          <Link href={`${prefix}/launchpad`} className="block hover:text-champagne">Launchpad</Link>
          <Link href={`${prefix}/promoters`} className="block hover:text-champagne">{dict.footer.promoters}</Link>
          <Link href={`${prefix}/agencies`} className="block hover:text-champagne">{dict.footer.agencies}</Link>
          <Link href="/partner" className="block hover:text-champagne">{dict.footer.partner}</Link>
        </div>
        <div className="space-y-3 text-sm text-ivory/60">
          <p className="label">{dict.footer.operate}</p>
          <Link href="/admin" className="block hover:text-champagne">{dict.footer.admin}</Link>
          <Link href="/admin/pnl" className="block hover:text-champagne">{dict.footer.pnl}</Link>
          <Link href={`${prefix}/fan-demand`} className="block hover:text-champagne">{dict.footer.demand}</Link>
        </div>
        <div className="space-y-3 text-sm text-ivory/60">
          <p className="label">{trust.label}</p>
          <Link href={`${prefix}/public-sector`} className="block hover:text-champagne">{trust.publicAlignment}</Link>
          <Link href={`${prefix}/verified-network`} className="block hover:text-champagne">{trust.verifiedNetwork}</Link>
          <Link href={`${prefix}/advisory-board`} className="block hover:text-champagne">{trust.advisoryStructure}</Link>
        </div>
      </div>
    </footer>
  );
}

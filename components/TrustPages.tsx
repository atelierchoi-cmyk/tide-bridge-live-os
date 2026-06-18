import Link from 'next/link';
import { Section } from '@/components/Section';
import type { Locale } from '@/lib/i18n';
import { trustPages } from '@/lib/trust-pages';

type PageKey = 'publicSector' | 'verifiedNetwork' | 'advisoryStructure';

function TrustPage({ locale, pageKey }: { locale: Locale; pageKey: PageKey }) {
  const copy = trustPages[locale][pageKey];
  const ctaHref = pageKey === 'publicSector' ? `/${locale}/verified-network` : `/${locale}/apply`;

  return (
    <Section eyebrow={copy.eyebrow} title={copy.title} body={copy.body}>
      <div className="cjk-copy whitespace-pre-line rounded-2xl border border-champagne/25 bg-champagne/[0.06] p-5 text-sm leading-7 text-ivory/70">
        {copy.notice}
      </div>
      <div className="mt-6 grid gap-5 lg:grid-cols-2">
        {copy.sections.map(([title, body]) => (
          <div key={title} className="card p-6">
            <h3 className="cjk-copy whitespace-pre-line text-xl font-semibold tracking-[-0.03em] text-ivory">{title}</h3>
            <p className="cjk-copy mt-4 whitespace-pre-line text-sm leading-7 text-ivory/55">{body}</p>
          </div>
        ))}
      </div>
      {copy.cta ? <Link href={ctaHref} className="btn-primary mt-8 inline-flex">{copy.cta}</Link> : null}
    </Section>
  );
}

export function PublicSectorPage({ locale }: { locale: Locale }) {
  return <TrustPage locale={locale} pageKey="publicSector" />;
}

export function VerifiedNetworkPage({ locale }: { locale: Locale }) {
  return <TrustPage locale={locale} pageKey="verifiedNetwork" />;
}

export function AdvisoryStructurePage({ locale }: { locale: Locale }) {
  return <TrustPage locale={locale} pageKey="advisoryStructure" />;
}

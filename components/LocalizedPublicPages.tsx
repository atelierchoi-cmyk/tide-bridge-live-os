import Link from 'next/link';
import { ApplicationForm } from '@/components/ApplicationForm';
import { FanDemandForm } from '@/components/FanDemandForm';
import { Hero } from '@/components/Hero';
import { IPCard } from '@/components/IPCard';
import { OfferForm } from '@/components/OfferForm';
import {
  DealReadinessReportPreview,
  IntelligenceDashboardPreview,
  MarketSignalMatrix,
  OpportunityFlowDiagram,
  PromoterTrustScorecard
} from '@/components/ProductDemos';
import { Section } from '@/components/Section';
import { StatCard } from '@/components/StatCard';
import { ipPackages } from '@/lib/data';

function CardGrid({ items, columns = 3 }: { items: string[][]; columns?: 2 | 3 }) {
  return (
    <div className={`grid gap-5 ${columns === 2 ? 'md:grid-cols-2' : 'md:grid-cols-3'}`}>
      {items.map(([title, body]) => (
        <div key={title} className="card p-6">
          <h3 className="text-2xl font-semibold tracking-[-0.03em]">{title}</h3>
          <p className="mt-4 text-sm leading-7 text-ivory/55">{body}</p>
        </div>
      ))}
    </div>
  );
}

export function LocalizedHome({ dict, locale }: { dict: any; locale: string }) {
  return (
    <>
      <Hero copy={dict.hero} locale={locale} />
      <IntelligenceDashboardPreview />
      <Section eyebrow={dict.home.connectEyebrow} title={dict.home.connectTitle} body={dict.home.connectBody}>
        <div className="grid gap-4 md:grid-cols-3">
          {dict.home.connectItems.map((item: string) => (
            <div key={item} className="card p-6 text-xl font-semibold tracking-[-0.03em] text-ivory">{item}</div>
          ))}
        </div>
      </Section>
      <OpportunityFlowDiagram />
      <Section eyebrow={dict.home.metricsEyebrow} title={dict.home.metricsTitle}>
        <div className="grid gap-4 md:grid-cols-4">
          {dict.home.metrics.map((metric: { label: string; value: string; delta: string }) => <StatCard key={metric.label} {...metric} />)}
        </div>
      </Section>
      <MarketSignalMatrix />
    </>
  );
}

export function LocalizedAbout({ dict }: { dict: any }) {
  return (
    <Section eyebrow={dict.about.eyebrow} title={dict.about.title} body={dict.about.body}>
      <CardGrid items={dict.about.cards} />
    </Section>
  );
}

export function LocalizedPlatform({ dict, locale }: { dict: any; locale: string }) {
  return (
    <>
      <Section eyebrow={dict.platform.eyebrow} title={dict.platform.title} body={dict.platform.body}>
        <CardGrid items={dict.platform.modules} />
        <div className="mt-8 rounded border border-champagne/25 bg-champagne/[0.06] p-6">
          <p className="label mb-3">Intelligence Layer</p>
          <h3 className="text-2xl font-semibold tracking-[-0.03em] text-ivory">IP value, market demand, partner trust, and deal readiness.</h3>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-ivory/60">
            Tide Bridge Intelligence adds a decision layer before private access, offers, and deeper review.
          </p>
          <Link href={`/${locale}/intelligence`} className="btn-secondary mt-6 inline-flex">Explore Intelligence</Link>
        </div>
      </Section>
      <OpportunityFlowDiagram />
      <DealReadinessReportPreview />
    </>
  );
}

export function LocalizedPromoters({ dict, locale }: { dict: any; locale: string }) {
  return (
    <>
      <Section eyebrow={dict.promoters.eyebrow} title={dict.promoters.title} body={dict.promoters.body}>
        <CardGrid items={dict.promoters.cards} columns={2} />
        <Link href={`/${locale}/apply`} className="btn-primary mt-8 inline-flex">{dict.promoters.cta}</Link>
      </Section>
      <PromoterTrustScorecard />
    </>
  );
}

export function LocalizedAgencies({ dict, locale }: { dict: any; locale: string }) {
  return (
    <>
      <Section eyebrow={dict.agencies.eyebrow} title={dict.agencies.title} body={dict.agencies.body}>
        <CardGrid items={dict.agencies.cards} />
        <Link href={`/${locale}/apply`} className="btn-primary mt-8 inline-flex">{dict.agencies.cta}</Link>
      </Section>
      <DealReadinessReportPreview />
    </>
  );
}

export function LocalizedCatalog({ dict, locale }: { dict: any; locale: string }) {
  return (
    <Section eyebrow={dict.catalog.eyebrow} title={dict.catalog.title} body={dict.catalog.body}>
      <div className="grid gap-5 md:grid-cols-2">
        {ipPackages.map((item) => <IPCard key={item.id} item={item} locale={locale} copy={dict.catalog} />)}
      </div>
    </Section>
  );
}

export function LocalizedApply({ dict }: { dict: any }) {
  return (
    <Section eyebrow={dict.apply.eyebrow} title={dict.apply.title} body={dict.apply.body}>
      <ApplicationForm copy={dict.forms.application} />
    </Section>
  );
}

export function LocalizedFanDemand({ dict }: { dict: any }) {
  return (
    <>
      <Section eyebrow={dict.fanDemand.eyebrow} title={dict.fanDemand.title} body={dict.fanDemand.body}>
        <FanDemandForm copy={dict.forms.demand} />
      </Section>
      <MarketSignalMatrix />
    </>
  );
}

export function LocalizedSubmitOffer({ dict }: { dict: any }) {
  return (
    <>
      <Section eyebrow={dict.submitOffer.eyebrow} title={dict.submitOffer.title} body={dict.submitOffer.body}>
        <OfferForm copy={dict.forms.offer} />
      </Section>
      <DealReadinessReportPreview />
    </>
  );
}

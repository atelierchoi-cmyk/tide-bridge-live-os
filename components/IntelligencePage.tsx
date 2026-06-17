import Link from 'next/link';
import { Section } from '@/components/Section';
import { intelligenceCategories, intelligenceDictionaries } from '@/lib/intelligence';
import type { Locale } from '@/lib/i18n';

function Card({ title, body, points }: { title: string; body: string; points?: string[] }) {
  return (
    <div className="card p-6">
      <h3 className="break-keep text-2xl font-semibold leading-snug tracking-[-0.03em] text-ivory">{title}</h3>
      {body ? <p className="mt-4 break-keep text-sm leading-7 text-ivory/55">{body}</p> : null}
      {points ? (
        <ul className="mt-5 space-y-2 break-keep text-sm text-ivory/60">
          {points.map((point) => (
            <li key={point} className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-champagne" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

export function IntelligencePage({ locale }: { locale: Locale }) {
  const copy = intelligenceDictionaries[locale];

  return (
    <>
      <section className="mx-auto max-w-7xl px-5 py-24 md:py-32">
        <div className="max-w-4xl">
          <p className="label mb-6 break-keep">{copy.hero.eyebrow}</p>
          <h1 className="break-keep text-5xl font-semibold leading-[1.03] text-ivory md:text-8xl md:leading-[0.98]">{copy.hero.title}</h1>
          <p className="mt-8 max-w-3xl break-keep text-lg leading-8 text-ivory/65">{copy.hero.body}</p>
          <p className="mt-4 max-w-3xl break-keep text-base leading-8 text-ivory/55">{copy.hero.support}</p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <Link href={`/${locale}/apply`} className="btn-primary text-center">Request Intelligence Preview</Link>
            <Link href={`/${locale}/platform`} className="btn-secondary text-center">Explore Live OS</Link>
          </div>
        </div>
      </section>

      <Section eyebrow={copy.architecture.eyebrow} title={copy.architecture.title} body={copy.architecture.body}>
        <div className="grid gap-5 md:grid-cols-4">
          {copy.architecture.items.map((item) => <Card key={item.title} {...item} />)}
        </div>
      </Section>

      <Section eyebrow={copy.modules.eyebrow} title={copy.modules.title} body={copy.modules.body}>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {copy.modules.items.map((item) => <Card key={item.title} {...item} />)}
        </div>
      </Section>

      <Section eyebrow="Territory Coverage" title="Korea-to-Global and Global-to-Korea opportunity categories.">
        <div className="grid gap-3 md:grid-cols-3">
          {intelligenceCategories.map((item) => (
            <div key={item} className="break-keep rounded border border-white/10 bg-white/[0.03] px-4 py-3 text-sm font-semibold text-ivory/75">{item}</div>
          ))}
        </div>
      </Section>

      <Section eyebrow={copy.subscribe.eyebrow} title={copy.subscribe.title} body={copy.subscribe.body}>
        <div className="grid gap-5 md:grid-cols-3">
          {copy.subscribe.audiences.map((item) => <Card key={item.title} {...item} />)}
        </div>
      </Section>

      <Section eyebrow={copy.tiers.eyebrow} title={copy.tiers.title} body={copy.tiers.body}>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {copy.tiers.items.map((tier) => <Card key={tier.title} title={tier.title} body="" points={tier.points} />)}
        </div>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          {copy.tiers.ctas.map((cta) => (
            <Link key={cta} href={`/${locale}/apply`} className="btn-secondary text-center">{cta}</Link>
          ))}
        </div>
      </Section>

      <Section eyebrow={copy.useCases.eyebrow} title={copy.useCases.title}>
        <div className="grid gap-5 md:grid-cols-2">
          {copy.useCases.items.map((item) => <Card key={item.title} {...item} />)}
        </div>
      </Section>

      <Section eyebrow={copy.trust.eyebrow} title={copy.trust.title}>
        <div className="grid gap-5 md:grid-cols-3">
          {copy.trust.notes.map((note) => (
            <div key={note} className="break-keep rounded border border-champagne/25 bg-champagne/[0.06] p-6 text-sm leading-7 text-ivory/70">{note}</div>
          ))}
        </div>
      </Section>
    </>
  );
}

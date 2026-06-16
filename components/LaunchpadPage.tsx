import Link from 'next/link';
import { launchpadPages } from '@/lib/launchpad';
import type { Locale } from '@/lib/i18n';

function CardGrid({ items }: { items: string[][] }) {
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {items.map(([title, body]) => (
        <div key={title} className="card p-6">
          <h3 className="text-2xl font-semibold tracking-[-0.03em] text-ivory">{title}</h3>
          <p className="mt-4 text-sm leading-7 text-ivory/55">{body}</p>
        </div>
      ))}
    </div>
  );
}

function BulletPanel({ title, body, bullets }: { title: string; body: string; bullets: string[] }) {
  return (
    <div className="card p-7">
      <h3 className="text-3xl font-semibold tracking-[-0.04em] text-ivory">{title}</h3>
      <p className="mt-4 text-sm leading-7 text-ivory/55">{body}</p>
      <ul className="mt-6 space-y-3 text-sm text-ivory/65">
        {bullets.map((item) => (
          <li key={item} className="border-l border-champagne/50 pl-4">{item}</li>
        ))}
      </ul>
    </div>
  );
}

export function LaunchpadPage({ locale }: { locale: Locale }) {
  const copy = launchpadPages[locale];
  const prefix = `/${locale}`;

  return (
    <>
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_10%,rgba(215,181,109,0.18),transparent_32%),radial-gradient(circle_at_82%_20%,rgba(182,106,69,0.14),transparent_28%)]" />
        <div className="relative mx-auto max-w-7xl px-5 py-24 md:py-32">
          <div className="max-w-4xl">
            <p className="label mb-6">{copy.hero.eyebrow}</p>
            <h1 className="text-5xl font-semibold leading-[0.95] text-ivory md:text-8xl">{copy.hero.title}</h1>
            <p className="mt-8 max-w-3xl text-lg leading-8 text-ivory/65">{copy.hero.body}</p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <Link href={`${prefix}/apply`} className="btn-primary text-center">{copy.hero.primary}</Link>
              <Link href={`${prefix}/agencies`} className="btn-secondary text-center">{copy.hero.secondary}</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20">
        <div className="mb-10 max-w-3xl">
          <p className="label mb-4">Market Entry Layer</p>
          <h2 className="text-4xl font-semibold tracking-[-0.04em] text-ivory md:text-6xl">{copy.audience.title}</h2>
          <p className="mt-6 text-base leading-8 text-ivory/60">{copy.audience.body}</p>
        </div>
        <CardGrid items={copy.audience.cards} />
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20">
        <div className="mb-10 max-w-3xl">
          <p className="label mb-4">Launch Services</p>
          <h2 className="text-4xl font-semibold tracking-[-0.04em] text-ivory md:text-6xl">{copy.services.title}</h2>
          <p className="mt-6 text-base leading-8 text-ivory/60">{copy.services.body}</p>
        </div>
        <CardGrid items={copy.services.cards} />
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <p className="label mb-4">Live OS Connection</p>
            <h2 className="text-4xl font-semibold tracking-[-0.04em] text-ivory md:text-6xl">{copy.connection.title}</h2>
            <p className="mt-6 text-base leading-8 text-ivory/60">{copy.connection.body}</p>
          </div>
          <div className="card p-7">
            <div className="space-y-4">
              {copy.connection.flow.map((item, index) => (
                <div key={item} className="flex items-center gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-champagne/50 text-xs font-semibold text-champagne">{index + 1}</span>
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-ivory/75">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-5 py-20 lg:grid-cols-2">
        <BulletPanel {...copy.agencies} />
        <BulletPanel {...copy.partners} />
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20">
        <div className="card border-champagne/30 p-7">
          <p className="label mb-4">Scope Guardrail</p>
          <h2 className="text-3xl font-semibold tracking-[-0.04em] text-ivory">{copy.note.title}</h2>
          <p className="mt-5 max-w-4xl text-sm leading-7 text-ivory/60">{copy.note.body}</p>
        </div>
      </section>
    </>
  );
}

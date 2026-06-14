import Link from 'next/link';

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(215,181,109,0.18),transparent_32%),radial-gradient(circle_at_85%_20%,rgba(182,106,69,0.15),transparent_28%)]" />
      <div className="relative mx-auto max-w-7xl px-5 py-24 md:py-32">
        <div className="max-w-4xl">
          <p className="label mb-6">Private B2B Live IP Deal Platform</p>
          <h1 className="text-5xl font-semibold leading-[0.95] tracking-[-0.06em] text-ivory md:text-8xl">
            Connecting K-POP Live IP to Global Promoters.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-ivory/65">
            Tide Bridge Live OS connects Korean entertainment IP with verified local promoters, venues, brands, investors, and fan demand signals to create repeatable global live business.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link href="/apply" className="btn-primary text-center">Apply as Promoter</Link>
            <Link href="/ip-catalog" className="btn-secondary text-center">Explore IP Preview</Link>
          </div>
        </div>
        <div className="mt-16 grid gap-4 md:grid-cols-3">
          {[
            ['IP Catalog', 'Concerts, fan meetings, showcases, festivals, and brand events.'],
            ['Structured Offers', 'City, venue, date window, guarantee, and deal mode in one pipeline.'],
            ['P&L / BEP Logic', 'Evaluate each market before committing capital or rights.']
          ].map(([title, body]) => (
            <div key={title} className="card p-6">
              <p className="text-lg font-semibold text-ivory">{title}</p>
              <p className="mt-3 text-sm leading-6 text-ivory/55">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

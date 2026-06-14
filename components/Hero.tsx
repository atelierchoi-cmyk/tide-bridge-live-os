import Link from 'next/link';

export function Hero({
  copy,
  locale
}: {
  copy: { eyebrow: string; title: string; body: string; primary: string; secondary: string; cards: string[][] };
  locale: string;
}) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(215,181,109,0.18),transparent_32%),radial-gradient(circle_at_85%_20%,rgba(182,106,69,0.15),transparent_28%)]" />
      <div className="relative mx-auto max-w-7xl px-5 py-24 md:py-32">
        <div className="max-w-4xl">
          <p className="label mb-6">{copy.eyebrow}</p>
          <h1 className="text-5xl font-semibold leading-[0.95] tracking-[-0.06em] text-ivory md:text-8xl">{copy.title}</h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-ivory/65">{copy.body}</p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link href={`/${locale}/apply`} className="btn-primary text-center">{copy.primary}</Link>
            <Link href={`/${locale}/ip-catalog`} className="btn-secondary text-center">{copy.secondary}</Link>
          </div>
        </div>
        <div className="mt-16 grid gap-4 md:grid-cols-3">
          {copy.cards.map(([title, body]) => (
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

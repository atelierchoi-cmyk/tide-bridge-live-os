import Link from 'next/link';

type HeroAction = {
  label: string;
  path: string;
  variant: 'primary' | 'secondary';
};

export function Hero({
  copy,
  locale
}: {
  copy: {
    eyebrow: string;
    title: string;
    body: string;
    supportingBody?: string;
    primary: string;
    secondary: string;
    actions?: HeroAction[];
    cards: string[][];
  };
  locale: string;
}) {
  const actions = copy.actions ?? [
    { label: copy.primary, path: 'apply', variant: 'primary' as const },
    { label: copy.secondary, path: 'ip-catalog', variant: 'secondary' as const }
  ];

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(215,181,109,0.18),transparent_32%),radial-gradient(circle_at_85%_20%,rgba(182,106,69,0.15),transparent_28%)]" />
      <div className="relative mx-auto max-w-7xl px-5 py-24 md:py-32">
        <div className="max-w-4xl">
          <p className="label mb-6 break-keep">{copy.eyebrow}</p>
          <h1 className="cjk-copy whitespace-pre-line break-keep text-5xl font-semibold leading-[1.03] text-ivory md:text-8xl md:leading-[0.98]">{copy.title}</h1>
          <p className="cjk-copy mt-8 max-w-2xl whitespace-pre-line break-keep text-lg leading-8 text-ivory/65">{copy.body}</p>
          {copy.supportingBody ? <p className="cjk-copy mt-4 max-w-2xl whitespace-pre-line break-keep text-base leading-8 text-ivory/55">{copy.supportingBody}</p> : null}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            {actions.map((action) => (
              <Link
                key={action.label}
                href={`/${locale}/${action.path}`}
                className={`${action.variant === 'primary' ? 'btn-primary' : 'btn-secondary'} text-center`}
              >
                {action.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="mt-16 grid gap-4 md:grid-cols-3">
          {copy.cards.map(([title, body]) => (
            <div key={title} className="card p-6">
              <p className="cjk-copy whitespace-pre-line break-keep text-lg font-semibold text-ivory">{title}</p>
              <p className="cjk-copy mt-3 whitespace-pre-line break-keep text-sm leading-6 text-ivory/55">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

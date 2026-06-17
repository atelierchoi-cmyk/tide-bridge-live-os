export function Section({ eyebrow, title, body, children }: { eyebrow?: string; title: string; body?: string; children?: React.ReactNode }) {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20">
      <div className="mb-10 max-w-3xl">
        {eyebrow ? <p className="label mb-4">{eyebrow}</p> : null}
        <h2 className="text-4xl font-semibold tracking-[-0.04em] text-ivory md:text-6xl">{title}</h2>
        {body ? <p className="mt-6 whitespace-pre-line text-base leading-8 text-ivory/60">{body}</p> : null}
      </div>
      {children}
    </section>
  );
}

type FlowStep = {
  label: string;
  detail: string;
};

const readinessRows = [
  ['Market fit', 'Strong', 'Comparable demand and category fit reviewed.'],
  ['Partner trust', 'Reviewed', 'Profile, track record, and references in progress.'],
  ['Commercial baseline', 'Range-based', 'Capacity, timing, and local assumptions structured.'],
  ['Execution risk', 'Moderate', 'Venue fit and local operating plan require deeper review.']
];

const territorySignals = [
  ['North America', 'Emerging', 'Korean music, cultural showcases, creator-led events'],
  ['Japan', 'Active', 'Music, fan events, exhibitions, brand-culture formats'],
  ['Southeast Asia', 'High', 'Korean entertainment IP, festivals, premium fan experiences'],
  ['Europe', 'Selective', 'Touring, cultural festivals, immersive exhibitions'],
  ['Korea inbound', 'Reviewed', 'Global touring IP, exhibitions, performance IP']
];

const flowSteps: FlowStep[] = [
  { label: 'Access Review', detail: 'Company profile, role, territory, and operating fit.' },
  { label: 'Market Signal', detail: 'Demand patterns, venue context, and comparable activity.' },
  { label: 'Offer Intake', detail: 'City, timing, capacity, commercial baseline, and rationale.' },
  { label: 'Readiness Review', detail: 'Partner trust, execution risk, and recommended next step.' }
];

function DemoSection({
  eyebrow,
  title,
  body,
  children
}: {
  eyebrow: string;
  title: string;
  body?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16">
      <div className="mb-8 grid gap-6 lg:grid-cols-[0.8fr_1fr] lg:items-end">
        <div>
          <p className="label mb-4">{eyebrow}</p>
          <h2 className="max-w-3xl text-3xl font-semibold leading-tight text-ivory md:text-5xl">{title}</h2>
        </div>
        {body ? <p className="max-w-2xl text-sm leading-7 text-ivory/60 lg:justify-self-end">{body}</p> : null}
      </div>
      {children}
    </section>
  );
}

function StatusPill({ children, tone = 'champagne' }: { children: React.ReactNode; tone?: 'champagne' | 'blue' | 'green' }) {
  const toneClass = {
    champagne: 'border-champagne/35 bg-champagne/[0.08] text-champagne',
    blue: 'border-sky-300/25 bg-sky-300/[0.08] text-sky-100',
    green: 'border-emerald-300/25 bg-emerald-300/[0.08] text-emerald-100'
  }[tone];

  return (
    <span className={`inline-flex rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] ${toneClass}`}>
      {children}
    </span>
  );
}

function Meter({ value }: { value: number }) {
  return (
    <div className="h-2 rounded-full bg-white/[0.08]">
      <div className="h-2 rounded-full bg-champagne" style={{ width: `${value}%` }} />
    </div>
  );
}

export function IntelligenceDashboardPreview() {
  return (
    <DemoSection
      eyebrow="Sample Intelligence Dashboard"
      title="A compact command view for IP, market, partner, and readiness signals."
      body="Designed as a private decision surface for reviewed partners and controlled opportunity review."
    >
      <div className="card overflow-hidden">
        <div className="grid gap-px bg-white/10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="bg-ink/95 p-6 md:p-8">
            <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-ivory/45">Live & Cultural IP Review</p>
                <h3 className="mt-2 text-2xl font-semibold text-ivory">Korean content expansion pipeline</h3>
              </div>
              <StatusPill tone="green">Private Preview</StatusPill>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                ['IP fit', '82', 'Category and audience signal'],
                ['Partner trust', '76', 'Track record under review'],
                ['Deal readiness', '68', 'Needs execution detail']
              ].map(([label, value, note]) => (
                <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.035] p-5">
                  <p className="text-xs uppercase tracking-[0.16em] text-ivory/45">{label}</p>
                  <p className="mt-4 text-4xl font-semibold text-ivory">{value}</p>
                  <div className="mt-4">
                    <Meter value={Number(value)} />
                  </div>
                  <p className="mt-4 text-xs leading-5 text-ivory/50">{note}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-ink/95 p-6 md:p-8">
            <p className="text-xs uppercase tracking-[0.18em] text-ivory/45">Signal Queue</p>
            <div className="mt-5 space-y-3">
              {[
                ['Tokyo', 'Active promoter interest', 'High'],
                ['Los Angeles', 'Showcase pilot fit', 'Reviewed'],
                ['Bangkok', 'Fan and brand signal', 'High'],
                ['Seoul inbound', 'Global exhibition format', 'Selective']
              ].map(([market, note, status]) => (
                <div key={market} className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.035] p-4">
                  <div>
                    <p className="font-semibold text-ivory">{market}</p>
                    <p className="mt-1 text-xs text-ivory/50">{note}</p>
                  </div>
                  <StatusPill>{status}</StatusPill>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DemoSection>
  );
}

export function DealReadinessReportPreview() {
  return (
    <DemoSection
      eyebrow="Deal Readiness Report Preview"
      title="Structured review before private access moves into deeper negotiation."
      body="The report frames readiness, risk, and next steps without implying assured outcomes."
    >
      <div className="card p-6 md:p-8">
        <div className="mb-7 flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-ivory/45">Opportunity Review</p>
            <h3 className="mt-2 text-3xl font-semibold text-ivory">Cross-border cultural IP opportunity</h3>
          </div>
          <StatusPill tone="blue">Readiness Draft</StatusPill>
        </div>
        <div className="overflow-hidden rounded-2xl border border-white/10">
          {readinessRows.map(([label, status, note]) => (
            <div key={label} className="grid gap-3 border-b border-white/10 bg-white/[0.025] p-4 last:border-b-0 md:grid-cols-[0.8fr_0.6fr_1.6fr] md:items-center">
              <p className="text-sm font-semibold text-ivory">{label}</p>
              <p className="text-sm text-champagne">{status}</p>
              <p className="text-sm leading-6 text-ivory/55">{note}</p>
            </div>
          ))}
        </div>
      </div>
    </DemoSection>
  );
}

export function PromoterTrustScorecard() {
  return (
    <DemoSection
      eyebrow="Promoter Trust Scorecard"
      title="A reviewed partner layer for access, offers, and operating confidence."
      body="Verification remains an internal Tide Bridge process and does not imply public certification."
    >
      <div className="grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="card p-6 md:p-8">
          <p className="text-xs uppercase tracking-[0.18em] text-ivory/45">Verified Partner Review</p>
          <p className="mt-5 text-6xl font-semibold text-ivory">78</p>
          <p className="mt-3 text-sm leading-7 text-ivory/55">Profile and track record reviewed. References and settlement history remain under controlled review.</p>
          <div className="mt-6">
            <Meter value={78} />
          </div>
        </div>
        <div className="card p-6 md:p-8">
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ['Company profile', 'Complete', 92],
              ['Track record', 'Reviewed', 84],
              ['References', 'In progress', 62],
              ['Market coverage', 'Strong', 86],
              ['Venue access', 'Reviewed', 73],
              ['Settlement reliability', 'Needs review', 54]
            ].map(([label, status, value]) => (
              <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
                <div className="mb-3 flex items-center justify-between gap-3">
                  <p className="text-sm font-semibold text-ivory">{label}</p>
                  <span className="text-xs text-ivory/45">{status}</span>
                </div>
                <Meter value={Number(value)} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </DemoSection>
  );
}

export function OpportunityFlowDiagram() {
  return (
    <DemoSection
      eyebrow="Cross-Border Opportunity Flow"
      title="From controlled access to structured opportunity review."
      body="Each step narrows uncertainty before private materials, commercial assumptions, or partner introductions move forward."
    >
      <div className="grid gap-4 md:grid-cols-4">
        {flowSteps.map((step, index) => (
          <div key={step.label} className="card p-5">
            <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full border border-champagne/40 text-sm font-semibold text-champagne">
              {index + 1}
            </div>
            <h3 className="text-xl font-semibold text-ivory">{step.label}</h3>
            <p className="mt-4 text-sm leading-7 text-ivory/55">{step.detail}</p>
          </div>
        ))}
      </div>
    </DemoSection>
  );
}

export function MarketSignalMatrix() {
  return (
    <DemoSection
      eyebrow="Market / Territory Signal Matrix"
      title="Territory signals organized for private opportunity review."
      body="Signals are interpreted as market intelligence and early opportunity context."
    >
      <div className="card overflow-hidden">
        <div className="grid border-b border-white/10 bg-white/[0.04] px-5 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-ivory/45 md:grid-cols-[0.7fr_0.55fr_1.4fr]">
          <span>Territory</span>
          <span>Signal</span>
          <span>Relevant categories</span>
        </div>
        {territorySignals.map(([territory, signal, categories]) => (
          <div key={territory} className="grid gap-3 border-b border-white/10 px-5 py-5 last:border-b-0 md:grid-cols-[0.7fr_0.55fr_1.4fr] md:items-center">
            <p className="font-semibold text-ivory">{territory}</p>
            <StatusPill>{signal}</StatusPill>
            <p className="text-sm leading-6 text-ivory/55">{categories}</p>
          </div>
        ))}
      </div>
    </DemoSection>
  );
}

export function LaunchpadProgramFlow() {
  return (
    <DemoSection
      eyebrow="Launchpad Program Flow"
      title="A controlled market-entry path for selected Korean content IP."
      body="Launchpad connects intelligence, partner review, pilot design, and readiness reporting before deeper market-entry decisions."
    >
      <div className="card p-6 md:p-8">
        <div className="grid gap-4 md:grid-cols-5">
          {['IP Review', 'Market Fit', 'Partner Map', 'Pilot Design', 'Readiness Report'].map((item, index) => (
            <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
              <p className="text-xs uppercase tracking-[0.16em] text-champagne/80">Phase {index + 1}</p>
              <p className="mt-4 text-lg font-semibold text-ivory">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </DemoSection>
  );
}

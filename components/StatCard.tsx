export function StatCard({ label, value, delta }: { label: string; value: string; delta: string }) {
  return (
    <div className="card p-6">
      <p className="cjk-copy text-sm text-ivory/50">{label}</p>
      <p className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-ivory">{value}</p>
      <p className="cjk-copy mt-3 text-xs uppercase tracking-[0.18em] text-champagne/75">{delta}</p>
    </div>
  );
}

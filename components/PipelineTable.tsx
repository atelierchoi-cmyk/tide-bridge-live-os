import { pipelineRows } from '@/lib/data';

export function PipelineTable() {
  return (
    <div className="card overflow-hidden">
      <table className="w-full text-left text-sm">
        <thead className="border-b border-white/10 bg-white/[0.03] text-xs uppercase tracking-[0.18em] text-ivory/45">
          <tr>
            <th className="px-5 py-4">IP</th>
            <th className="px-5 py-4">Market</th>
            <th className="px-5 py-4">Promoter</th>
            <th className="px-5 py-4">Value</th>
            <th className="px-5 py-4">Status</th>
          </tr>
        </thead>
        <tbody>
          {pipelineRows.map((row) => (
            <tr key={`${row.ip}-${row.market}`} className="border-b border-white/5 last:border-0">
              <td className="px-5 py-4 text-ivory">{row.ip}</td>
              <td className="px-5 py-4 text-ivory/60">{row.market}</td>
              <td className="px-5 py-4 text-ivory/60">{row.promoter}</td>
              <td className="px-5 py-4 text-champagne">{row.value}</td>
              <td className="px-5 py-4"><span className="rounded-full bg-white/[0.06] px-3 py-1 text-xs text-ivory/65">{row.status}</span></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

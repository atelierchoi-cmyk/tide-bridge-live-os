'use client';

import { useMemo, useState } from 'react';
import { calculatePnl, money } from '@/lib/pnl';

export function PnlSimulator() {
  const [input, setInput] = useState({
    capacity: 5000,
    averageTicketPrice: 120,
    salesRatio: 0.75,
    artistGuarantee: 180000,
    localProductionCost: 120000,
    marketingCost: 30000,
    travelCost: 35000,
    platformFeePct: 0.1
  });

  const result = useMemo(() => calculatePnl(input), [input]);

  const fields = [
    ['capacity', 'Capacity'],
    ['averageTicketPrice', 'Avg Revenue per Seat'],
    ['salesRatio', 'Sales Ratio'],
    ['artistGuarantee', 'Artist Guarantee'],
    ['localProductionCost', 'Local Production'],
    ['marketingCost', 'Marketing'],
    ['travelCost', 'Travel / Cargo'],
    ['platformFeePct', 'Platform Fee %']
  ] as const;

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
      <div className="card grid gap-5 p-6 md:grid-cols-2">
        {fields.map(([key, label]) => (
          <div key={key}>
            <label className="label">{label}</label>
            <input
              className="input mt-2"
              type="number"
              step={key.includes('Ratio') || key.includes('Pct') ? 0.01 : 1}
              value={input[key]}
              onChange={(e) => setInput({ ...input, [key]: Number(e.target.value) })}
            />
          </div>
        ))}
      </div>
      <div className="card p-6">
        <p className="label">Scenario Output</p>
        <div className="mt-6 space-y-4">
          {[
            ['Baseline Revenue', money(result.grossRevenue)],
            ['Platform Fee', money(result.platformFee)],
            ['Total Cost', money(result.totalCost)],
            ['Projected Profit', money(result.projectedProfit)],
            ['BEP Sales Ratio', `${Math.max(0, result.bepSalesRatio * 100).toFixed(1)}%`]
          ].map(([label, value]) => (
            <div key={label} className="flex items-center justify-between rounded-2xl bg-white/[0.04] p-4">
              <span className="text-sm text-ivory/55">{label}</span>
              <span className="text-xl font-semibold text-ivory">{value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

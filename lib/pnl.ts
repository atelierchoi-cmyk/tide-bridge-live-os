import type { PnlInput, PnlResult } from '@/types';

export function calculatePnl(input: PnlInput): PnlResult {
  const grossRevenue = input.capacity * input.averageTicketPrice * input.salesRatio;
  const platformFee = grossRevenue * input.platformFeePct;
  const totalCost = input.artistGuarantee + input.localProductionCost + input.marketingCost + input.travelCost + platformFee;
  const projectedProfit = grossRevenue - totalCost;
  const fixedCostWithoutRevenueFee = input.artistGuarantee + input.localProductionCost + input.marketingCost + input.travelCost;
  const denominator = input.capacity * input.averageTicketPrice * Math.max(0.0001, 1 - input.platformFeePct);
  const bepSalesRatio = fixedCostWithoutRevenueFee / denominator;

  return {
    grossRevenue,
    platformFee,
    totalCost,
    projectedProfit,
    bepSalesRatio
  };
}

export function money(value: number, currency = 'USD') {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    maximumFractionDigits: 0
  }).format(value || 0);
}

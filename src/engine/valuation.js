export function calculateValuation(monthlyRevenue, state) {
  const { reputation, market, settings } = state;
  const annualRevenue = monthlyRevenue * 12;

  let growthMultiplier = 3;
  if (settings?.risk === "aggressive") growthMultiplier += 1;
  if (settings?.risk === "conservative") growthMultiplier -= 0.5;

  const reputationMultiplier = 0.8 + reputation / 80;
  const marketMultiplier = 1 - market.saturation * 0.5;

  const valuation =
    annualRevenue *
    growthMultiplier *
    reputationMultiplier *
    marketMultiplier;

  return Math.max(0, Math.round(valuation));
}


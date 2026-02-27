export function calculateEconomy(state) {
  const {
    cash,
    marketingInvestment,
    productQuality,
    market,
    reputation,
    founderEnergy,
    employees,
    settings,
    revenue,
  } = state;

  const { saturation, competition } = market;
  const reputationMultiplier = 0.5 + reputation / 100;
  const founderEnergyMultiplier = 0.3 + founderEnergy / 100;
  const saturationPenalty = 1 - Math.min(0.9, saturation);
  const competitionPenalty = 1 - competition * 0.5;

  // Base growth rate from investments
  let growthRate =
    (marketingInvestment * 0.02 + productQuality * 0.03) *
    saturationPenalty *
    reputationMultiplier *
    founderEnergyMultiplier *
    competitionPenalty;

  // Adjust by difficulty and risk profile
  const difficultyMultiplier = settings?.difficultyMultiplier || 1;
  if (settings?.risk === "conservative") {
    growthRate *= 0.8;
  } else if (settings?.risk === "aggressive") {
    growthRate *= 1.2;
  }

  growthRate /= difficultyMultiplier;

  // Revenue grows from previous month
  const baseRevenue = revenue || 8_000;
  const newRevenue = Math.max(
    0,
    baseRevenue + baseRevenue * (growthRate / 1000)
  );

  // Expenses: employees, base ops, marketing
  const employeeCost = employees * 10_000;
  const baseOps = 15_000;
  const marketingCost = marketingInvestment;

  let expenses = employeeCost + baseOps + marketingCost;

  // Founder burnout if expenses too high relative to revenue
  let founderEnergyChange = 0;
  if (expenses > newRevenue * 1.5) {
    founderEnergyChange -= 5;
  } else if (newRevenue > expenses * 1.2) {
    founderEnergyChange += 3;
  }

  // Slight energy drain each month
  founderEnergyChange -= 2;

  const newFounderEnergy = Math.max(
    0,
    Math.min(100, founderEnergy + founderEnergyChange)
  );

  // If founder energy is low, revenue is penalized
  let effectiveRevenue = newRevenue;
  if (newFounderEnergy < 30) {
    effectiveRevenue *= 0.75;
  }

  const burnRate = Math.max(0, expenses - effectiveRevenue);
  const newCash = cash + effectiveRevenue - expenses;

  // Reputation movement based on financial health
  let reputationChange = 0;
  if (effectiveRevenue > expenses) reputationChange += 1;
  if (burnRate > 0 && burnRate > cash * 0.05) reputationChange -= 1;

  const newReputation = Math.max(
    0,
    Math.min(100, reputation + reputationChange)
  );

  return {
    cash: newCash,
    revenue: effectiveRevenue,
    expenses,
    burnRate,
    founderEnergy: newFounderEnergy,
    reputation: newReputation,
  };
}


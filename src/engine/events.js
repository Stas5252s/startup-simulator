import { chance, weightedChance } from "../utils/probability.js";
import { getRandomInt } from "../utils/random.js";

export function getMonthlyEvent(state) {
  const { month, reputation, founderEnergy, market, valuation } = state;

  // No events on month 0
  if (month === 0) return null;

  const events = [];

  // Market crash
  events.push({
    id: "market_crash",
    active: chance(0.05),
    build: () => ({
      kind: "marketCrash",
      deltaRevenue: -state.revenue * 0.3,
      deltaReputation: -5,
      deltaEnergy: -3,
    }),
  });

  // Viral growth
  events.push({
    id: "viral_growth",
    active: chance(0.06 + reputation / 500),
    build: () => ({
      kind: "viralGrowth",
      deltaRevenue: state.revenue * 0.5 + 10_000,
      deltaReputation: +8,
      deltaEnergy: +2,
    }),
  });

  // Competitor enters
  events.push({
    id: "competitor",
    active: chance(0.08 + market.competition * 0.05),
    build: () => ({
      kind: "competitor",
      deltaRevenue: -state.revenue * 0.2,
      deltaReputation: -3,
    }),
  });

  // Investor offer
  events.push({
    id: "investor_offer",
    active:
      chance(0.03) ||
      (valuation > 15_000_000 && chance(0.1)) ||
      (valuation > 50_000_000 && chance(0.18)),
    build: () => {
      const cash = getRandomInt(200_000, 1_000_000);
      return {
        kind: "investorOffer",
        deltaReputation: +5,
        acquisitionOffer: {
          cash,
          type: "funding",
        },
      };
    },
  });

  // Acquisition offer when large
  events.push({
    id: "acquisition_offer",
    active: valuation > 30_000_000 && chance(0.08),
    build: () => {
      const multiplier = weightedChance([
        { weight: 3, value: 2 },
        { weight: 5, value: 3 },
        { weight: 2, value: 4 },
      ]);
      const cash = Math.round(valuation * multiplier);
      return {
        kind: "acquisitionOffer",
        deltaEnergy: +10,
        acquisitionOffer: {
          cash,
          type: "acquisition",
        },
      };
    },
  });

  // Founder burnout scare
  events.push({
    id: "burnout_scare",
    active: founderEnergy < 35 && chance(0.15),
    build: () => ({
      kind: "burnoutScare",
      deltaEnergy: +10,
      deltaReputation: -2,
    }),
  });

  const activeEvents = events.filter((e) => e.active);
  if (!activeEvents.length) return null;

  const chosen = activeEvents[getRandomInt(0, activeEvents.length - 1)];
  return chosen.build();
}


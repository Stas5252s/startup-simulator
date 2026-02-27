import { clamp } from "../utils/random.js";

export function updateMarket(market, state, settings) {
  let { saturation, competition } = market;

  const difficultyMultiplier = settings?.difficultyMultiplier || 1;

  // Market saturation grows as revenue grows
  const satDelta =
    (state.revenue / 1_000_000) * 0.05 * difficultyMultiplier +
    (state.settings?.risk === "aggressive" ? 0.01 : 0);

  saturation = clamp(saturation + satDelta, 0, 0.95);

  // Competition tends to slowly rise over time
  const compDrift = 0.005 * difficultyMultiplier;
  competition = clamp(competition + compDrift, 0, 1);

  return { saturation, competition };
}


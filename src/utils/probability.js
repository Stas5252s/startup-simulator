import { randomFloat, clamp } from "./random.js";

export function chance(probability) {
  return Math.random() < probability;
}

export function weightedChance(options) {
  const total = options.reduce((sum, o) => sum + o.weight, 0);
  const r = randomFloat(0, total);
  let acc = 0;
  for (const option of options) {
    acc += option.weight;
    if (r <= acc) return option.value;
  }
  return options[options.length - 1].value;
}

export function dynamicChance({ base, risk, energy, marketStress }) {
  let p = base;

  if (risk === "aggressive") p += 0.05;
  if (risk === "conservative") p -= 0.03;

  if (energy < 40) p -= 0.02;
  if (energy > 70) p += 0.02;

  p += marketStress * 0.05;

  return clamp(p, 0.01, 0.6);
}


export function getRandomInt(min, max) {
  const mn = Math.ceil(min);
  const mx = Math.floor(max);
  return Math.floor(Math.random() * (mx - mn + 1)) + mn;
}

export function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

export function randomFloat(min, max) {
  return Math.random() * (max - min) + min;
}


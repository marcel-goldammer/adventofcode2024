import { isSafeLevel } from './is-safe-level';

export function numberOfSafeLevels(levels: number[][]): number {
  let safeLevels = 0;
  for (let i = 0; i < levels.length; i++) {
    const level = levels[i];
    if (isSafeLevel(level)) {
      safeLevels++;
    }
  }
  return safeLevels;
}

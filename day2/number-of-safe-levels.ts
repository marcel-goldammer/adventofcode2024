import { between } from '../utils/between';

export function numberOfSafeLevels(levels: number[][]): number {
  let safeLevels = 0;
  for (let i = 0; i < levels.length; i++) {
    const level = levels[i];
    const allIncreasing = level.every(
      (value, index, array) => index === 0 || value >= array[index - 1]
    );
    const allDecreasing = level.every(
      (value, index, array) => index === 0 || value <= array[index - 1]
    );
    const minMaxSteps = level.every(
      (value, index, array) =>
        index === 0 || between(Math.abs(value - array[index - 1]), 1, 3)
    );
    if ((allIncreasing || allDecreasing) && minMaxSteps) {
      safeLevels++;
    }
  }
  return safeLevels;
}

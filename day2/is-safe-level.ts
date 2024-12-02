import { between } from '../utils/between';

export function isSafeLevel(level: number[]): boolean {
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
  return (allIncreasing || allDecreasing) && minMaxSteps;
}

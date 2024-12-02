import { isSafeLevel } from './is-safe-level';

export function numberOfSafeLevelsWithDampener(levels: number[][]): number {
  return levels
    .map((level) => {
      for (let i = 0; i < level.length; i++) {
        const subLevel = [...level];
        subLevel.splice(i, 1);
        if (isSafeLevel(subLevel)) {
          return true;
        }
      }
      return false;
    })
    .reduce((sum, curr) => (curr ? sum + 1 : sum), 0);
}

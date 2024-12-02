import { getDirname } from '../utils/get-dirname';
import { readFile } from '../utils/read-file';

const leftList: number[] = [];
const rightList: number[] = [];
const distances: number[] = [];

readFile(getDirname(import.meta.url), 'input').forEach((line) => {
  const split = line.split('   ');
  leftList.push(parseInt(split[0]));
  rightList.push(parseInt(split[1]));
});

leftList.sort();
rightList.sort();

export function totalDistance(): number {
  for (let i = 0; i < leftList.length; i++) {
    distances.push(Math.abs(leftList[i] - rightList[i]));
  }

  return distances.reduce((prev, curr) => prev + curr, 0);
}

export function similarityScore(): number {
  const similarities: number[] = [];
  for (let i = 0; i < leftList.length; i++) {
    const currentValue = leftList[i];
    const currentScore = rightList.reduce(
      (score, curr) => score + (currentValue === curr ? 1 : 0),
      0
    );
    similarities.push(currentValue * currentScore);
  }
  return similarities.reduce((prev, curr) => prev + curr, 0);
}

console.log(`Answer of Day 1 - Part 1: ${totalDistance()}`);
console.log(`Answer of Day 1 - Part 2: ${similarityScore()}`);

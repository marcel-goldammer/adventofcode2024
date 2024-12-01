import * as fs from 'fs';
import * as path from 'path';
import { getDirname } from '../utils/get-dirname';

export function totalDistance(): number {
  const filePath = path.join(getDirname(import.meta.url), 'input');
  const leftList: number[] = [];
  const rightList: number[] = [];
  const distances: number[] = [];

  fs.readFileSync(filePath, 'utf-8')
    .split('\n')
    .forEach((line) => {
      const split = line.split('   ');
      leftList.push(parseInt(split[0]));
      rightList.push(parseInt(split[1]));
    });

  leftList.sort();
  rightList.sort();

  for (let i = 0; i < leftList.length; i++) {
    distances.push(Math.abs(leftList[i] - rightList[i]));
  }

  return distances.reduce((prev, curr) => prev + curr, 0);
}

console.log(`Answer of Day 1: ${totalDistance()}`);

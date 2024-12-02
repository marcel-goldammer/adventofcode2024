import { getDirname } from '../utils/get-dirname';
import { readFile } from '../utils/read-file';
import { numberOfSafeLevels } from './number-of-safe-levels';

const levels: number[][] = [];

readFile(getDirname(import.meta.url), 'input').forEach((line) => {
  const split = line.split(' ');
  const level = split.map((value) => parseInt(value));
  levels.push(level);
});

console.log(`Answer of Day 2 - Part 1: ${numberOfSafeLevels(levels)}`);

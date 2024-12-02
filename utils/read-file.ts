import * as fs from 'fs';
import path from 'path';

export function readFile(directory: string, filename: string): string[] {
  const filePath = path.join(directory, filename);
  return fs.readFileSync(filePath, 'utf-8').split('\n');
}

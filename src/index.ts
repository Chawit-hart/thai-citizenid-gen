import { generateMockPerson, GenerateOptions } from './fakerData';
import { exportToJson, exportToCsv } from './exporter';

export function generateThaiID(options?: Partial<GenerateOptions>) {
  return generateMockPerson(options);
}

export function generatePeople(count: number, options?: Partial<GenerateOptions>) {
  return Array.from({ length: count }, (_, i) =>
    generateMockPerson({
      ...options,
      seed: options?.seed !== undefined ? options.seed + i : undefined,
    })
  );
}

export function exportPeople(count: number, options?: Partial<GenerateOptions>) {
  const people = generatePeople(count, options);

  const fs = require('fs');
  fs.mkdirSync('output', { recursive: true });

  exportToJson(people, 'output/people.json');
  exportToCsv(people, 'output/people.csv');
}

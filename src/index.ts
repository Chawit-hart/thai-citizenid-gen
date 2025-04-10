import { generateMockPerson } from './fakerData';
import { exportToJson, exportToCsv } from './exporter';

export function generatePeople(count: number) {
  return Array.from({ length: count }, () => generateMockPerson());
}

export function exportPeople(count: number) {
  const people = generatePeople(count);

  const fs = require('fs');
  fs.mkdirSync('output', { recursive: true });

  exportToJson(people, 'output/people.json');
  exportToCsv(people, 'output/people.csv');

  console.log(`✅ Exported ${count} people to output/people.json and output/people.csv`);
}

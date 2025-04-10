import * as fs from 'fs';
import { generateThaiID } from './idGenerator';
import { getRandomThaiName } from './fakerData';
import { exportToJson, exportToCsv } from './exporter';

const people = Array.from({ length: 10 }, () => {
  const { firstName, lastName } = getRandomThaiName();
  return {
    id: generateThaiID(),
    firstName,
    lastName
  };
});

fs.mkdirSync('output', { recursive: true });

exportToJson(people, 'output/people.json');
exportToCsv(people, 'output/people.csv');

console.log("✅ Exported to output/people.json and output/people.csv");

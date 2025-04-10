import * as fs from 'fs';
import { createObjectCsvWriter } from 'csv-writer';

export function exportToJson(data: any[], filePath: string) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
  console.log(`✅ Exported JSON to ${filePath}`);
}

export async function exportToCsv(data: any[], filePath: string) {
  const headers = Object.keys(data[0]).map((key) => ({ id: key, title: key }));

  const csvWriter = createObjectCsvWriter({
    path: filePath,
    header: headers,
  });

  await csvWriter.writeRecords(data);
  console.log(`✅ Exported CSV to ${filePath}`);
}

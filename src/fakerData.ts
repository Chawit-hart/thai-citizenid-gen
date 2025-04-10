import names from './data/thaiNames.json';
import surnames from './data/thaiSurnames.json';

export function getRandomThaiName() {
  const firstName = names[Math.floor(Math.random() * names.length)];
  const lastName = surnames[Math.floor(Math.random() * surnames.length)];
  return { firstName, lastName };
}

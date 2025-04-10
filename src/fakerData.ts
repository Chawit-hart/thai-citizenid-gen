import { faker } from '@faker-js/faker';
import religions from './data/thaiReligions.json';
import provincesData from './data/thaiProvinces.json';

function generateBirthDate(): string {
  return faker.date.birthdate({ min: 18, max: 75, mode: 'age' }).toISOString().split('T')[0];
}

function calculateAge(birthDate: string): number {
  const birth = new Date(birthDate);
  return Math.floor((new Date().getTime() - birth.getTime()) / (1000 * 3600 * 24 * 365));
}

function generateThaiID(): string {
  const idNumber = [...Array(12)].map(() => Math.floor(Math.random() * 10));
  const checksum = idNumber.reduce((sum, num, index) => sum + (13 - index) * num, 0) % 11;
  idNumber.push((11 - checksum) % 10);
  return idNumber.join('');
}

export function generateMockPerson() {
  const gender = faker.helpers.arrayElement(['ชาย', 'หญิง']);
  const firstName = faker.person.firstName(gender === 'ชาย' ? 'male' : 'female');
  const lastName = faker.person.lastName();
  const birthDate = generateBirthDate();
  const age = calculateAge(birthDate);
  const religion = faker.helpers.arrayElement(religions);

  const randomProvince = faker.helpers.arrayElement(provincesData);
  const province = randomProvince.province;
  const randomDistrict = faker.helpers.arrayElement(randomProvince.districts);
  const randomSubdistrict = faker.helpers.arrayElement(randomDistrict.subdistricts);
  const postcode = randomSubdistrict.postcode;

  const issuedDate = faker.date.past({ years: 10 });
  const expiredDate = new Date(issuedDate.getTime());
  expiredDate.setFullYear(expiredDate.getFullYear() + 10);

  let address = `123 หมู่ 4 ต.${randomSubdistrict.subdistrict} อ.${randomDistrict.district} จ.${province} ${postcode}`;
  if (province === 'กรุงเทพมหานคร') {
    address = `123 หมู่ 4 แขวง${randomSubdistrict.subdistrict} เขต${randomDistrict.district} จ.${province} ${postcode}`;
  }

  return {
    id: generateThaiID(),
    firstName,
    lastName,
    gender,
    birthDate,
    age,
    religion,
    laserCode: `JT${faker.number.int({ min: 1000000, max: 9999999 })}-${faker.number.int({ min: 100, max: 999 })}`,
    issuedDate: issuedDate.toISOString().split('T')[0],
    expiredDate: expiredDate.toISOString().split('T')[0],
    englishName: `${firstName} ${lastName}`,
    province,
    district: randomDistrict.district,
    subdistrict: randomSubdistrict.subdistrict,
    postcode,
    address
  };
}

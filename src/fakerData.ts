import names from './data/thaiNames.json';
import surnames from './data/thaiSurnames.json';
import religions from './data/thaiReligions.json';
import provincesData from './data/thaiProvinces.json';

export function getRandomThaiName() {
  const firstName = names[Math.floor(Math.random() * names.length)];
  const lastName = surnames[Math.floor(Math.random() * surnames.length)];
  return { firstName, lastName };
}

function generateBirthDate(): string {
  const startDate = new Date(1950, 0, 1);
  const endDate = new Date(2003, 11, 31);
  const randomDate = new Date(startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime()));
  return randomDate.toISOString().split('T')[0];
}

function calculateAge(birthDate: string): number {
  const birth = new Date(birthDate);
  return Math.floor((new Date().getTime() - birth.getTime()) / (1000 * 3600 * 24 * 365));
}

function generateThaiID(): string {
  const idNumber = [...Array(12)].map(() => Math.floor(Math.random() * 10));
  const checksum = idNumber.reduce((sum, num, index) => sum + (index + 1) * num, 0) % 11;
  idNumber.push((11 - checksum) % 10);
  return idNumber.join('');
}

export function generateMockPerson() {
  const { firstName, lastName } = getRandomThaiName();
  const gender = firstName === "สมชาย" || firstName === "วีระ" ? "ชาย" : "หญิง";
  const birthDate = generateBirthDate();
  const age = calculateAge(birthDate);
  const religion = religions[Math.floor(Math.random() * religions.length)];
  const randomProvince = provincesData[Math.floor(Math.random() * provincesData.length)];
  const province = randomProvince.province;
  const randomDistrict = randomProvince.districts[Math.floor(Math.random() * randomProvince.districts.length)];
  const randomSubdistrict = randomDistrict.subdistricts[Math.floor(Math.random() * randomDistrict.subdistricts.length)];
  const postcode = randomSubdistrict.postcode;

  const issuedDate = new Date(Date.now() - Math.floor(Math.random() * 3650 * 24 * 3600 * 1000));
  const expiredDate = new Date(issuedDate.getTime() + 3650 * 24 * 3600 * 1000);

  let address = `123 หมู่ 4 ต.${randomSubdistrict.subdistrict} อ.${randomDistrict.district} จ.${province} ${postcode}`;

  if (province === "กรุงเทพมหานคร") {
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
    laserCode: `JT${Math.floor(Math.random() * 10000000)}-${Math.floor(Math.random() * 1000)}`,
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

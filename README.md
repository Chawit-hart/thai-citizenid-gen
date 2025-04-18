# Thai Citizen ID Generator

[![npm version](https://img.shields.io/npm/v/thai-citizenid-gen)](https://www.npmjs.com/package/thai-citizenid-gen)
[![license](https://img.shields.io/npm/l/thai-citizenid-gen)](https://github.com/Chawit-hart/thai-citizenid-gen/blob/main/LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/Chawit-hart/thai-citizenid-gen?style=social)](https://github.com/Chawit-hart/thai-citizenid-gen)
[![Issues](https://img.shields.io/github/issues/Chawit-hart/thai-citizenid-gen)](https://github.com/Chawit-hart/thai-citizenid-gen/issues)

Generate valid Thai national ID numbers and mock Thai person data — perfect for testing registration systems and mock user data.



## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Reference](#api-reference)
- [Sample Output](#sample-output)
- [Use Cases](#use-cases)
- [Contributing](#contributing)
- [License](#license)


## Features

- ✅ Generate valid 13-digit Thai citizen ID numbers
- ✅ Random or customizable Thai name, gender, religion, birth year, etc.
- ✅ Export as objects (for use in JSON, CSV, etc.)
- ✅ Deterministic generation with seed
- ✅ Tiny and zero-dependency core


## Installation

```bash
npm install thai-citizenid-gen
```

## Usage

### Basic Usage: Generate People Randomly

```ts
import { generatePeople } from 'thai-citizenid-gen';

// Generate 10 people with random name, gender, birthdate, religion, etc.
const people = generatePeople(10);
console.log(people);
```

### Advanced Usage: Customize the Generated Data
You can control the result by passing an options object:

```ts
interface GenerateOptions {
  gender: 'ชาย' | 'หญิง';      // Force male or female
  bornYear: number;            // Specify a fixed birth year
  religion: string;            // Specify a religion (e.g., 'พุทธ', 'คริสต์')
  seed: number;                // Use for consistent, repeatable output
}
```

### Example: Generate 5 people with fixed attributes

```ts
import { generatePeople } from 'thai-citizenid-gen';

const people = generatePeople(5, {
  gender: 'หญิง',
  bornYear: 1990,
  religion: 'พุทธ',
  seed: 42,
});

console.log(people);
```

### Auto-incremented seed

```ts
// If seed = 42
// Person 1 -> seed 42
// Person 2 -> seed 43
// ...
```
### Export Generated Data to Files

Exports to both .json and .csv in the output/ directory.
```ts
import { exportPeople } from 'thai-citizenid-gen';

exportPeople(10, {
  gender: 'ชาย',
  bornYear: 1995,
  religion: 'พุทธ',
  seed: 1000,
});
```
Output files:

```bash
output/people.json
output/people.csv
```

### Generate a Single Person

```ts
import { generateThaiID, generateMockPerson } from 'thai-citizenid-gen';

const person = generateMockPerson({
  gender: 'ชาย',
  seed: 99,
});
console.log(person);

const id = generateThaiID(); // just the 13-digit ID
console.log('Thai ID:', id);
```

## API Reference

### `generateMockPerson(options?: Partial<GenerateOptions>): Person`

Generates a single mock Thai person object.

**Options (optional):**
```ts
interface GenerateOptions {
  gender: 'ชาย' | 'หญิง';
  bornYear: number;
  religion: string;
  seed: number;
}
```

### `generatePeople(count: number, options?: Partial<GenerateOptions>): Person[]`
Generate multiple people.

- `count`: number of people to generate
- `options`: same as above
- Each person will auto-increment the seed (if provided)

**Example:**

```ts
generatePeople(5, { gender: 'หญิง', seed: 100 });
```

### `exportPeople(count: number, options?: Partial<GenerateOptions>): void`
Generate and export people data to:

- `output/people.json`
- `output/people.csv`

**Example:**
```ts
exportPeople(10, { bornYear: 1995, religion: 'พุทธ' });
```

### `generateThaiID(): string`
Generates a valid Thai citizen ID (13 digits) using checksum logic.
```ts
const id = generateThaiID();
```

### `Person` Object Structure

```ts
interface Person {
  id: string;
  firstName: string;
  lastName: string;
  gender: 'ชาย' | 'หญิง';
  birthDate: string;
  age: number;
  religion: string;
  laserCode: string;
  issuedDate: string;
  expiredDate: string;
  englishName: string;
  province: string;
  district: string;
  subdistrict: string;
  postcode: string;
  address: string;
}
```
### Sample output:

#### JSON
```json
[
  {
    "id": "2657827304927",
    "firstName": "สมหญิง",
    "lastName": "บุญมา",
    "gender": "หญิง",
    "birthDate": "1967-10-08",
    "age": 57,
    "religion": "พุทธ",
    "laserCode": "JT5802609-356",
    "issuedDate": "2024-05-20",
    "expiredDate": "2034-05-18",
    "englishName": "สมหญิง บุญมา",
    "province": "เชียงใหม่",
    "district": "เมืองเชียงใหม่",
    "subdistrict": "แขวงเมืองเชียงใหม่",
    "postcode": "50200",
    "address": "123 หมู่ 4 ต.แขวงเมืองเชียงใหม่ อ.เมืองเชียงใหม่ จ.เชียงใหม่ 50200"
  },
]
```

#### CSV
```csv
id,firstName,lastName,gender,birthDate,age,religion,laserCode,issuedDate,expiredDate,englishName,province,district,subdistrict,postcode,address
2657827304927,สมหญิง,บุญมา,หญิง,1967-10-08,57,พุทธ,JT5802609-356,2024-05-20,2034-05-18,สมหญิง บุญมา,เชียงใหม่,เมืองเชียงใหม่,แขวงเมืองเชียงใหม่,50200,"123 หมู่ 4 ต.แขวงเมืองเชียงใหม่ อ.เมืองเชียงใหม่ จ.เชียงใหม่ 50200"
```

## Use Cases

* Testing registration forms and e-KYC systems.

* Generating fake user data for development or staging environments.

* Populating unit tests and CI/CD pipelines with realistic mock data.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request if you have improvements or bug fixes.

## License

MIT
Feel free to use, modify, and distribute for personal or commercial use.
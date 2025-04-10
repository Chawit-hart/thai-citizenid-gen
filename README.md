# Thai Citizen ID Generator

Generate valid Thai national ID numbers and mock Thai names — perfect for testing registration systems and mock user data.

## Features

- ✅ Generate valid 13-digit Thai citizen ID numbers
- ✅ Random Thai first & last names (50+ names)
- ✅ Export as objects (can be used for JSON, CSV, etc.)
- ✅ Tiny and zero-dependency core


## Installation

```bash
npm install thai-citizenid-gen
```

## Usage

### Generate Data Without Export :

```ts
import { generatePeople } from 'thai-citizenid-gen';

const people = generatePeople(10);
console.log(people);
```

### Generate Data and Export as JSON/CSV : 
```ts
import { exportPeople } from 'thai-citizenid-gen';

const peopleCount = 10;
exportPeople(peopleCount);
```
## API Reference

```ts
getRandomThaiName()
```
Returns a random first and last name from the provided Thai names.

```ts
generateMockPerson()
```
### Generates a complete mock person data object that includes:

`id`

`firstName`, `lastName`, `gender`

`birthDate`, `age`

`religion`

`laserCode`

`issuedDate`, `expiredDate`

`englishName`

`province`, `district`, `subdistrict`, `postcode`

`address` (formatted differently for Bangkok)

```ts
generatePeople(count: number)
```
Returns an array of mock person objects according to the specified count.

```ts
exportPeople(count: number)
```
Generates mock person data and exports the data to `output/people.json` and `output/people.csv`.

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
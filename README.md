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

```ts
import { generateThaiID, getRandomThaiName } from 'thai-citizenid-gen';

const id = generateThaiID();
const { firstName, lastName } = getRandomThaiName();

console.log(`${firstName} ${lastName} (${id})`);
```
Sample output:

```ts
{
  id: "1234567890123",
  firstName: "สมชาย",
  lastName: "ใจดี"
}
```

## Use Cases

* Test registration forms or national ID input fields

* Generate fake user data for dev/staging environments

* Use in automated testing or CI/CD pipelines

* Mock data for systems involving Thai citizen information

## License

MIT
Feel free to use, modify, and distribute for personal or commercial use.
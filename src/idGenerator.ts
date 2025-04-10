export function generateThaiID(): string {
  const digits = Array.from({ length: 12 }, () => Math.floor(Math.random() * 10));
  const sum = digits.reduce((acc, digit, i) => acc + digit * (13 - i), 0);
  const checkDigit = (11 - (sum % 11)) % 10;
  return digits.join('') + checkDigit;
}

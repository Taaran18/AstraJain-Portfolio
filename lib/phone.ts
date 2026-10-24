import {
  isValidPhoneNumber,
  parsePhoneNumberFromString,
  type CountryCode,
} from "libphonenumber-js/mobile";
import { getCountry, type Country } from "@/data/countries";

export function onlyDigits(value: string) {
  return value.replace(/\D/g, "");
}

export function digitsLabel(country: Country) {
  return country.min === country.max
    ? `${country.max}-digit`
    : `${country.min} to ${country.max}-digit`;
}

export function phoneProblem(national: string, iso: string): string | null {
  const country = getCountry(iso);
  const digits = onlyDigits(national);
  if (!digits) return "Enter your mobile number";
  if (digits.length < country.min || digits.length > country.max) {
    return `Enter a ${digitsLabel(country)} mobile number for ${country.name}`;
  }
  if (!isValidPhoneNumber(digits, country.iso as CountryCode)) {
    return `This does not look like a valid ${country.name} mobile number`;
  }
  return null;
}

export function formatPhone(national: string, iso: string) {
  const country = getCountry(iso);
  const parsed = parsePhoneNumberFromString(onlyDigits(national), country.iso as CountryCode);
  return parsed ? parsed.formatInternational() : `+${country.dial} ${onlyDigits(national)}`;
}

const commonDomains = [
  "gmail.com",
  "yahoo.com",
  "yahoo.co.in",
  "hotmail.com",
  "outlook.com",
  "icloud.com",
  "rediffmail.com",
  "live.com",
  "protonmail.com",
];

function distance(a: string, b: string) {
  const dp = Array.from({ length: a.length + 1 }, (_, i) => [i, ...Array(b.length).fill(0)]);
  for (let j = 1; j <= b.length; j++) dp[0][j] = j;
  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      dp[i][j] = Math.min(
        dp[i - 1][j] + 1,
        dp[i][j - 1] + 1,
        dp[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1),
      );
    }
  }
  return dp[a.length][b.length];
}

export function emailSuggestion(email: string) {
  const at = email.lastIndexOf("@");
  if (at < 1) return null;
  const domain = email.slice(at + 1).toLowerCase();
  if (!domain || commonDomains.includes(domain)) return null;
  const match = commonDomains.find((d) => distance(domain, d) <= 2);
  return match ? `${email.slice(0, at)}@${match}` : null;
}

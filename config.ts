import { generateRandomEmail } from "./src/utilities/utils";

let sharedEmail: string | null = null;

export function getEmail(): string {
    if (!sharedEmail) {
      sharedEmail = generateRandomEmail();
    }
    return sharedEmail;
  }

export const BASE_URL = 'https://magento.softwaretestingboard.com';

import * as fs from 'fs';
import * as path from 'path';

// Generate random email
export function generateRandomEmail(): string {
    const timestamp = new Date().getTime();
    return `testuser${timestamp}@example.com`;
}




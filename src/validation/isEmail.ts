/**
 * Validates if a string is a valid email address.
 * @param {string} email - The email address to validate.
 * @returns {boolean} True if the email is valid, false otherwise.
 * @example
 * console.log(isEmail('user@example.com')); // true
 * console.log(isEmail('invalid.email')); // false
 * console.log(isEmail('user@domain')); // false
 */
export function isEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
} 
/**
 * Checks if a string contains a substring.
 * @param {string} string - The string to search in.
 * @param {string} substring - The substring to search for.
 * @returns {boolean} True if the substring is found, false otherwise.
 * @example
 * const result = contains('Hello, world!', 'world'); // true
 * const result2 = contains('Hello, world!', 'universe'); // false
 */
export function contains(string: string, substring: string) {
  return string.indexOf(substring) !== -1;
}
/**
 * Reverses the characters in the string.
 * @param {string} string - The string to reverse.
 * @returns {string} A new string with the characters in reverse order.
 * @example
 * const reversed = reverse('hello'); // 'olleh'
 */
export function reverse(string: string): string {
  return string.split('').reverse().join('');
}
import { gcd } from './gcd';

/**
 * Calculates the least common multiple (LCM) of two numbers.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The least common multiple of a and b.
 * @example
 * const result = lcm(4, 6); // 12
 */
export function lcm(a: number, b: number): number {
  if (a === 0 && b === 0) return 0;
  return Math.abs(a * b) / gcd(a, b);
}
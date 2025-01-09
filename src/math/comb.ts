import { factorial } from "./factorial";

/**
 * Calculates the number of combinations (n choose k).
 * @param {number} n - The total number of items.
 * @param {number} k - The number of items to choose.
 * @returns The number of possible combinations.
 * @example
 * ```js
 * comb(5, 3); // 10
 * ```
 */
export function comb(n: number, k: number) {
  if (k > n) return 0;
  return factorial(n) / (factorial(k) * factorial(n-k));
}
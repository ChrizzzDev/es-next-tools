import { factorial } from "./factorial";

/**
 * Calculates the number of permutations (nPk).
 * @param {number} n - The total number of items.
 * @param {number} [k] - The number of items to arrange.
 * @returns The number of possible permutations.
 * @example
 * perm(3, 2); // 6
*/
export function perm(n: number, k?: number) {
  if (k === undefined || k > n) return 0;
  return factorial(n) / factorial(n-k);
}
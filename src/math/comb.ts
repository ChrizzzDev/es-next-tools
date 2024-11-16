import { factorial } from "./factorial";

export function comb(n: number, k: number) {
  if (k > n) return 0;
  return factorial(n) / (factorial(k) * factorial(n-k));
}
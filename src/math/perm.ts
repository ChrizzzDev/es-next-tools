import { factorial } from "./factorial";

export function perm(n: number, k?: number) {
  if (k === undefined || k > n) return 0;
  return factorial(n) / factorial(n-k);
}
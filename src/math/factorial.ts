/**
 * Calculates the factorial of a number.
 * @param {number} n - The number to calculate the factorial of.
 * @returns The factorial of the given number, or NaN if the number is negative.
 * @example
 * factorial(5); // 120
 */
export function factorial(n: number) {
  if (n < 0) return NaN;
  let res = 1;
  for (let i = 2; i <= n; i++) {
    res *= i;
  }

  return res;
}
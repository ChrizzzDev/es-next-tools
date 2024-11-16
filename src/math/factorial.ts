export function factorial(n: number) {
  if (n < 0) return NaN;
  let res = 1;
  for (let i = 2; i <= n; i++) {
    res *= i;
  }

  return res;
}
export function mean(...numbers: number[]): number {
  return numbers.reduce((acc, num) => acc + num, 0) / numbers.length;
}
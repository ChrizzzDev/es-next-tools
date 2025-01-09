/**
 * Calculates the median of a list of numbers.
 * @param {...number[]} numbers - The numbers to calculate the median of.
 * @returns The median of the numbers.
 * @example
 * median(1, 2, 3, 4, 5); // 3
 */
export function median(...numbers: number[]): number {
  let sorted: number[] = [];
  if (numbers.length <= 2) sorted = numbers;
  else sorted = numbers.sort((a, b) => a - b);

  const mid = ~~(sorted.length / 2);
  return sorted.length % 2 !== 0
  ? sorted[mid] 
  : (sorted[mid - 1] + sorted[mid]) / 2;
}
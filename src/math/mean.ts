/**
 * Calculates the mean (average) of a list of numbers.
 * @param {...number[]} numbers - The numbers to calculate of.
 * @returns The mean of numbers
 * @example
 * mean(1, 2, 3, 4, 5); // 3
 */
export function mean(...numbers: number[]): number {
  return numbers.reduce((acc, num) => acc + num, 0) / numbers.length;
}
/**
 * Generates a range of numbers from start to end (inclusive).
 * @param {number} start - The starting number of the range.
 * @param {number} end - The ending number of the range. 
 * @returns An array of numbers from start to end.
 * @example
 * range(1, 5);  // [1, 2, 3, 4, 5]
*/
export function range(start: number, end: number): number[] {
  if (start === end) return [start];
  return Array.from({ length: end - start + 1}, (_, i) => i);
}
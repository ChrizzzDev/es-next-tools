/**
 * Divides an array into smaller chunks of a specified size.
 * 
 * @param {T[]} array - The array to be divided into chunks.
 * @param {number} size - The size of each chunk.
 * @returns {T[][]} An array of arrays, where each inner array is a chunk of the original array.
 * 
 * @example
 * chunk([1, 2, 3, 4, 5], 2) // [[1, 2], [3, 4], [5]]
 * chunk(['a', 'b', 'c', 'd'], 3) // [['a', 'b', 'c'], ['d']]
 */
export function chunk<T>(array: T[], size: number): T[][] {
  const result: T[][] = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
}
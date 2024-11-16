/**
 * Returns a new array with duplicate elements removed.
 * @param {T[]} array - The array to remove duplicates from.
 * @returns {T[]} A new array containing only unique elements.
 * @template T
 * @example
 * const arr = [1, 2, 2, 3, 4, 4, 5];
 * const uniqueArr = unique(arr); // [1, 2, 3, 4, 5]
 */
export function unique<T>(array: T[]): T[] {
  return Array.from(new Set(array));
};
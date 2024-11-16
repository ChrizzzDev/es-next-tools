/**
 * Combines two arrays into an array of pairs.
 * @param {T[]} array - The first array.
 * @param {U[]} otherArray - The second array to zip with the first array.
 * @returns {[T, U][]} An array of pairs combining elements from both arrays.
 * @template T, U
 * @example
 * const arr1 = [1, 2, 3];
 * const arr2 = ['a', 'b', 'c'];
 * const zipped = zip(arr1, arr2); // [[1, 'a'], [2, 'b'], [3, 'c']]
 */
export function zip<T, U>(array: T[], otherArray: U[]): [T, U][] {
  return array.map((item, index) => [item, otherArray[index]]);
};
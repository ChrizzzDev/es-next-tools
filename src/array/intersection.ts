/**
 * Returns an array of elements that are present in both input arrays.
 * @param {T[]} array1 - The first array.
 * @param {T[]} array2 - The second array.
 * @returns {T[]} An array containing elements present in both input arrays.
 * @template T
 * @example
 * const arr1 = [1, 2, 3, 4, 5];
 * const arr2 = [3, 4, 5, 6, 7];
 * const result = intersection(arr1, arr2); // [3, 4, 5]
 */
export function intersection<T>(array1: T[], array2: T[]): T[] {
  const result: T[] = [];
  const setB = new Set(array2);
  for (let i = 0; i < array1.length; i++) {
    let z = array1[i]
    if (setB.has(z)) result.push(z);
  };

  return result;
}
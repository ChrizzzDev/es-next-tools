/**
 * Filters an object based on a predicate function.
 * @param {T} object - The object to filter.
 * @param {Function} predicate - The function to test each entry of the object.
 * @returns {Partial<Pick<T, K>>} A new object with entries that passed the test.
 * @template T, K
 * @example
 * const obj = { a: 1, b: 2, c: 3, d: 4 };
 * const filtered = filter(obj, ([key, value]) => value % 2 === 0);
 * // { b: 2, d: 4 }
 */
export function filter<T extends Record<string, any>, K extends keyof T>(
  object: T,
  predicate: (entry: [key: K, value: T[K]]) => boolean
): Partial<Pick<T, K>> {
  const result: Partial<T> = {};

  for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
      const value = object[key];
      if (predicate([key as unknown as K, value as unknown as T[K]])) {
        result[key] = value;
      }
    }
  };

  return result;
}
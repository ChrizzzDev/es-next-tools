/**
 * Filters an object based on a predicate function.
 * @param {T} object - The object to filter.
 * @param {Function} predicate - The function to test each entry of the object.
 * @returns A new object with entries that passed the test.
 * @example
 * const obj = { a: 1, b: 2, c: 3, d: 4 };
 * const filtered = filter(obj, ([key, value]) => value % 2 === 0);
 * // { b: 2, d: 4 }
 */
export function filter<T extends Record<string, any>>(
  object: T,
  predicate: (entry: [key: keyof T, value: T[keyof T]]) => boolean
): Partial<T> {
  const result: Partial<T> = {};

  for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
      const value = object[key];
      if (predicate([key, value])) {
        result[key] = value;
      }
    }
  };

  return result;
}
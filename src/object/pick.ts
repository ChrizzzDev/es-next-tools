/**
 * Creates an object composed of the picked object properties.
 * @param {T} object - The source object.
 * @param {K[] | ((key: string, value: any) => boolean)} keysOrPredicate - An array of property names to pick or a predicate function.
 * @returns {Partial<T>} A new object with the picked properties.
 * @template T, K
 * @example
 * const obj = { a: 1, b: 2, c: 3, d: 4 };
 * const picked1 = pick(obj, ['a', 'c']); // { a: 1, c: 3 }
 * const picked2 = pick(obj, (key, value) => value % 2 === 0); // { b: 2, d: 4 }
 */
export function pick<T extends Record<string, any>, K extends keyof T>(
  object: T, 
  keysOrPredicate: K[] | ((key: string, value: any) => boolean)
) {
  const result = {} as Record<string, any>;

  if (Array.isArray(keysOrPredicate)) {
    for (const key of keysOrPredicate) {
      if (key in object) {
        result[key as any] = object[key];
      }
    }
  } else if (typeof keysOrPredicate === 'function') {
    for (const key of Object.keys(object)) {
      const value = object[key];
      if (keysOrPredicate(key, value)) {
        result[key as any] = value;
      }
    }
  }

  return result;
}
/**
 * Creates an object composed of the picked object properties.
 * @param {T} object - The source object.
 * @param {K[] | ((key: string, value: T[K]) => boolean)} keysOrPredicate - An array of property names to pick or a predicate function.
 * @returns A new object with the picked properties.
 * @example
 * const obj = { a: 1, b: 2, c: 3, d: 4 };
 * const picked1 = pick(obj, ['a', 'c']); // { a: 1, c: 3 }
 * const picked2 = pick(obj, (key, value) => value % 2 === 0); // { b: 2, d: 4 }
 */
export function pick<T extends Record<string, any>, K extends keyof T>(
  object: T, 
  keysOrPredicate: K[]
): Omit<T, K>;

export function pick<T extends Record<string, any>, K extends keyof T>(
  object: T, 
  keysOrPredicate: ((key: string, value: T[K]) => boolean)
): Partial<T>;

export function pick<T extends Record<string, any>, K extends keyof T>(
  object: T, 
  keysOrPredicate: K[] | ((key: string, value: T[K]) => boolean)
) {
  const result = {} as Record<string, any>;

  if (Array.isArray(keysOrPredicate)) {
    for (const key of keysOrPredicate) {
      if (key in object) {
        result[key as string] = object[key];
      }
    }
  } else if (typeof keysOrPredicate === 'function') {
    for (const key of Object.keys(object)) {
      const value = object[key];
      if (keysOrPredicate(key, value)) {
        result[key] = value;
      }
    }
  }

  return result;
}
/**
 * Creates a new object with certain properties omitted.
 * @param {T} object - The source object.
 * @param {K[] | ((key: string, value: T[K]) => boolean)} keysOrPredicate - An array of keys to omit or a predicate function.
 * @returns A new object with the specified keys omitted.
 * @example
 * const obj = { a: 1, b: 2, c: 3, d: 4 };
 * const result1 = omit(obj, ['b', 'd']);
 * // { a: 1, c: 3 }
 * const result2 = omit(obj, (key, value) => value > 2);
 * // { a: 1, b: 2 }
 */
export function omit<T extends Record<string, any>, K extends keyof T>(
  object: T,
  keysOrPredicate: K[]
): Omit<T, K>;

export function omit<T extends Record<string, any>, K extends keyof T>(
  object: T,
  keysOrPredicate: ((key: string, value: T[K]) => boolean)
): Partial<T>;

export function omit<T extends Record<string, any>, K extends keyof T>(
  object: T,
  keysOrPredicate: K[] | ((key: string, value: T[K]) => boolean)
): Partial<T> {
  const shouldOmit = Array.isArray(keysOrPredicate)
    ? (key: string) => keysOrPredicate.includes(key as K)
    : (key: string) => keysOrPredicate(key, object[key]);

  return Object.keys(object).reduce((acc, key) => {
    if (!shouldOmit(key)) {
      acc[key as keyof T] = object[key as K];
    }
    return acc;
  }, {} as Partial<T>);
}
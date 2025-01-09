export type FlattenedObject<T> = {
  [K in keyof T]?: T[K] extends object
    ? FlattenedObject<T[K]>
    : T[K];
} & { [key: string]: any };

/**
 * Flattens a nested object structure.
 * @param {T} obj - The object to flatten.
 * @param {string} [prefix=''] - The prefix to use for flattened keys.
 * @returns A flattened version of the input object.
 * @example
 * const nestedObj = { a: 1, b: { c: 2, d: { e: 3 } } };
 * const flattenedObj = flatten(nestedObj);
 * // { 'a': 1, 'b.c': 2, 'b.d.e': 3 }
 */
export function flatten<T extends Record<string, any>>(obj: T, prefix: string = ''): FlattenedObject<T> {
  return Object.keys(obj).reduce((acc: FlattenedObject<T>, k) => {
    const pre = prefix.length ? prefix + '.' : '';
    if (typeof obj[k] === 'object' && obj[k] !== null && !Array.isArray(obj[k])) {
      Object.assign(acc, flatten(obj[k], pre + k));
    } else {
      (acc as any)[pre + k] = obj[k];
    }
    return acc;
  }, {} as FlattenedObject<T>);
}
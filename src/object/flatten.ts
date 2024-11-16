export type FlattenedObject = { [key: string]: any };

/**
 * Flattens a nested object structure.
 * @param {Record<string, any>} obj - The object to flatten.
 * @param {string} [prefix=''] - The prefix to use for flattened keys.
 * @returns {FlattenedObject} A flattened version of the input object.
 * @example
 * const nestedObj = { a: 1, b: { c: 2, d: { e: 3 } } };
 * const flattenedObj = flatten(nestedObj);
 * // { 'a': 1, 'b.c': 2, 'b.d.e': 3 }
 */
export function flatten(obj: Record<string, any>, prefix: string = ''): FlattenedObject {
  return Object.keys(obj).reduce((acc: FlattenedObject, k) => {
    const pre = prefix.length ? prefix + '.' : '';
    if (
      typeof obj[k] === 'object' && 
      obj[k] !== null && 
      !Array.isArray(obj[k])
    ) Object.assign(acc, flatten(obj[k], pre + k));
    else acc[pre + k] = obj[k];
    return acc;
  }, {})
};
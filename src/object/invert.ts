/**
 * Inverts the keys and values of an object.
 * @param {Record<string, any>} object - The object to invert.
 * @returns {Record<string, any>} A new object with the original object's values as keys and keys as values.
 * @example
 * const obj = { a: 1, b: 2, c: 3 };
 * const inverted = invert(obj);
 * // { '1': 'a', '2': 'b', '3': 'c' }
 */
export function invert(object: Record<string, any>): Record<string, any>{
  const result: Record<string, any> = {};
  for (const [key, value] of Object.entries(object)) {
    result[value] = key;
  };

  return result;
}
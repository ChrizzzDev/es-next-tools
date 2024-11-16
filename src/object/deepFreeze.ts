/**
 * Deeply freezes an object and all its nested properties.
 * @param {T} object - The object to freeze.
 * @returns {T} The frozen object.
 * @template T
 * @example
 * const obj = { a: 1, b: { c: 2 } };
 * const frozenObj = deepFreeze(obj);
 * // Attempting to modify frozenObj or its nested properties will throw an error in strict mode
 */
export function deepFreeze<T extends Record<string, any>>(object: T): T {
  Object.freeze(object);
  for (const prop of Object.getOwnPropertyNames(object)) {
    if (
      typeof object[prop] === 'object' &&
      object[prop] !== null &&
      !Object.isFrozen(object[prop])
    ) {
      deepFreeze(object[prop]);
    }
  }

  return object;
}
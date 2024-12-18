/**
 * Deeply merges multiple objects into a target object.
 * @param {T} target - The target object to merge into.
 * @param {...Partial<T>[]} sources - The source objects to merge from.
 * @returns {T} The merged object.
 * @template T
 * @example
 * const obj1 = { a: { b: 2 }, c: 3 };
 * const obj2 = { a: { d: 4 }, e: 5 };
 * const merged = mergeDeep(obj1, obj2);
 * // { a: { b: 2, d: 4 }, c: 3, e: 5 }
 */
export function mergeDeep<T extends Record<string, any>>(target: T, ...sources: Partial<T>[]): T {
  const output = { ...target };

  if (!sources.length) return target;
  const source = sources.shift();

  if (source && typeof output === 'object' && typeof source === 'object') {
    for (const key in source) {
      if (typeof source[key] === 'object' && source[key] !== null) {
        if (!(key in output)) {
          Object.assign(output, { [key]: source[key] });
        } else {
          output[key] = mergeDeep(output[key], source[key]);
        }
      } else {
        Object.assign(output, { [key]: source[key] });
      }
    }
  }

  return sources.length ?
    mergeDeep(output, ...sources) : output;
}
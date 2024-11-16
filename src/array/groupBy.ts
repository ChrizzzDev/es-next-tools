/**
 * Groups the elements in the array according to the specified key function.
 * @param {T[]} array - The array to group.
 * @param {Function} fn - The function to determine the grouping key for each element.
 * @returns {Record<K, T[]>} An object where keys are the group names and values are arrays of grouped elements.
 * @template T, K
 * @example
 * const people = [
 *   { name: 'Alice', age: 30 },
 *   { name: 'Bob', age: 25 },
 *   { name: 'Charlie', age: 30 }
 * ];
 * const grouped = groupBy(people, person => person.age);
 * // { '25': [{ name: 'Bob', age: 25 }], '30': [{ name: 'Alice', age: 30 }, { name: 'Charlie', age: 30 }] }
 */
export function groupBy<T extends Record<string, any>, K extends keyof any>(array: T[], fn: (item: T) => K): Record<K, T[]> {
  return array.reduce((acc, item) => {
    const key = fn(item) as unknown as K;
    acc[key] = acc[key] || [];
    acc[key].push(item);
    return acc;
  }, {} as Record<K, T[]>);
};
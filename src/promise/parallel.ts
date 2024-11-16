/**
 * Executes an array of promises in parallel and returns their results.
 * @param {Promise<T>[]} promises - An array of promises to execute.
 * @returns {Promise<(T | any)[]>} A promise that resolves to an array of results or errors.
 * @template T
 * @example
 * const promises = [
 *   Promise.resolve(1),
 *   Promise.reject('Error'),
 *   Promise.resolve(3)
 * ];
 * const results = await parallel(promises);
 * // results will be [1, Error: 'Error', 3]
 */
export async function parallel<T>(promises: Promise<T>[]): Promise<(T | any)[]> {
  return Promise.all(promises.map(p => p.catch(e => e)));
};
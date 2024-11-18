/**
 * Executes an array of promises in parallel and returns their results.
 * @param {Promise<T>[]} promises - An array of promises to execute.
 * @returns {Promise<(T | Error)[]>} A promise that resolves to an array of results or errors.
 * @template T - Type of the successful promise result
 * @template E - Type of the error, defaults to Error
 * @throws {TypeError} When the input is not an array
 * @example
 * const promises = [
 *   Promise.resolve(1),
 *   Promise.reject('Error'),
 *   Promise.resolve(3)
 * ];
 * const results = await parallel(promises);
 * // results will be [1, Error: 'Error', 3]
 */
export async function parallel<T>(promises: Promise<T>[]): Promise<(T | Error)[]> {
  if (!Array.isArray(promises)) {
    throw new TypeError('Input must be an array of promises');
  }
  
  if (promises.length === 0) {
    return [];
  }

  return Promise.all(
    promises.map(p => 
      p.catch(error => {
        return error instanceof Error ? error : new Error(String(error));
      })
    )
  );
}
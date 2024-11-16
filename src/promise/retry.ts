/**
 * Retries a function that returns a promise until it succeeds or the maximum number of retries is reached.
 * @param {() => Promise<T>} fn - The function to retry.
 * @param {number} retries - The maximum number of retries.
 * @returns {Promise<T>} A promise that resolves with the function's result or rejects if all retries fail.
 * @template T
 * @example
 * const unreliableFunction = () => {
 *   return Math.random() > 0.7 ? Promise.resolve('Success') : Promise.reject('Failed');
 * };
 * const result = await retry(unreliableFunction, 5);
 * console.log(result); // 'Success' (if it succeeds within 5 tries)
 */
export async function retry<T>(fn: () => Promise<T>, retries: number): Promise<T> {
  return await fn().catch((err: Error) => {
    if (retries > 0) {
      return retry(fn, retries - 1);
    } else {
      throw err;
    }
  });
}
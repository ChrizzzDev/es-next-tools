/**
 * Adds a timeout to a promise.
 * @param {Promise<T>} promise - The promise to add a timeout to.
 * @param {number} ms - The timeout in milliseconds.
 * @returns {Promise<T>} A promise that resolves with the original promise's result or rejects if the timeout is reached.
 * @template T
 * @example
 * const slowPromise = new Promise(resolve => setTimeout(() => resolve('Done'), 2000));
 * const result = await timeout(slowPromise, 1000).catch(e => console.log(e.message));
 * // Logs: "Promise timed out after 1000ms."
 */
export function timeout<T>(promise: Promise<T>, ms: number): Promise<T> {
  const timeoutPromise = new Promise<T>((_, reject) => 
    setTimeout(() => reject(new Error(`Promise timed out after ${ms}ms.`)), ms)
  );
  
  return Promise.race([promise, timeoutPromise]);
}
/**
 * Delays the resolution of a promise or value by a specified number of milliseconds.
 * @param {T | Promise<T>} value - The value or promise to delay.
 * @param {number} ms - The number of milliseconds to delay.
 * @returns {Promise<T>} A promise that resolves with the value after the specified delay.
 * @template T
 * @example
 * const delayedValue = await delay('Hello', 1000);
 * console.log(delayedValue); // Logs 'Hello' after 1 second
 */
export function delay<T>(value: T | Promise<T>, ms: number): Promise<T> {
  return new Promise((resolve) => setTimeout(() => resolve(value), ms));
}
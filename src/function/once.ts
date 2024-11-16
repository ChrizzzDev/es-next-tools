import type { AnyFunction } from '..';

/**
 * Creates a function that is restricted to invoking the original function only once.
 * @param {T} fn - The function to restrict.
 * @returns {T} The new restricted function.
 * @template T
 * @example
 * let count = 0;
 * const incrementOnce = once(() => ++count);
 * console.log(incrementOnce()); // 1
 * console.log(incrementOnce()); // 1
 * console.log(count); // 1
 */
export function once<T extends AnyFunction>(fn: T): T {
  let hasRun = false;
  let result: ReturnType<T>;

  return ((...args: Parameters<T>): ReturnType<T> => {
    if (!hasRun) {
      hasRun = true;
      result = fn(...args);
    }
    return result;
  }) as T;
}
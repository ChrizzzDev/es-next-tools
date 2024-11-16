import type { AnyFunction } from "..";

/**
 * Creates a function that invokes the original function only before it's called n times.
 * @param {number} times - The number of calls before the original function stops being invoked.
 * @param {Function} fn - The function to restrict.
 * @returns {Function} The new restricted function.
 * @example
 * let count = 0;
 * const incrementBeforeThree = before(() => ++count, 3);
 * incrementBeforeThree(); // 1
 * incrementBeforeThree(); // 2
 * incrementBeforeThree(); // 2 (doesn't increment anymore)
 */
export function before<T extends AnyFunction>(fn: T, times: number, ): T {
  let count = 0;
  return ((...args: Parameters<T>[]) => {
    if (count < times) {
      count++;
      return fn(args);
    }
  }) as T;
}
import type { AnyFunction } from "..";

/**
 * Creates a function that invokes the original function only after it's called n times.
 * @template T
 * @param {number} times - The number of calls before the original function is invoked.
 * @param {AnyFunction} fn - The function to restrict.
 * @returns {T} The new restricted function.
 * @example
 * let count = 0;
 * const incrementAfterThree = after(() => ++count, 3);
 * incrementAfterThree(); // 0
 * incrementAfterThree(); // 0
 * incrementAfterThree(); // 1
 * incrementAfterThree(); // 2
 */
export function after<T extends AnyFunction>(fn: T, times: number): T {
  let count = 0;
  return ((...args: Parameters<T>[]) => {
    if (++count >= times) fn(args);
  }) as T;
}
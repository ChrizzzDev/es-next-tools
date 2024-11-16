import type { AnyFunction } from '..';

/**
 * Creates a throttled function that only invokes the original function at most once per every `wait` milliseconds.
 * @param {T} fn - The function to throttle.
 * @param {number} wait - The number of milliseconds to throttle invocations to.
 * @returns {Function} A new, throttled function.
 * @template T
 * @example
 * const throttledFn = throttle(() => console.log('Throttled'), 1000);
 * // Calling throttledFn multiple times within 1 second will only log once
 */
export function throttle<T extends AnyFunction>(fn: T, wait: number): (...args: Parameters<T>) => void {
  let lastCall = 0;
  return (...args: Parameters<T>) => {
    const now = Date.now();
    if (now - lastCall >= wait) {
      lastCall = now;
      fn(...args);
    }
  }
}
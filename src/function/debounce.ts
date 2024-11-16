import type { AnyFunction } from '..';

/**
 * Creates a debounced function that delays invoking the original function until after `wait` milliseconds have elapsed since the last time it was invoked.
 * @param {T} fn - The function to debounce.
 * @param {number} wait - The number of milliseconds to delay.
 * @returns {Function} A new, debounced function.
 * @template T
 * @example
 * const debouncedFn = debounce(() => console.log('Debounced'), 300);
 * // Calling debouncedFn multiple times rapidly will only log once after 300ms of inactivity
 */
export function debounce<T extends AnyFunction>(fn: T, wait: number): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>): void => {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn(...args), wait);
  };
};
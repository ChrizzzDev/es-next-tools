import type { AnyFunction } from '..';

/**
 * Creates a memoized version of a function.
 * @param {T} fn - The function to memoize.
 * @returns {(...args: Parameters<T>) => ReturnType<T> | undefined} A memoized version of the input function.
 * @template T
 * @example
 * const expensiveCalculation = (n) => {
 *   console.log('Calculating...');
 *   return n * 2;
 * };
 * const memoizedCalc = memoize(expensiveCalculation);
 * 
 * console.log(memoizedCalc(5)); // Logs: Calculating... 10
 * console.log(memoizedCalc(5)); // Logs: 10 (no calculation, result from cache)
 */
export function memoize<T extends AnyFunction>(fn: T, limit: number = 100): (...args: Parameters<T>) => ReturnType<T> | undefined {
  const cache = new Map<string, ReturnType<T>>();

  return (...args: Parameters<T>) => {
    const key = JSON.stringify(args);
    if (!cache.has(key)) {
      if (cache.size >= limit) {
        const firstKey = cache.keys().next().value;
        if (firstKey) {
          cache.delete(firstKey);
        }
      }
      cache.set(key, fn(...args));
    }
    return cache.get(key);
  };
}
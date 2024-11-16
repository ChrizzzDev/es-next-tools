import type { AnyFunction } from '..';

/**
 * Creates a memoized version of an asynchronous function.
 * @param {AnyFunction} fn - The asynchronous function to memoize.
 * @param {number} [expirationTime=60000] - Time in milliseconds before cache expires.
 * @returns A memoized version of the input function.
 * @example
 * const memoizedFetch = memoizeAsync(async (url: string) => {
 *   const response = await fetch(url);
 *   return response.json();
 * });
 * 
 * // First call will fetch data
 * const data1 = await memoizedFetch('https://api.example.com/data');
 * // Second call with the same URL will return cached data
 * const data2 = await memoizedFetch('https://api.example.com/data');
 */
export function memoizeAsync<T extends AnyFunction>(fn: T, expirationTime: number = 60000) {
  const cache = new Map<string, { value: any; timestamp: number }>();

  return async function (...args: Required<Parameters<T>>) {
    const key = JSON.stringify(args);
    const now = Date.now();

    if (cache.has(key)) {
      const cachedEntry = cache.get(key)!;
      if (now - cachedEntry.timestamp < expirationTime) {
        return cachedEntry.value;
      } else {
        cache.delete(key);
      }
    }

    const result = await fn(...args);
    cache.set(key, { value: result, timestamp: now });
    return result;
  };
}
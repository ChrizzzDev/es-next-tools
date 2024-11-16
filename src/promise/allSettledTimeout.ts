import { timeout } from './timeout';

/**
 * Settles all promises with a timeout.
 * @param {Promise<T>[]} promises - An array of promises to settle.
 * @param {number} ms - The timeout in milliseconds.
 * @returns {Promise<PromiseSettledResult<T>[]>} A promise that resolves to an array of settled results.
 * @template T
 * @example
 * const promises = [Promise.resolve(1), Promise.reject('error'), new Promise(resolve => setTimeout(() => resolve(2), 2000))];
 * const results = await allSettledWithTimeout(promises, 1500);
 * // [{ status: 'fulfilled', value: 1 }, { status: 'rejected', reason: 'error' }, { status: 'rejected', reason: Error('Promise timed out after 1500ms.') }]
 */
export function allSettledWithTimeout<T>(promises: Promise<T>[], ms: number): Promise<PromiseSettledResult<T>[]> {
  return timeout(Promise.allSettled(promises), ms);
}
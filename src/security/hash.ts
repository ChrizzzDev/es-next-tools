import { createHash } from 'crypto';

/**
 * Generates a hash of the given text using the specified algorithm.
 * @param {string} text - The text to hash.
 * @param {'sha256' | 'md5'} [algorithm='sha256'] - The hashing algorithm to use.
 * @returns {string} The resulting hash as a hexadecimal string.
 * @example
 * // Returns the SHA-256 hash of "Hello, World!"
 * hash("Hello, World!");
 * 
 * // Returns the MD5 hash of "Hello, World!"
 * hash("Hello, World!", "md5");
 */
export function hash(text: string, algorithm: 'sha256' | 'md5' = 'sha256'): string {
  return createHash(algorithm).update(text).digest('hex');
}
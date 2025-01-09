import { createCipheriv, createDecipheriv, randomBytes } from 'crypto';

const ALGORITHM = 'aes-256-gcm';

/**
 * Encrypts a text using AES-256-GCM algorithm.
 * @param {string} text - The text to encrypt.
 * @param {string} key - The encryption key.
 * @returns {{ encrypted: string; iv: string; authTag: string }} An object containing the encrypted text, initialization vector (iv), and authentication tag (authTag).
 * @example
 * // Returns an object with encrypted text, iv, and authTag
 * encrypt("Hello, World!", "my-secret-key");
 */
export function encrypt(text: string, key: string): { encrypted: string; iv: string; authTag: string } {
  const iv = randomBytes(16);
  const keyBuffer = Buffer.from(key.padEnd(32, '0').slice(0, 32));
  
  const cipher = createCipheriv(ALGORITHM, keyBuffer, iv);
  let encrypted = cipher.update(text, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  
  return {
    encrypted,
    iv: iv.toString('hex'),
    authTag: cipher.getAuthTag().toString('hex')
  };
}

/**
 * Decrypts an encrypted text using AES-256-GCM algorithm.
 * @param {string} encrypted - The encrypted text.
 * @param {string} key - The encryption key.
 * @param {string} iv - The initialization vector used during encryption.
 * @param {string} authTag - The authentication tag generated during encryption.
 * @returns {string} The decrypted text.
 * @example
 * // Returns the decrypted text "Hello, World!"
 * const encrypted = encrypt("Hello, World!", "my-secret-key");
 * decrypt(encrypted.encrypted, "my-secret-key", encrypted.iv, encrypted.authTag);
 */
export function decrypt(encrypted: string, key: string, iv: string, authTag: string): string {
  const keyBuffer = Buffer.from(key.padEnd(32, '0').slice(0, 32));
  const ivBuffer = Buffer.from(iv, 'hex');
  const authTagBuffer = Buffer.from(authTag, 'hex');
  
  const decipher = createDecipheriv(ALGORITHM, keyBuffer, ivBuffer);
  decipher.setAuthTag(authTagBuffer);
  
  let decrypted = decipher.update(encrypted, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  
  return decrypted;
}
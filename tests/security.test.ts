import { encrypt, decrypt, hash } from '../src/security';
import { describe, it, expect } from 'bun:test';

describe('Security functions', () => {
  describe('encryption/decryption', () => {
    it('should encrypt and decrypt text correctly', () => {
      const text = 'Hello, World!';
      const key = 'my-secret-key-32chars-long-text!!';
      
      const { encrypted, iv, authTag } = encrypt(text, key);
      const decrypted = decrypt(encrypted, key, iv, authTag);
      
      expect(decrypted).toBe(text);
    });
  });

  describe('hash', () => {
    it('should generate consistent hashes', () => {
      const text = 'test-string';
      const hash1 = hash(text);
      const hash2 = hash(text);
      
      expect(hash1).toBe(hash2);
    });

    it('should generate different hashes for different algorithms', () => {
      const text = 'test-string';
      const sha256Hash = hash(text, 'sha256');
      const md5Hash = hash(text, 'md5');
      
      expect(sha256Hash).not.toBe(md5Hash);
    });
  });
}); 
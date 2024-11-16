import { createHash } from 'crypto';

export function hash(text: string, algorithm: 'sha256' | 'md5' = 'sha256'): string {
  return createHash(algorithm).update(text).digest('hex');
}
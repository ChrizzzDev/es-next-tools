# Security Utility Functions

This module provides cryptographic functions for encryption and hashing. The functions are designed to be secure and easy to use while following cryptographic best practices.

## Functions

### encrypt

Encrypts data using AES-256-GCM (Galois/Counter Mode) with authentication.

#### Example
```typescript
const secretKey = 'your-32-character-secret-key!!!';
const sensitiveData = 'confidential information';

const { encrypted, iv, authTag } = encrypt(sensitiveData, secretKey);
console.log(encrypted); // Outputs encrypted hex string
```

### decrypt

Decrypts data that was encrypted using the encrypt function.

#### Example
```typescript
const decrypted = decrypt(encrypted, secretKey, iv, authTag);
console.log(decrypted); // 'confidential information'
```

### hash

Generates a cryptographic hash using SHA-256 (default) or MD5.

#### Example
```typescript
// Using SHA-256 (default)
const sha256Hash = hash('my-password');
console.log(sha256Hash);
// Using MD5
const md5Hash = hash('my-password', 'md5');
console.log(md5Hash);
```

## Real-World Use Cases

### Secure Password Storage
```typescript
function storePassword(password: string) {
  const hashedPassword = hash(password);
  // Store hashedPassword in database
  return hashedPassword;
}
```

### Encrypting Sensitive Data
```typescript
function encryptUserData(userData: { ssn: string; creditCard: string }) {
  const key = process.env.ENCRYPTION_KEY!;
  return {
    ssn: encrypt(userData.ssn, key),
    creditCard: encrypt(userData.creditCard, key)
  };
}
```

### API Token Generation
```typescript
function generateApiToken(userId: string, secret: string) {
  const timestamp = Date.now().toString();
  return hash(`${userId}-${timestamp}-${secret}`);
}
```

## Best Practices

1. Never store encryption keys in your code.
2. Use environment variables for sensitive values.
3. Always use the authentication tag when decrypting.
4. Rotate encryption keys periodically.
5. Use SHA-256 instead of MD5 for new applications.

## Security Considerations

- The encryption function uses AES-256-GCM which provides both confidentiality and authenticity.
- A unique IV is generated for each encryption operation.
- The hash function uses SHA-256 by default which is cryptographically secure.
- MD5 is included for legacy compatibility but should not be used for security-critical applications.

## Performance Tips

- Cache hashed values for frequently accessed data.
- Consider using a key derivation function for password hashing.
- Use bulk encryption for large datasets.
- Consider hardware acceleration for high-volume encryption.
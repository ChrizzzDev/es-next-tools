# Validation Utility Functions

This module provides validation functions for common data types like email addresses and phone numbers. The functions are designed to be robust and follow standard validation patterns.

## Functions

### isEmail

Validates email addresses using a regular expression pattern that checks for basic email format compliance.

#### Example
```typescript
console.log(isEmail('user@example.com')); // true
console.log(isEmail('invalid.email')); // false
console.log(isEmail('user@domain')); // false
```

### isPhoneNumber

Validates phone numbers in either E.164 international format or North American Number Plan (NANP) format.

#### Example
```typescript
// E.164 format
console.log(isPhoneNumber('+14155552671')); // true
console.log(isPhoneNumber('+1415555267')); // false

// NANP format
console.log(isPhoneNumber('(415) 555-2671', 'NANP')); // true
console.log(isPhoneNumber('415-555-2671', 'NANP')); // true
console.log(isPhoneNumber('4155552671', 'NANP')); // true
```

## Common Use Cases

### User Registration Form
```typescript
function validateUserForm(email: string, phone: string) {
  return {
    isValidEmail: isEmail(email),
    isValidPhone: isPhoneNumber(phone, 'E164')
  }
}
```

### Contact Information Validation
```typescript
function validateContact(contact: { email: string; phone: string }) {
  if (!isEmail(contact.email)) {
    throw new Error('Invalid email address');
  }

  if (!isPhoneNumber(contact.phone, 'NANP')) {
    throw new Error('Invalid phone number');
  }

  return true;
}
```

### Bulk Validation Data
```typescript
function validateContacts(contacts: Array<{ email: string; phone: string }>) {
  return contacts.map(contact => ({
    ...contact,
    isValid: isEmail(contact.email) && isPhoneNumber(contact.phone)
  }));
}
```

## Best Practices

1. Always validate user input on both client and server side.
2. Consider using these functions as part of a larger form validation strategy.
3. Handle edge cases like empty strings and undefined values.
4. Consider internationalization requirements when validating phone numbers.

## Performance Considerations

- Regular expressions are compiled once and reused.
- Validation functions are lightweight and suitable for frequent calls.
- Consider caching results for frequently validated values.
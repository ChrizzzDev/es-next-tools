# String Utility Functions

This module provides a collection of string manipulation utilities for common text processing tasks. These functions are designed to be simple to use while handling common edge cases.

## Functions

### capitalize

Capitalizes text according to specified options, with support for different word separators and capitalization patterns.

#### Example
```typescript
// Default behavior (first letter only)
console.log(capitalize('hello world')); // 'Hello world'
// Capitalize all words
console.log(capitalize('hello world', { all: true })); // 'Hello World'
// Custom separator
console.log(capitalize('hello-world', { separator: '-', all: true })); // 'Hello-World'
```

### contains

Checks if a string contains a specific substring.

#### Example
```typescript
const text = 'Hello, world!';
console.log(contains(text, 'world')); // true
console.log(contains(text, 'universe')); // false
```

### reverse

Reverses the characters in a string.

#### Example
```typescript
console.log(reverse('hello')); // 'olleh'
console.log(reverse('Hello, world!')); // '!dlrow ,olleH'
```

### slugify

Converts text into URL-friendly slugs by removing special characters, converting spaces to hyphens, and normalizing Unicode characters.

#### Example
```typescript
console.log(slugify('Hello World!')); // 'hello-world'
console.log(slugify('THis is a test')); // 'this-is-a-test'
console.log(slugify('¡Hola mundo!')); // 'hola-mundo'
```

## Common Use Cases

### URL Generation
```typescript
const title = 'My Blog Post Title! (2024)';
const urlSlug = slugify(title); // 'my-blog-post-title-2024'
```

### Text formatting
```typescript
const name = 'john doe';
const formattedName = capitalize(name); // 'John Doe'
```

### String search
```typescript
const text = 'User authentication failed';
const hasError = contains(text.toLowerCase(), 'failed'); // true
```

## Best practices

1. Always consider Unicode support when processing strings.
2. Use the appropriate capitalization options for your locale.
3. Consider text directionality when reversing strings.
4. Handle empty strings and edge cases appropriately.

## Performance Considerations

- The `contains` function uses native `indexOf` for optimal performance.
- `slugify` performs multiple string transformations and may be CPU-intensive for very large strings.
- `capitalize` creates new string instances, consider caching results for frequently used values.
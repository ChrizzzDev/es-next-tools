# Object Utility Functions

This module provides a comprehensive set of utility functions for object manipulation, transformation, and filtering.

## Core Functions

### deepFreeze
Recursively freezes an object and all its nested properties, making it immutable.

#### Example
```typescript
const config = deepFreeze({
  api: {
    endpoint: 'https://api.example.com',
    timeout: 5000
  }
});
// Attempting to modify config.api.endpoint will throw an error in strict mode
```

### filter
Creates a new object with entries that pass a predicate function.

#### Example
```typescript
const users = {
  user1: { age: 25, active: true },
  user2: { age: 30, active: false },
  user3: { age: 28, active: true }
};
const activeUsers = filter(users, ([, value]) => value.active);
// { user1: { age: 25, active: true }, user3: { age: 28, active: true } }
```

### flatten
Converts a nested object structure into a flat object with dot-notation keys.

#### Example
```typescript
const nestedConfig = {
  database: {
    host: 'localhost',
    ports: {
      primary: 5432,
      replica: 5433
    }
  }
};
const flatConfig = flatten(nestedConfig);
/* {
 'database.host': 'localhost',
 'database.ports.primary': 5432,
 'database.ports.replica': 5433
*/
```

### invert
Swaps the keys and values of an object.

#### Example
```typescript
const errorCodes = {
  NOT_FOUND: 404,
  SERVER_ERROR: 500
};
const errorMessages = invert(errorCodes);
// { '404': 'NOT_FOUND', '500': 'SERVER_ERROR' }
```

### mergeDeep
Deeply merges multiple objects, handling nested structures.

#### Example
```typescript
const defaultSettings = {
  theme: { dark: true },
  notifications: { email: true }
};
const userSettings = {
  theme: { fontSize: 14 }
};
const finalSettings = mergeDeep(defaultSettings, userSettings);
/* {
 theme: { dark: true, fontSize: 14 },
 notifications: { email: true }
*/ 
```

### omit
Creates a new object excluding specified properties.

#### Example
```typescript
const user = {
  id: 1,
  name: 'John',
  password: 'secret',
  email: 'john@example.com'
};
const safeUser = omit(user, ['password']);
// { id: 1, name: 'John', email: 'john@example.com' }
```

### pick
Creates a new object with only the specified properties.

#### Example
```typescript
const response = {
  data: { ... },
  status: 200,
  headers: { ... },
  timestamp: 1234567890
};
const essentials = pick(response, ['data', 'status']);
// { data: { ... }, status: 200 }
```

## Best Practices

1. Immutability:
   - Use deepFreeze for configuration objects
   - Return new objects instead of modifying existing ones
   - Consider using TypeScript readonly properties

2. Performance:
   - Use pick/omit for large objects when only few properties are needed
   - Consider flattening deeply nested objects for easier access
   - Cache results of expensive operations

3. Type Safety:
   - Leverage TypeScript's type system
   - Validate object structures
   - Handle edge cases (null/undefined)

4. Security:
   - Use omit to remove sensitive data
   - Validate object structures before operations
   - Consider deepFreeze for critical data

## Performance Considerations

1. Time Complexity:
   - flatten: O(n) where n is total number of properties
   - deepFreeze: O(n) for n nested properties
   - filter/pick/omit: O(k) where k is number of keys
   - mergeDeep: O(n * m) where n is depth and m is properties per level

2. Memory Usage:
   - Consider object size when flattening
   - Use pick/omit to reduce memory footprint
   - Implement cleanup for temporary objects
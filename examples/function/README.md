# Function Utility Functions

This module provides a collection of higher-order functions for common function manipulation patterns, optimizing performance and controlling execution flow.

## Core Functions

### after
Creates a function that executes only after being called a specific number of times.

#### Example with API Retry Logic
```typescript
const retryOperation = after(async () => {
  await performBackupOperation();
}, 3);
// First two failures are ignored
retryOperation(); // No operation
retryOperation(); // No operation
retryOperation(); // Performs backup
```

### before
Restricts a function to execute only before reaching a specific call count.

#### Example with Rate Limiting
```typescript
const limitedApiCalls = before(async () => {
  await makeApiRequest();
}, 5);
// Only first 4 calls execute
limitedApiCalls(); // Executes
limitedApiCalls(); // Executes
limitedApiCalls(); // Executes
limitedApiCalls(); // Executes
limitedApiCalls(); // No operation
```

### debounce
Delays function execution until after a period of inactivity.

#### Example with Search Input
```typescript
const searchAPI = async (query: string) => {
  const results = await fetch(`/api/search?q=${query}`);
  return results.json();
};
const debouncedSearch = debounce(searchAPI, 300);
// User typing "hello" rapidly
debouncedSearch("h");
debouncedSearch("he");
debouncedSearch("hel");
debouncedSearch("hell");
debouncedSearch("hello"); // Only this call is executed after 300ms
```

### memoize
Caches function results based on input parameters.

#### Example with Expensive Calculations
```typescript
const calculateComplexData = (id: string) => {
  // Expensive operation
  return complexCalculation(id);
};
const memoizedCalculation = memoize(calculateComplexData);
// First call performs calculation
const result1 = memoizedCalculation("123");
// Second call returns cached result
const result2 = memoizedCalculation("123");
```

### memoizeAsync
Caches results of asynchronous operations with expiration.

#### Example with API Caching
```typescript
const fetchUserData = memoizeAsync(async (userId: string) => {
  const response = await fetch(`/api/users/${userId}`);
  return response.json();
}, 5000); // Cache for 5 seconds
// First call fetches data
const user1 = await fetchUserData("123");
// Second call uses cache
const user2 = await fetchUserData("123");
```

## Best Practices

1. Debounce & Throttle:
   - Use debounce for input events.
   - Use throttle for continuous events.
   - Consider cleanup in React components.
   - Set appropriate timeout values.

2. Memoization:
   - Use for pure functions.
   - Consider cache size limits.
   - Clear cache when appropriate.
   - Handle complex arguments properly.

3. Error Handling:
   - Wrap callbacks in try-catch.
   - Handle async errors properly.
   - Provide fallback mechanisms.
   - Log errors appropriately.

## Performance Considerations

1. Cache Management:
   - Monitor cache size.
   - Implement cache eviction.
   - Use appropriate cache duration.
   - Clear unused cache entries.

2. Memory Usage:
   - Clean up event listeners.
   - Avoid memory leaks.
   - Use WeakMap when appropriate.
   - Monitor closure sizes.

3. Execution Timing:
   - Balance timeout durations.
   - Consider CPU impact.
   - Monitor execution frequency.
   - Optimize callback functions.
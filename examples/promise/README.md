# Promise Utility Functions

This module provides utility functions for handling asynchronous operations with enhanced control over execution, timing, and error handling.

## Core Functions

### parallel
Executes multiple promises concurrently and handles their results, including errors.

#### Example
```typescript
const tasks = [
  fetch('/api/users'),
  fetch('/api/posts'),
  fetch('/api/comments')
];
const results = await parallel(tasks);
// Results will contain successful responses and Error objects for failed requests
```

### allSettledTimeout
Similar to Promise.allSettled but with a timeout mechanism to prevent hanging operations.

#### Example
```typescript
const apiCalls = [
  fetch('/api/endpoint1'),
  fetch('/api/endpoint2'),
  fetch('/api/endpoint3')
];
const results = await allSettledTimeout(apiCalls, 5000);
// Will resolve after 5 seconds even if some promises haven't settled
```

### delay
Creates a promise that resolves after a specified time period.

#### Example
```typescript
async function rateLimitedAPI() {
  await fetch('/api/request1');
  await delay(1000); // Wait 1 second
  await fetch('/api/request2');
}
```

### retry
Attempts to execute a promise-returning function multiple times until success.

#### Example
```typescript
const fetchWithRetry = retry(async () => {
  const response = await fetch('/api/unstable-endpoint');
  if (!response.ok) throw new Error('API failed');
    return response.json();
  }, 3);

try {
  const data = await fetchWithRetry();
} catch (error) {
  console.error('All retry attempts failed');
}
```

### timeout
Wraps a promise with a timeout mechanism.

#### Example
```typescript
const apiCall = fetch('/api/slow-endpoint');
try {
  const result = await timeout(apiCall, 5000);
} catch (error) {
  console.error('Operation timed out');
}
```

## Real-World Use Cases

### API Request Management
```typescript
async function robustAPICall() {
  const endpoints = ['/users', '/posts', '/comments'];
  const requests = endpoints.map(endpoint =>
    retry(
      () => timeout(fetch(endpoint), 3000), 
      3
    )
  );
  return parallel(requests);
}
```

### Batch Processing with Rate Limiting
```typescript
async function processBatch(items: any[]) {
  const batchSize = 3;
  for (let i = 0; i < items.length; i += batchSize) {
    const batch = items.slice(i, i + batchSize);
    await parallel(batch.map(item => processItem(item)));
    await delay(1000); // Rate limiting
  }
}
```

## Best Practices

1. Error Handling:
   - Always use try-catch with async operations
   - Implement proper fallback mechanisms
   - Log errors appropriately
   - Consider retry strategies

2. Performance:
   - Use parallel for independent operations
   - Implement proper timeouts
   - Consider memory usage with large batches
   - Monitor execution times

3. Resource Management:
   - Implement rate limiting
   - Clean up resources properly
   - Handle connection pooling
   - Monitor concurrent operations

## Performance Considerations

1. Concurrency:
   - Balance parallel execution
   - Monitor system resources
   - Implement backoff strategies
   - Consider queue mechanisms

2. Memory Usage:
   - Clear resolved promises
   - Handle large response data
   - Implement streaming when appropriate
   - Monitor memory leaks

3. Error Recovery:
   - Implement circuit breakers
   - Use exponential backoff
   - Handle partial failures
   - Maintain system stability
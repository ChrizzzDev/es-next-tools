# Array Utility Functions

This module provides a collection of array manipulation utilities designed for common data processing tasks. These functions are optimized for performance and type safety.

## Functions

### chunk
Divides an array into smaller arrays of specified size.

#### Example with Pagination
```typescript
const products = ['Product1', 'Product2', 'Product3', 'Product4', 'Product5'];
const itemsPerPage = 2;
const pages = chunk(products, itemsPerPage);
// Result: [['Product1', 'Product2'], ['Product3', 'Product4'], ['Product5']]
```

### groupBy
Groups array elements by a key function.

#### Example with Sales Data
```typescript
const sales = [
  { product: 'Laptop', category: 'Electronics', amount: 999 },
  { product: 'Phone', category: 'Electronics', amount: 699 },
  { product: 'Book', category: 'Media', amount: 29 }
];
const salesByCategory = groupBy(sales, item => item.category);
/* Result:
{
  'Electronics': [
    { product: 'Laptop', category: 'Electronics', amount: 999 },
    { product: 'Phone', category: 'Electronics', amount: 699 }
  ],
  'Media': [
    { product: 'Book', category: 'Media', amount: 29 }
  ]
}
*/
```

### intersection
Finds common elements between arrays.

#### Example with User Permissions
```typescript
const userRoles = ['admin', 'editor', 'viewer'];
const requiredRoles = ['admin', 'editor'];
const hasPermission = intersection(userRoles, requiredRoles)
// Result: ['admin', 'editor']
```

### unique
Removes duplicate elements from an array.

#### Example with User Sessions
```typescript
const userSessions = ['session1', 'session2', 'session1', 'session3'];
const uniqueSessions = unique(userSessions);
// Result: ['session1', 'session2', 'session3']
```

### zip
Combines multiple arrays into an array of tuples.

#### Example with User Data
```typescript
const names = ['John', 'Jane', 'Bob'];
const ages = [25, 30, 35];
const cities = ['NY', 'LA', 'CHI'];
const users = zip(names, ages, cities);
/* Result:
  [
    ['John', 25, 'NY'],
    ['Jane', 30, 'LA'],
    ['Bob', 35, 'CHI']
  ]
*/
```

## Real-World Use Cases

### Data Processing Pipeline
```typescript
const processUserData = (users: User[]) => {
  // Group users by country
  const byCountry = groupBy(users, user => user.country);
  // Process each group in chunks
  Object.entries(byCountry).forEach(([country, users]) => {
    const batches = chunk(users, 100);
    batches.forEach(processBatch);
  });
};
```

### Analytics Dashboard
```typescript
const generateReport = (events: Event[]) => {
  // Get unique event types
  const eventTypes = unique(events.map(e => e.type));
  // Group events by date
  const dailyEvents = groupBy(events, e => e.date.toDateString());
  return { eventTypes, dailyEvents };
};
```

### Feature Access Control
```typescript
const checkAccess = (userFeatures: string[], requiredFeatures: string[]) => {
  const common = intersection(userFeatures, requiredFeatures);
  return common.length === requiredFeatures.length;
};
```

## Best Practices

1. Performance Considerations:
   - Use `unique` with Set for large arrays.
   - Consider memory usage when using `chunk` with large datasets.
   - Cache `groupBy` results for frequently accessed data.

2. Type Safety:
   - Leverage TypeScript's type system for key functions.
   - Use type guards when processing mixed data types.
   - Consider undefined/null values in key functions.

3. Data Processing:
   - Use `chunk` for batch processing.
   - Combine functions for complex transformations.
   - Consider sorting before grouping for better performance.

4. Error Handling:
   - Validate input arrays before processing.
   - Handle edge cases (empty arrays, null values).
   - Provide meaningful error messages.

## Performance Considerations

- `unique`: O(n) time complexity using Set.
- `groupBy`: O(n) time complexity.
- `intersection`: O(n + m) where n and m are array lengths.
- `chunk`: O(n) time complexity.
- `zip`: O(n) where n is the length of the longest array.
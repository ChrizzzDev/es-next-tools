# Date Utility Functions

This module provides a collection of date manipulation utilities for common date processing tasks. These functions are designed to be simple to use while handling timezone and edge cases appropriately.

## Functions

### addDays

Adds a specified number of days to a given date.

#### Example
```typescript
const date = new Date('2023-05-01');
const newDate = addDays(date, 5); // 2023-05-06
// Business use case: Calculate subscription end date
const subscriptionStart = new Date();
const trialPeriodDays = 14;
const trialEndDate = addDays(subscriptionStart, trialPeriodDays);
```

### diff

Calculates the difference in days between two dates.

#### Example
```typescript
const date1 = new Date('2023-01-01');
const date2 = new Date('2023-01-10');
const difference = diff(date1, date2); // 9
// Business use case: Calculate remaining trial days
const trialEnd = new Date('2024-02-01');
const today = new Date();
const remainingDays = diff(today, trialEnd);
```

### format

Formats a date according to a specified format string.

#### Example
```typescript
const date = new Date('2023-05-01T12:30:45');
const formatted = format(date, 'YYYY-MM-DD hh:mm:ss'); // '2023-05-01 12:30:45'
// Business use case: Format for different locales
const meetingDate = new Date();
console.log(format(meetingDate, 'DD/MM/YYYY')); // European format
console.log(format(meetingDate, 'MM/DD/YYYY')); // US format
```

## Real-World Use Cases

### Event Scheduling System
```typescript
function createEventSchedule(startDate: Date, eventDuration: number) {
  const endDate = addDays(startDate, eventDuration);
  return {
    start: format(startDate, 'YYYY-MM-DD'),
    end: format(endDate, 'YYYY-MM-DD'),
    duration: diff(startDate, endDate)
};
}
```

### Subscription Management
```typescript
function getSubscriptionStatus(startDate: Date, planDays: number) {
  const endDate = addDays(startDate, planDays);
  const remainingDays = diff(new Date(), endDate);
  return {
    started: format(startDate, 'YYYY-MM-DD'),
    expires: format(endDate, 'YYYY-MM-DD'),
    daysRemaining: remainingDays,
    status: remainingDays > 0 ? 'active' : 'expired'
  };
}
```

### Due Date Calculator
```typescript
function calculateDueDate(assignmentDate: Date, workingDays: number) {
  const dueDate = addDays(assignmentDate, workingDays);
  return {
    assigned: format(assignmentDate, 'DD MMM YYYY'),
    due: format(dueDate, 'DD MMM YYYY'),
    timeLeft: diff(new Date(), dueDate)
  };
}
```

## Best Practices

1. Timezone Handling:
   - Always store dates in UTC.
   - Convert to local time only for display.
   - Use explicit timezone conversions.
   - Document timezone assumptions.

2. Date Calculations:
   - Consider business days vs calendar days.
   - Handle DST transitions properly.
   - Use appropriate precision for calculations.
   - Validate date ranges.

3. Date Formatting:
   - Support international date formats.
   - Use ISO 8601 for data exchange.
   - Consider locale-specific requirements.
   - Cache formatted strings when appropriate.

4. Error Prevention:
   - Validate date inputs thoroughly.
   - Handle invalid dates gracefully.
   - Consider date range boundaries.
   - Document edge cases.

## Performance Considerations

- Consider caching formatted dates for frequently accessed values.
- Use appropriate date comparison methods for sorting.

## Common Pitfalls to Avoid

1. Date Operations:
   - Cache calculated dates when possible.
   - Batch date calculations.
   - Use appropriate comparison methods.
   - Consider using date libraries for complex operations.

2. Format Caching:
   - Cache frequently used format patterns.
   - Reuse format instances.
   - Consider memoization for expensive operations.

3. Memory Management:
   - Clean up cached dates when no longer needed.
   - Use appropriate data structures for date ranges.
   - Consider memory usage in long-running operations.
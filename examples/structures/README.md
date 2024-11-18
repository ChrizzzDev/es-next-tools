# Data Structure Utilities

This module provides a comprehensive collection of data structure implementations for common programming needs. Each structure is designed for type safety and optimal performance.

## Available Data Structures

### Stack
A Last-In-First-Out (LIFO) data structure with O(1) push and pop operations.

#### Example with Task Management
```typescript
const taskStack = new Stack<string>();
// Adding tasks to the stack
taskStack.push("Review PR #123");
taskStack.push("Debug production issue");
taskStack.push("Update documentation");
// Processing most recent task first
while (!taskStack.isEmpty()) {
const currentTask = taskStack.pop();
console.log(`Processing task: ${currentTask}`);
```

### Queue
A First-In-First-Out (FIFO) data structure ideal for processing tasks in order.

#### Example with Print Jobs
```typescript
const printQueue = new Queue<{ documentName: string, pages: number }>();
// Adding print jobs
printQueue.enqueue({ documentName: "Report.pdf", pages: 5 });
printQueue.enqueue({ documentName: "Invoice.pdf", pages: 2 });
// Processing print jobs in order
while (!printQueue.isEmpty()) {
  const job = printQueue.dequeue();
  console.log(`Printing ${job.documentName} (${job.pages} pages)`);
}
```

### Priority Queue
A queue where items are processed based on priority level.

#### Example with Hospital Emergency Room
```typescript
const emergencyQueue = new PriorityQueue<string>();
// Adding patients (lower number = higher priority)
emergencyQueue.enqueue("Severe trauma", 1);
emergencyQueue.enqueue("Common cold", 5);
emergencyQueue.enqueue("Broken arm", 3);
// Processing patients by priority
while (!emergencyQueue.isEmpty()) {
  const nextPatient = emergencyQueue.dequeue();
  console.log(`Treating patient: ${nextPatient}`);
}
```

### Circular Buffer
A fixed-size buffer that overwrites oldest data when full.

#### Example with Sensor Data Logging
```typescript
const sensorBuffer = new CircularBuffer<number>(60); // Last 60 readings
// Logging temperature readings
function logTemperature(reading: number) {
  sensorBuffer.add(reading);
}
// Every minute
setInterval(() => {
  logTemperature(getCurrentTemperature());
}, 60000);
```


### Deque (Double-ended Queue)
A queue that allows insertion and deletion at both ends.

#### Example with Browser History
```typescript
const browserHistory = new Deque<string>();
// Adding pages to history
browserHistory.addBack("homepage.com");
browserHistory.addBack("about.com");
// Navigating back
const previousPage = browserHistory.removeBack();
```

### Trie
A tree-like structure for efficient string operations.

#### Example with Autocomplete
```typescript
const autocomplete = new Trie();
// Adding words to dictionary
["apple", "application", "append"].forEach(word =>
  autocomplete.insert(word)
);
// Checking if word exists
console.log(autocomplete.search("apple")); // true
```

## Best Practices

1. Choose the appropriate data structure based on your use case:
   - Use Stack for undo/redo operations
   - Use Queue for task scheduling
   - Use Priority Queue for resource management
   - Use Circular Buffer for fixed-size logging
   - Use Deque for navigation history
   - Use Trie for prefix-based searching

2. Consider memory usage:
   - Use CircularBuffer for fixed-size scenarios
   - Clear unused structures to free memory
   - Use appropriate initial capacities

3. Performance considerations:
   - Stack and Queue operations are O(1)
   - Priority Queue operations are O(log n)
   - Trie operations are O(m) where m is key length

## Common Use Cases

1. Task Management Systems
2. Resource Scheduling
3. Data Processing Pipelines
4. Cache Implementation
5. Navigation Systems
6. Search Functionality
7. Event Processing
8. Memory Management
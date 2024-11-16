# es-next-tools

A comprehensive utility library for JavaScript and TypeScript that provides a wide range of functions for common programming tasks, including mathematical operations, date manipulations, array and object handling, string utilities, and more.

## Features

- **Math Utilities**: Functions for converting between degrees and radians, calculating GCD and LCM, linear interpolation, clamping values, and statistical calculations like variance and standard deviation.
- **Date Utilities**: Functions for adding days to a date, formatting dates, and calculating the difference between two dates.
- **Array Utilities**: Functions for zipping arrays, finding intersections, removing duplicates, and more.
- **Object Utilities**: Functions for filtering, omitting, and picking properties from objects, as well as deep merging and inverting key-value pairs.
- **Promise Utilities**: Functions for adding timeouts to promises, running promises in parallel, and retrying promises.
- **String Utilities**: Functions for checking substring presence, reversing strings, and slugifying.
- **Function Utilities**: Functions for debouncing, throttling, memoizing, and creating functions that run only once or after a certain number of calls.
- **Data Structures**: Implementations of common data structures like Stack, Queue, Deque, Priority Queue, and Graph.

## Installation

You can install the library using npm, pnpm, yarn, or bun:
```bash
npm install es-next-tools
```
or
```bash
pnpm add es-next-tools
```
or
```bash
yarn add es-next-tools
```
or
```bash
bun add es-next-tools
```


## Usage

Here are some examples of how to use the library:
> _You can also `import { } from 'es-next-tools';`_

### Math Utilities
```typescript
import { clamp, gcd, lcm, variance, standardDeviation } from 'es-next-tools/math';

const clampedValue = clamp(0, 5, 10); // 5
const greatestCommonDivisor = gcd(42, 30); // 6
const leastCommonMultiple = lcm(30, 50); // 150
const varValue = variance([1, 2, 3, 4, 5]); // 2
const stdDevValue = standardDeviation([2, 4, 4, 4, 5, 5, 7, 9]); // 2
```

### Date Utilities
```typescript
import { addDays, format } from 'es-next-tools/date';

const newDate = addDays(new Date('2023-05-01'), 5); // 2023-05-06
const formattedDate = format(new Date(), 'YYYY-MM-DD'); // e.g., '2024-10-01'
```

### Array Utilities
```typescript
import { unique, intersection } from 'es-next-tools/array';

const uniqueArray = unique([1, 2, 2, 3, 4]); // [1, 2, 3, 4]
const commonElements = intersection([1, 2, 3], [2, 3, 4]); // [2, 3]
```

### Object Utilities
```typescript
import { pick, omit } from 'es-next-tools/object';

const obj = { a: 1, b: 2, c: 3 };
const picked = pick(obj, ['a', 'c']); // { a: 1, c: 3 }
const omitted = omit(obj, ['b']); // { a: 1, c: 3 }
const omitted_v2_remastered = omit(obj, (k, v) => v !== ~~(Math.random() * 3 + 1));
// { b: 2, c: 3 } - for example
```

### Function Utilities
```typescript
import { memoize, memoizeAsync, once } from 'es-next-tools/function';

// Memoization
let counter = 0;
const increment = memoize((num: number) => {
  counter += num;
  return counter;
});

console.log(increment(1)); // 1
console.log(increment(1)); // 1
console.log(increment(2)); // 3

// Asynchronous memoization
let asyncCounter = 0;
const asyncIncrement = memoizeAsync(async (num: number) => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  asyncCounter += num;
  return asyncCounter;
});

asyncIncrement(1).then(result => console.log(result)); // 1
asyncIncrement(1).then(result => console.log(result)); // 1
asyncIncrement(2).then(result => console.log(result)); // 3

// Example using await
(async () => {
  const result1 = await asyncIncrement(1);
  console.log(result1); // 1
  const result2 = await asyncIncrement(1);
  console.log(result2); // 1
  const result3 = await asyncIncrement(2);
  console.log(result3); // 3
})();

// Once
function greet(name: string) {
  return `Hello, ${name}!`;
}

const greetOnce = once(greet);
console.log(greetOnce('Arthur Morgan')); // Hello, Arthur Morgan!
console.log(greetOnce('Steve')); // Hello, Arthur Morgan!
```

### Data Structures
### Deque Example
```typescript
import { Deque } from 'es-next-tools/classes';
const deque = new Deque<number>();
deque.addBack(1); // Adding 1 to the back
deque.addFront(2); // Adding 2 to the front
deque.addBack(3); // Adding 3 to the back
console.log(deque.removeFront()); // 2 - Removing the front element
console.log(deque.removeBack()); // 3 - Removing the back element
console.log(deque.peekFront()); // 1 - Peeking the front element
console.log(deque.peekBack()); // 1 - Peeking the back element
```

### Priority Queue Example
```typescript
import { PriorityQueue } from 'es-next-tools/classes';
const priorityQueue = new PriorityQueue<string>();
priorityQueue.enqueue('task1', 2); // Adding 'task1' with priority 2
priorityQueue.enqueue('task2', 1); // Adding 'task2' with priority 1
priorityQueue.enqueue('task3', 3); // Adding 'task3' with priority 3
console.log(priorityQueue.dequeue()); // 'task2' - The highest priority (lowest number) is processed first
console.log(priorityQueue.dequeue()); // 'task1' - Next highest priority
```

### Graph Example
```typescript
import { Graph } from 'es-next-tools/classes';
const graph = new Graph();
graph.addVertex('A'); // Adding vertex A
graph.addVertex('B'); // Adding vertex B
graph.addVertex('C'); // Adding vertex C
graph.addEdge('A', 'B'); // Connecting A and B
graph.addEdge('A', 'C'); // Connecting A and C
console.log(graph.getNeighbors('A')); // ['B', 'C'] - Getting the neighbors of A
console.log(graph.dfs('A')); // Depth-first search starting from A
```

### Linked List Example
```typescript
import { LinkedList } from 'es-next-tools/classes';
const linkedList = new LinkedList<number>();
linkedList.append(1).append(2).append(3); // Appending values
console.log(linkedList.contains(2)); // true - Checking if 2 is in the list
linkedList.remove(2); // Removing value 2
console.log(linkedList.contains(2)); // false - Checking if 2 is still in the list
console.log(linkedList.serialize()); // Serializing the linked list
```

### Circular Buffer Example
```typescript
import { CircularBuffer } from 'es-next-tools/classes';
const circularBuffer = new CircularBuffer<number>(3); // Creating a circular buffer with capacity 3
circularBuffer.add(1);
circularBuffer.add(2);
circularBuffer.add(3);
console.log(circularBuffer.remove()); // 1 - Removing the oldest item
circularBuffer.add(4); // Overwriting the oldest item
console.log(circularBuffer.getSize()); // 3 - Current size of the buffer
```

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
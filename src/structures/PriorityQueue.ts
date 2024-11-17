/**
 * Represents a priority queue data structure.
 * @template T The type of elements in the priority queue.
 * @example
 * const pq = new PriorityQueue<string>();
 * pq.enqueue('task1', 2).enqueue('task2', 1);
 * console.log(pq.dequeue()); // 'task2'
 */
export class PriorityQueue<T> {
  private items: { value: T; priority: number }[] = [];

  /**
   * Adds an item to the priority queue with the specified priority.
   * @param {T} item - The item to add to the priority queue.
   * @param {number} priority - The priority of the item (lower numbers indicate higher priority). Default: 1
   * @returns {PriorityQueue<T>} The priority queue instance for chaining.
   */
  enqueue(item: T, priority: number = 1): PriorityQueue<T> {
    const newItem = { value: item, priority };
    let index = this.items.findIndex((i) => i.priority > priority);
    if (index === -1) {
      this.items.push(newItem);
    } else {
      this.items.splice(index, 0, newItem);
    }

    return this;
  }

  /**
   * Removes and returns the item with the highest priority from the queue.
   * @returns {T} The item with the highest priority, or undefined if the queue is empty.
   * @throws {Error} If the priority queue is empty.
   */
  dequeue(): T {
    if (this.isEmpty()) {
      throw new Error('Priority queue is empty');
    }
    return this.items.shift()!.value;
  };

  /**
   * Returns the number of items in the priority queue.
   * @returns {number} The size of the priority queue.
   */
  size(): number {
    return this.items.length;
  }

  /**
   * Checks if the priority queue is empty.
   * @returns {boolean} True if the priority queue is empty, false otherwise.
   */
  isEmpty(): boolean {
    return this.items.length === 0;
  }

  /**
   * Returns the item with the highest priority without removing it.
   * @returns {T | undefined} The item with the highest priority, or undefined if the queue is empty.
   */
  peek(): T | undefined {
    return this.isEmpty() ? undefined : this.items[0].value;
  }

  /**
   * Checks if the priority queue contains a specific item.
   * @param {T} item - The item to check for.
   * @returns {boolean} True if the item is in the priority queue, false otherwise.
   */
  contains(item: T): boolean {
    let left = 0;
    let right = this.items.length - 1;

    while (left <= right) {
      const mid = ~~((left + right) / 2);
      const midValue = this.items[mid].value;

      if (midValue === item) return true; // Element found.
      else if (midValue < item) left = mid + 1; // Search in the right half.
      else right = mid - 1; // Search in the left half
    }

    return false; // Element not found.
  }

  /**
   * Changes the priority of an existing item.
   * @param {T} item - The item whose priority is to be changed.
   * @param {number} newPriority - The new priority for the item.
   * @returns {boolean} True if the priority was changed, false if the item was not found.
   */
  changePriority(item: T, newPriority: number): boolean {
    const index = this.items.findIndex(i => i.value === item);
    if (index === -1) return false; // Item not found.

    const oldItem = this.items[index];
    this.items.splice(index, 1); // Remove the item.
    this.enqueue(oldItem.value, newPriority); // Reinsert with new priority.

    return true;
  }

  /**
   * Removes a specific item from the priority queue.
   * @param {T} item - The item to remove.
   * @returns {T | boolean} The Value of the removed item if the item was removed, false otherwise.
   */
  remove(item: T): T | boolean {
    const index = this.items.findIndex(i => i.value === item);
    if (index === -1) return false;

    return this.items.splice(index, 1)[0].value;
  }

  /**
   * Merges another priority queue into this one.
   * @param {PriorityQueue<T>} otherQueue - The other priority queue to merge.
   */
  merge(otherQueue: PriorityQueue<T>): void {
    otherQueue.items.forEach(item => this.enqueue(item.value, item.priority));
  }

  /**
   * Serializes the priority queue to a JSON string.
   * @returns {string} The serialized priority queue.
   */
  serialize(): string {
    return JSON.stringify(this.items);
  }


  /**
   * Deserializes a JSON string to populate the priority queue.
   * @param data - The JSON string to deserialize.
   */
  deserialize(data: string): void {
    this.items = JSON.parse(data);
  }
}
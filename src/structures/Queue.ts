/**
 * Represents a queue data structure.
 * @template T The type of elements in the queue.
 * @example
 * const queue = new Queue<number>();
 * queue.enqueue(1).enqueue(2);
 * console.log(queue.dequeue()); // 1
 */
export class Queue<T> {
  private items: T[] = [];

  /**
   * Adds an item to the end of the queue.
   * @param {T} item - The item to add to the queue.
   * @returns {Queue<T>} The queue instance for chaining.
   */
  enqueue(item: T): this {
    this.items.push(item);
    return this;
  }

  /**
   * Removes and returns the item at the front of the queue.
   * @returns {T} The item at the front of the queue.
   * @throws {Error} If the queue is empty.
   */
  dequeue(): T {
    if (this.isEmpty()) {
      throw new Error('Queue is empty.');
    }
    return this.items.shift()!;
  }

  /**
   * Returns the number of items in the queue.
   * @returns {number} The size of the queue.
   */
  size(): number {
    return this.items.length;
  }

  /**
   * Returns the item at the front of the queue without removing it.
   * @returns {T | undefined} The item at the front of the queue, or undefined if the queue is empty.
   */
  peek(): T | undefined {
    return this.items[0];
  }

  /**
   * Checks if the queue is empty.
   * @returns {boolean} True if the queue is empty, false otherwise.
   */
  isEmpty(): boolean {
    return this.items.length === 0;
  }

  /**
   * Checks if the queue contains a specific item.
   * @param {T} item - The item to check for.
   * @returns {boolean} True if the item is in the queue, false otherwise.
   */
  contains(item: T): boolean {
    return this.items.includes(item);
  }

  /**
   * Creates a copy of the queue.
   * @returns {Queue<T>} A new queue instance with the same items.
   */
  copy(): Queue<T> {
    const newQueue = new Queue<T>();
    newQueue.items = [...this.items];
    return newQueue;
  }

  /**
   * Serializes the queue to a JSON string.
   * @returns {string} The serialized queue.
   */
  serialize(): string {
    return JSON.stringify(this.items);
  }

  /**
   * Deserializes a JSON string to populate the queue.
   * @param {string} data - The JSON string to deserialize.
   */
  deserialize(data: string): void {
    this.items = JSON.parse(data);
  }
}
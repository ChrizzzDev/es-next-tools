/**
 * Represents a circular buffer data structure.
 * @template T The type of elements in the circular buffer.
 */
export class CircularBuffer<T> {
  private buffer: T[];
  private head: number = 0;
  private tail: number = 0;
  private size: number = 0;
  private capacity: number;

  /**
   * Creates a circular buffer with a specified capacity.
   * @param {number} capacity - The maximum number of items the buffer can hold.
   */
  constructor(capacity: number) {
    this.capacity = capacity;
    this.buffer = new Array(capacity);
  }

  /**
   * Adds an item to the buffer.
   * @param {T} item - The item to add.
   */
  add(item: T): void {
    this.buffer[this.tail] = item;
    this.tail = (this.tail + 1) % this.capacity;
    if (this.size < this.capacity) {
      this.size++;
    } else {
      this.head = (this.head + 1) % this.capacity; // Overwrite the oldest item
    }
  }

  /**
   * Removes and returns the oldest item from the buffer.
   * @returns {T | undefined} The oldest item, or undefined if the buffer is empty.
   */
  remove(): T | undefined {
    if (this.size === 0) return undefined;
    const item = this.buffer[this.head];
    this.head = (this.head + 1) % this.capacity;
    this.size--;
    return item;
  }

  /**
   * Returns the current size of the buffer.
   * @returns {number} The number of items in the buffer.
   */
  getSize(): number {
    return this.size;
  }

  /**
   * Checks if the buffer is empty.
   * @returns {boolean} True if the buffer is empty, false otherwise.
   */
  isEmpty(): boolean {
    return this.size === 0;
  }
}
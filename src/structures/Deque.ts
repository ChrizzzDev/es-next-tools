/**
 * Represents a double-ended queue (deque) data structure.
 * @template T The type of elements in the deque.
 */
export class Deque<T> {
  private items: T[] = [];

  /**
   * Adds an item to the front of the deque.
   * @param {T} item - The item to add to the front.
   */
  addFront(item: T): void {
    this.items.unshift(item);
  }

  /**
   * Adds an item to the back of the deque.
   * @param {T} item - The item to add to the back.
   */
  addBack(item: T): void {
    this.items.push(item);
  }

  /**
   * Removes and returns the item from the front of the deque.
   * @returns {T | undefined} The item removed from the front, or undefined if empty.
   */
  removeFront(): T | undefined {
    return this.items.shift();
  }

  /**
   * Removes and returns the item from the back of the deque.
   * @returns {T | undefined} The item removed from the back, or undefined if empty.
   */
  removeBack(): T | undefined {
    return this.items.pop();
  }

  /**
   * Returns the item at the front of the deque without removing it.
   * @returns {T | undefined} The item at the front, or undefined if empty.
   */
  peekFront(): T | undefined {
    return this.items[0];
  }

  /**
   * Returns the item at the back of the deque without removing it.
   * @returns {T | undefined} The item at the back, or undefined if empty.
   */
  peekBack(): T | undefined {
    return this.items[this.items.length - 1];
  }

  /**
   * Checks if the deque is empty.
   * @returns {boolean} True if the deque is empty, false otherwise.
   */
  isEmpty(): boolean {
    return this.items.length === 0;
  }

  /**
   * Returns the number of items in the deque.
   * @returns {number} The size of the deque.
   */
  size(): number {
    return this.items.length;
  }
}
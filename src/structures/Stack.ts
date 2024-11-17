/**
 * Represents a stack data structure.
 * @template T The type of elements in the stack.
 * @example
 * const stack = new Stack<number>();
 * stack.push(1).push(2);
 * console.log(stack.pop()); // 2
 */
export class Stack<T> {
  private items: T[] = [];
  private itemSet: Set<T> = new Set();

  /**
   * Pushes an item onto the top of the stack.
   * @param {T} item - The item to push onto the stack.
   * @returns {T} The item that was pushed.
   */
  push(item: T): T {
    this.items.push(item);
    this.itemSet.add(item);

    return item;
  }

  /**
   * Removes and returns the item at the top of the stack.
   * @returns {T} The item at the top of the stack, or undefined if the stack is empty.
   * @throws {Error} If the stack is empty;
   */
  pop(): T {
    if (this.isEmpty()) {
      throw new Error('Stack is emtpy.');
    }

    const item = this.items.pop();
    if (item !== undefined) this.itemSet.delete(item);
    return item!;
  }

  /**
   * Returns the number of items in the stack.
   * @returns {number} The size of the stack.
  */
  size(): number {
    return this.items.length;
  }

  /**
   * Returns the item at the top of the stack without removing it.
   * @returns {T | undefined} The item at the top of the stack, or undefined if the stack is empty.
   */
  peek(): T | undefined {
    return this.items[this.items.length - 1];
  }

  select(item: number) {
    return this.items[item];
  }

  /**
   * Checks if the stack is empty.
   * @returns {boolean} True if the stack is empty, false otherwise.
   */
  isEmpty(): boolean {
    return this.items.length === 0;
  }

  /**
   * Checks if the stack contains a specific item.
   * @param {T} item - The item to check for.
   * @returns {boolean} True if the item is in the stack, false otherwise.
   */
  contains(item: T): boolean {
    return this.itemSet.has(item);
  }
}
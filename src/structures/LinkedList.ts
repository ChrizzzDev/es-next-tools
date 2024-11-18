/**
 * Represents a node in a linked list.
 * @template T The type of value stored in the node.
 */
export class Node<T> {
  value: T;
  next: Node<T> | null = null;

  /**
   * Creates a new node.
   * @param {T} value - The value to be stored in the node.
   */
  constructor(value: T) {
    this.value = value;
  }
}

/**
 * Represents a singly linked list.
 * @template T The type of elements in the linked list.
 * @example
 * const list = new LinkedList<number>();
 * list.append(1).append(2);
 * console.log(list.toArray()); // [1, 2]
 */
export class LinkedList<T> {
  head: Node<T> | null = null;

  /**
   * Appends a value to the end of the linked list.
   * @param {T} value - The value to append.
   * @returns {LinkedList<T>} The linked list instance for chaining.
   */
  append(value: T): this {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    return this;
  }

  /**
   * Checks if the linked list contains a specific value.
   * @param {T} value - The value to check for.
   * @returns {boolean} True if the value is in the linked list, false otherwise.
   */
  contains(value: T): boolean {
    let current = this.head;
    while (current) {
      if (current.value === value) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  /**
   * Removes a value from the linked list.
   * @param {T} value - The value to remove.
   * @returns {boolean} True if the value was removed, false otherwise.
   */
  remove(value: T): boolean {
    if (!this.head) return false;

    if (this.head.value === value) {
      this.head = this.head.next;
      return true;
    }

    let current = this.head;
    while (current.next) {
      if (current.next.value === value) {
        current.next = current.next.next;
        return true;
      }
      current = current.next;
    }
    return false;
  }

  /**
   * Inserts a value at a specific index in the linked list.
   * @param {T} value - The value to insert.
   * @param {number} index - The index at which to insert the value.
   * @returns {LinkedList<T>} The linked list instance for chaining.
   */
  insertAt(value: T, index: number): this {
    const newNode = new Node(value);
    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
      return this;
    }

    let current = this.head;
    let currentIndex = 0;

    while (current && currentIndex < index - 1) {
      current = current.next;
      currentIndex++;
    }

    if (current) {
      newNode.next = current.next;
      current.next = newNode;
    }

    return this;
  }

  /**
   * Serializes the linked list to a JSON string.
   * @returns {string} The serialized linked list.
   */
  serialize(): string {
    const result: T[] = [];
    let current = this.head;
    while (current) {
      result.push(current.value);
      current = current.next;
    }
    return JSON.stringify(result);
  }

  /**
   * Deserializes a JSON string to populate the linked list.
   * @param {string} data - The JSON string to deserialize.
   */
  deserialize(data: string): void {
    const values: T[] = JSON.parse(data);
    this.head = null; // Clear the current list
    values.forEach(value => this.append(value)); // Append each value
  }

  /**
   * Searches for a value in the linked list and returns its index.
   * @param {T} value - The value to search for.
   * @returns {number} The index of the value, or -1 if not found.
   */
  search(value: T): number {
    let curr = this.head;
    let index = 0;

    while (curr) {
      if (curr.value === value) return index;
      curr = curr.next;
      index++;
    }
    return -1;
  }
}
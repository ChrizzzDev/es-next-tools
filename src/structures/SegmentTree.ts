/**
 * Represents a segment tree for range queries.
 */
export class SegmentTree {
  private tree: number[];
  private n: number;

  constructor(data: number[]) {
    this.n = data.length;
    this.tree = new Array(2 * this.n);
    this.build(data);
  }

  private build(data: number[]): void {
    // Fill the leaves of the tree
    for (let i = 0; i < this.n; i++) {
      this.tree[this.n + i] = data[i];
    }
    // Build the tree by calculating parents
    for (let i = this.n - 1; i > 0; i--) {
      this.tree[i] = this.tree[i * 2] + this.tree[i * 2 + 1];
    }
  }

  /**
   * Updates a value in the segment tree.
   * @param {number} index - The index to update.
   * @param {number} value - The new value.
   */
  update(index: number, value: number): void {
    index += this.n; // Move to the leaf
    this.tree[index] = value;

    // Update parents
    while (index > 1) {
      index = Math.floor(index / 2);
      this.tree[index] = this.tree[index * 2] + this.tree[index * 2 + 1];
    }
  }

  /**
   * Queries the sum in a range [left, right).
   * @param {number} left - The left index (inclusive).
   * @param {number} right - The right index (exclusive).
   * @returns {number} The sum in the range.
   */
  query(left: number, right: number): number {
    let sum = 0;
    left += this.n; // Move to the leaf
    right += this.n; // Move to the leaf

    while (left < right) {
      if (left % 2 === 1) {
        sum += this.tree[left++];
      }
      if (right % 2 === 1) {
        sum += this.tree[--right];
      }
      left = Math.floor(left / 2);
      right = Math.floor(right / 2);
    }
    return sum;
  }
}
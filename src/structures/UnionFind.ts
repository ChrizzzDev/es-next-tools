/**
 * Represents a Union-Find (Disjoint Set) data structure.
 */
export class UnionFind {
  private parent: number[];
  private rank: number[];

  /**
   * Creates a Union-Find structure with a specified size.
   * @param {number} size - The number of elements in the structure.
   */
  constructor(size: number) {
    this.parent = Array.from({ length: size }, (_, i) => i);
    this.rank = Array(size).fill(1);
  }

  /**
   * Finds the root of the set containing the element.
   * @param {number} element - The element to find.
   * @returns {number} The root of the set.
   */
  find(element: number): number {
    if (this.parent[element] !== element) {
      this.parent[element] = this.find(this.parent[element]); // Path compression
    }
    return this.parent[element];
  }

  /**
   * Unites two sets.
   * @param {number} element1 - The first element.
   * @param {number} element2 - The second element.
   */
  union(element1: number, element2: number): void {
    const root1 = this.find(element1);
    const root2 = this.find(element2);

    if (root1 !== root2) {
      // Union by rank
      if (this.rank[root1] > this.rank[root2]) {
        this.parent[root2] = root1;
      } else if (this.rank[root1] < this.rank[root2]) {
        this.parent[root1] = root2;
      } else {
        this.parent[root2] = root1;
        this.rank[root1]++;
      }
    }
  }

  /**
   * Checks if two elements are in the same set.
   * @param {number} element1 - The first element.
   * @param {number} element2 - The second element.
   * @returns {boolean} True if they are in the same set, false otherwise.
   */
  connected(element1: number, element2: number): boolean {
    return this.find(element1) === this.find(element2);
  }
}
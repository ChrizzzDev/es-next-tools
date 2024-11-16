/**
 * Represents a matrix data structure.
 * @template T The type of elements in the matrix.
 */
export class Matrix<T> {
  private data: T[][];

  constructor(rows: number, cols: number) {
    this.data = Array.from({ length: rows }, () => Array(cols).fill(null));
  }

  /**
   * Sets a value at a specific position in the matrix.
   * @param {number} row - The row index.
   * @param {number} col - The column index.
   * @param {T} value - The value to set.
   */
  setValue(row: number, col: number, value: T): void {
    this.data[row][col] = value;
  }

  /**
   * Gets a value from a specific position in the matrix.
   * @param {number} row - The row index.
   * @param {number} col - The column index.
   * @returns {T | null} The value at the specified position, or null if out of bounds.
   */
  getValue(row: number, col: number): T | null {
    return this.data[row]?.[col] ?? null;
  }

  /**
   * Returns the number of rows in the matrix.
   * @returns {number} The number of rows.
   */
  getRows(): number {
    return this.data.length;
  }

  /**
   * Returns the number of columns in the matrix.
   * @returns {number} The number of columns.
   */
  getCols(): number {
    return this.data[0]?.length ?? 0;
  }
}
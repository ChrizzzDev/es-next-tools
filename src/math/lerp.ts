/**
 * Performs linear interpolation between two numbers.
 * @param {number} start - The start value.
 * @param {number} end - The end value.
 * @param {number} t - The interpolation factor (0-1).
 * @returns {number} The interpolated value.
 * @example
 * const result = lerp(0, 10, 0.5); // 5
 */
export function lerp(start: number, end: number, t: number): number {
  return start + (end - start) * t;
}
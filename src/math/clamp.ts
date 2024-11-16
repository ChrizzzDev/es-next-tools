/**
 * Clamps a number within a specified range.
 * @param {number} min - The minimum value of the range.
 * @param {number} value - The value to clamp.
 * @param {number} max - The maximum value of the range.
 * @returns {number} The clamped value.
 * @example
 * const result = clamp(0, 5, 10); // 5
 * const result2 = clamp(0, -5, 10); // 0
 * const result3 = clamp(0, 15, 10); // 10
 */
export function clamp(min: number, value: number, max: number): number {
  return Math.min(max, Math.max(min, value));
};
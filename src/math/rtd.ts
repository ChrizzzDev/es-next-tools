/**
 * Converts radians to degrees.
 * @param {number} rad - The angle in radians.
 * @returns {number} The angle converted to degrees.
 * @example
 * const degrees = rtd(Math.PI); // 180
 */
export function rtd(rad: number): number {
  return (rad * 180) / Math.PI;
};
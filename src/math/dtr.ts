/**
 * Converts degrees to radians.
 * @param {number} deg - The angle in degrees.
 * @returns {number} The angle converted to radians.
 * @example
 * const radians = dtr(180); // 3.141592653589793
 */
export function dtr(deg: number): number {
  return (deg * Math.PI) / 180;
};
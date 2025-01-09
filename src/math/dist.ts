/**
 * Calculates the Euclidean distance between two points.
 * @param {Point} p - The first point
 * @param {Point} q - The second point.
 * @returns The Euclidean distance between the two points.
 * @example
 * dist([1, 2], [4, 6]); // 5 
 */
export function dist(p: Point, q: Point) {
  const [px, py] = p, [qx, qy] = q;
  return Math.sqrt((qx - px)**2 + (qy - py)**2);
}

/**
 * A tuple representing a point in 2D space.
 * @example
 * const point: Point = [1, 2];
 */
export type Point = [number, number];
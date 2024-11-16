export function dist(p: Point, q: Point) {
  const [px, py] = p, [qx, qy] = q;
  return Math.sqrt((qx - px)**2 + (qy - py)**2);
}

export type Point = [number, number];
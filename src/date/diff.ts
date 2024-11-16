/**
 * Calculates the difference in days between two dates.
 * @param {Date} date1 - The first date.
 * @param {Date} date2 - The second date.
 * @returns {number} The number of days between the two dates.
 * @example
 * const date1 = new Date('2023-01-01');
 * const date2 = new Date('2023-01-10');
 * const difference = diff(date1, date2); // 9
 */
export function diff(date1: Date, date2: Date): number {
  const diffTime = Math.abs(date2.getTime() - date1.getTime());
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}
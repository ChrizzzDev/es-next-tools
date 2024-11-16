/**
 * Adds the specified number of days to the date.
 * @param {Date} date - The date to add days to.
 * @param {number} days - The number of days to add (can be negative).
 * @returns {Date} A new Date object with the days added.
 * @example
 * const date = new Date('2023-05-01');
 * const newDate = addDays(date, 5); // 2023-05-06
 */
export function addDays(date: Date, days: number) {
  const _date = new Date(date);
  _date.setDate(_date.getDate() + days);

  return _date;
}
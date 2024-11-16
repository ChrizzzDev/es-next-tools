/**
 * Formats the date according to the specified format string.
 * @param {Date} date - The date to format.
 * @param {string} formatStr - The format string (e.g., 'YYYY-MM-DD hh:mm:ss').
 * @returns {string} The formatted date string.
 * @example
 * const date = new Date('2023-05-01T12:30:45');
 * const formatted = format(date, 'YYYY-MM-DD hh:mm:ss'); // '2023-05-01 12:30:45'
 */
export function format(date: Date, formatStr: string): string {
  const map: Record<string, string> = {
    YYYY: date.getFullYear().toString(),
    MM: ('0' + (date.getMonth() + 1)).slice(-2),
    DD: ('0' + date.getDate()).slice(-2),
    hh: ('0' + date.getHours()).slice(-2),
    mm: ('0' + date.getMinutes()).slice(-2),
    ss: ('0' + date.getSeconds()).slice(-2)
  };

  return formatStr.replace(/YYYY|MM|DD|hh|mm|ss/g, matched => map[matched]);
}
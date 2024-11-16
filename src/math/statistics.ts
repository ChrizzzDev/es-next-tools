/**
 * Calculates the variance of a set of numbers.
 * @param {number[]} numbers - The array of numbers to calculate variance for.
 * @returns {number} The variance of the numbers.
 * @example
 * console.log(variance([1, 2, 3, 4, 5])); // 2
 * console.log(variance([10, 10, 10])); // 0
 */
export function variance(numbers: number[]): number {
  if (numbers.length === 0) return 0;
  
  const mean = numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
  const squareDiffs = numbers.map(num => Math.pow(num - mean, 2));
  return squareDiffs.reduce((sum, diff) => sum + diff, 0) / numbers.length;
}

/**
 * Calculates the standard deviation of a set of numbers.
 * @param {number[]} numbers - The array of numbers to calculate standard deviation for.
 * @returns {number} The standard deviation of the numbers.
 * @example
 * console.log(standardDeviation([2, 4, 4, 4, 5, 5, 7, 9])); // 2
 * console.log(standardDeviation([10, 10, 10])); // 0
 */
export function standardDeviation(numbers: number[]): number {
  return Math.sqrt(variance(numbers));
} 
/** 
 * Calculates the mode(s) of a list of numbers. 
 * @param {...number[]} numbers - The numbers to calculate the mode of. 
 * @returns {number[]} An array of the most frequent numbers (modes). 
 * @example 
 * mode(1, 2, 2, 3, 4); // [2]
*/
export function mode(...numbers: number[]): number[] {
  const frequency: { [key: number]: number } = {};
  let maxFreq = 0;

  for (let i = 0; i < numbers.length; i++) {
    frequency[i] = (frequency[i] || 0) + 1;
    maxFreq = Math.max(maxFreq, frequency[i]);
  }

  return Object.keys(frequency)
    .filter(n => frequency[+n] === maxFreq)
    .map(Number);
}
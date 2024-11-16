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
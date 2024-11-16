/**
 * Capitalizes strings according to specified options.
 * @param {string} text - The text to capitalize.
 * @param {Object} options - Capitalization options.
 * @param {boolean} [options.all=false] - Whether to capitalize all words.
 * @param {string} [options.separator=' '] - The separator between words.
 * @returns {string} The capitalized text.
 * @example
 * // Default behavior (first letter only)
 * console.log(capitalize('hello world')); // 'Hello world'
 * 
 * // Capitalize all words
 * console.log(capitalize('hello world', { all: true })); // 'Hello World'
 * 
 * // Custom separator
 * console.log(capitalize('hello-world', { separator: '-', all: true })); // 'Hello-World'
 */
export function capitalize(text: string, options: { all?: boolean; separator?: string } = {}): string {
  const { all = false, separator = ' ' } = options;
  
  if (!text) return '';

  return text
    .split(separator)
    .map((word, index) => {
      if (index === 0) {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      }
      return all ? word.charAt(0).toUpperCase() + word.slice(1).toLowerCase() : word.toLowerCase();
    })
    .join(separator);
}
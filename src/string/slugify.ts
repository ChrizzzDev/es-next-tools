/**
 * Converts a string into a URL-friendly slug.
 * @param {string} text - The text to convert into a slug.
 * @returns {string} The slugified text.
 * @example
 * console.log(slugify('Hello World!')); // 'hello-world'
 * console.log(slugify('This is a test')); // 'this-is-a-test'
 * console.log(slugify('¡Hola Mundo!')); // 'hola-mundo'
 * console.log(slugify('  Spaces  ')); // 'spaces'
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}
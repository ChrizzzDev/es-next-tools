/**
 * Validates if a string is a valid phone number according to specified format.
 * @param {string} phone - The phone number to validate.
 * @param {'E164' | 'NANP'} format - The format to validate against (E164 or North American Number Plan).
 * @returns {boolean} True if the phone number is valid, false otherwise.
 * @example
 * // E164 format
 * console.log(isPhoneNumber('+14155552671')); // true
 * console.log(isPhoneNumber('+1415555267')); // false
 * 
 * // NANP format
 * console.log(isPhoneNumber('(415) 555-2671', 'NANP')); // true
 * console.log(isPhoneNumber('415-555-2671', 'NANP')); // true
 * console.log(isPhoneNumber('4155552671', 'NANP')); // true
 */
export function isPhoneNumber(phone: string, format: 'E164' | 'NANP' = 'E164'): boolean {
  const patterns = {
    E164: /^\+[1-9]\d{1,14}$/,
    NANP: /^(\+1|1)?[-.\s]?\(?([0-9]{3})\)?[-.\s]?([0-9]{3})[-.\s]?([0-9]{4})$/
  };
  
  if (!phone) return false;
  if (format === 'E164') {
    const isValidE164 = patterns[format].test(phone);
    const digitsAfterCountryCode = phone.replace(/\D/g, '').length - 1;
    return isValidE164 && digitsAfterCountryCode >= 10 && digitsAfterCountryCode <= 15;
  }

  return patterns[format].test(phone);
}
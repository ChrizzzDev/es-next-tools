import { isEmail, isPhoneNumber } from '../src/validation';
import { describe, it, expect } from 'bun:test';

describe('Validation functions', () => {
  describe('isEmail', () => {
    it('should validate correct email addresses', () => {
      expect(isEmail('user@example.com')).toBe(true);
      expect(isEmail('user.name+tag@example.co.uk')).toBe(true);
      expect(isEmail('user@subdomain.example.com')).toBe(true);
    });

    it('should reject invalid email addresses', () => {
      expect(isEmail('invalid.email')).toBe(false);
      expect(isEmail('user@domain')).toBe(false);
      expect(isEmail('@example.com')).toBe(false);
      expect(isEmail('user@.com')).toBe(false);
    });
  });

  describe('isPhoneNumber', () => {
    it('should validate E164 format numbers', () => {
      expect(isPhoneNumber('+14155552671')).toBe(true);
      expect(isPhoneNumber('+442071838750')).toBe(true);
    });

    it('should validate NANP format numbers', () => {
      expect(isPhoneNumber('(415) 555-2671', 'NANP')).toBe(true);
      expect(isPhoneNumber('415-555-2671', 'NANP')).toBe(true);
      expect(isPhoneNumber('4155552671', 'NANP')).toBe(true);
    });

    it('should reject invalid phone numbers', () => {
      expect(isPhoneNumber('+1415555')).toBe(false);
      expect(isPhoneNumber('123-456', 'NANP')).toBe(false);
    });
  });
}); 
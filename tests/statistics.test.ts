import { variance, standardDeviation } from '../src/math/statistics';
import { describe, it, expect } from 'bun:test';

describe('Statistical functions', () => {
  describe('variance', () => {
    it('should calculate variance correctly', () => {
      expect(variance([1, 2, 3, 4, 5])).toBeCloseTo(2);
      expect(variance([10, 10, 10])).toBe(0);
    });

    it('should handle empty arrays', () => {
      expect(variance([])).toBe(0);
    });
  });

  describe('standardDeviation', () => {
    it('should calculate standard deviation correctly', () => {
      expect(standardDeviation([2, 4, 4, 4, 5, 5, 7, 9])).toBeCloseTo(2);
      expect(standardDeviation([10, 10, 10])).toBe(0);
    });

    it('should handle empty arrays', () => {
      expect(standardDeviation([])).toBe(0);
    });
  });
}); 
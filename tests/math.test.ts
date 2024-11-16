import { clamp, dtr, gcd, lcm, lerp, rtd } from '../src/math';
import { describe, it, expect } from 'bun:test';

describe('Math methods', () => {
  describe('clamp', () => {
    it('should limit a number in a range', () => {
      expect(clamp(5, 1, 10)).toBe(5);
      expect(clamp(0, 1, 10)).toBe(1);
      expect(clamp(15, 1, 10)).toBe(10)
    });
  });

  describe('dtr', () => {
    it('should convert degrees to radians', () => {
      expect(dtr(45)).toBeCloseTo(0.785398, 6);
    });
  });

  describe('gcd', () => {
    it('should calc gcd of 2 given numbers', () => {
      expect(gcd(42, 30)).toBe(6);
      expect(gcd(30, 50)).toBe(10);
    });
  });

  describe('lcm', () => {
    it('should calc lcm of 2 given numbers', () => {
      expect(lcm(30, 50)).toBe(150);
      expect(lcm(87, 62)).toBe(5394);
    });
  });

  describe('lerp', () => {
    it('should interpolate correctly between 2 values', () => {
      expect(lerp(0, 10, 0.5)).toBe(5);
      expect(lerp(10, 20, 0.25)).toBe(12.5);
    });
  });

  describe('rtd', () => {
    it('should convert radians to degrees', () => {
      expect(rtd(0.785398)).toBeCloseTo(45);
    });
  });
});
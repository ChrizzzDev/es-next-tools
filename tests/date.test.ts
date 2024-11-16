import { addDays, diff, format } from '../src/date';
import { describe, it, expect } from 'bun:test';

const date = new Date(2024, 9, 1, 19, 41)
describe('Date methods', () => {
  describe('addDays', () => {
    it('should add days to a given date and return it', () => {
      expect(addDays(date, 28).toDateString()).toEqual('Tue Oct 29 2024');
    });
  });

  describe('diff', () => {
    it('should return the difference in days between two given dates', () => {
      const start = new Date(2022, 7, 30);
      expect(diff(start, new Date())).toBeGreaterThanOrEqual(767);
    })
  })

  describe('format', () => {
    it('should return the formatted given date', () => {
      expect(format(date, 'DD-YYYY-MM / hh:mm')).toEqual('01-2024-10 / 19:41')
    });
  });
});
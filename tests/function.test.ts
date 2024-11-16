import { after, before, debounce, memoize, memoizeAsync, once, throttle } from '../src/function';
import { describe, it, expect } from 'bun:test';

describe('Function methods', () => {
  describe('after', () => {
    it('should execute only after 3 calls', () => {
      let counter = 0;
      const increment = after(() => counter++, 3);

      increment();
      increment();
      increment();
      expect(counter).toBe(1);

      increment();
      expect(counter).toBe(2);
    });
  });

  describe('before', () => {
    it('should execute only 3 firsts calls', () => {
      let counter = 0;
      const increment = before(() => counter++, 3);

      increment();
      expect(counter).toBe(1);
      increment();
      expect(counter).toBe(2);
      increment();
      expect(counter).toBe(3);

      // Shouldn't execute
      increment();
      expect(counter).toBe(3);
    });
  });

  describe('debounce', () => {
    it('should execute after pause', (done) => {
      let counter = 0;
      const increment = debounce(() => {
        counter++;
        expect(counter).toBe(1);
        done();
      }, 100);

      increment();
      increment();
      increment();

      setTimeout(() => {
        expect(counter).toBe(1)
        done();
      }, 150);
    });
  });

  describe('memoize', () => {
    it('must store in cache function results', () => {
      let counter = 0;
      const increment = memoize((num: number) => {
        counter += num;
        return counter;
      });

      expect(increment(1)).toBe(1);
      expect(increment(1)).toBe(1);
      expect(counter).toBe(1);
    });

    it('must store in cache function results, even in a loop', () => {
      let results: (number | undefined)[] = [];
      const memoizedFunc = memoize((i: number) => (2 * i + 6) / 2 - i);

      for (let i = 0; i < 10; i++) {
        results.push(memoizedFunc(i));
      }

      const expectedResults: number[] = [];
      for (let i = 0; i < 10; i++) {
        expectedResults.push((2 * i + 6) / 2 - i);
      }

      expect(results).toEqual(expectedResults);

      expect(memoizedFunc(5)).toBe(3);
      expect(memoizedFunc(5)).toBe(3);
    });
  });

  describe('memoizeAsync', () => {
    it('must store in cache async function results', async () => {
      let counter = 0;
      const asyncIncrement = memoizeAsync(async (num: number) => {
        counter += num;
        return counter;
      });

      expect(await asyncIncrement(1)).toBe(1);
      expect(await asyncIncrement(1)).toBe(1);
      expect(counter).toBe(1);
    });
  });

  describe('once', () => {
    it('must execute only once', () => {
      let counter = 0;
      const increment = once(() => {
        counter++;
        return counter;
      });

      increment();
      increment();
      increment();
      expect(counter).toBe(1);
    });
  });


  describe('throttle', () => {
    it('must execute itself in time intervals', () => {
      let counter = 0;
      const increment = throttle(() => {
        counter++;
      }, 100);

      increment();
      increment();
      increment();

      expect(counter).toBe(1);

      setTimeout(() => expect(counter).toBe(2), 150);
    });
  });
});
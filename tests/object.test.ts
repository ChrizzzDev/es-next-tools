import { deepFreeze, filter, flatten, invert, mergeDeep, omit, pick } from '../src/object';
import { describe, it, expect } from 'bun:test';

describe('Object methods', () => {
  describe('deepFreeze', () => {
    it('should freeze deeply an object', () => {
      const obj = { a: 1, b: { c: 3, d: { e: 4 } } };
      const frozenObj = deepFreeze(obj);

      expect(Object.isFrozen(frozenObj)).toBeTruthy();
      expect(Object.isFrozen(frozenObj.b.d)).toBeTruthy();

      try {
        frozenObj.a = 2;
      } catch (e) {};

      expect(frozenObj.a).toBe(1);
    });
  });

  describe('flatten', () => {
    it('should flat an object', () => {
      const obj = { a: 1, b: { c: 2, d: { e: 3 } }, f: 4};
      expect(flatten(obj)).toEqual({ a: 1, 'b.c': 2, 'b.d.e': 3, f: 4 });
    });

    it('should drive no correctly nested objects', () => {
      const obj = { a: 1, b: 2 };
      expect(flatten(obj)).toEqual({ a: 1, b: 2 });
    });
  });

  describe('invert', () => {
    it('should invert object key & values', () => {
      const obj = { a: 1, b: 2, c: 3 };
      expect(invert(obj)).toEqual({ "1": "a", "2": "b", "3": "c" });
    });

    it('should drive duplied values', () => {
      const obj = { a: 1, b: 2, c: 1 };
      expect(invert(obj)).toEqual({ "1": "c", "2": "b" })
    });
  });

  describe('mergeDeep', () => {
    it('should merge deeply two objects', () => {
      const obj1: Record<string, any> = { a: 1, b: { c: 2 } };
      const obj2 = { b: { d: 3 }, e: 4 };
      expect(mergeDeep(obj1, obj2)).toEqual({ a: 1, b: { c: 2, d: 3 }, e: 4 })
    });

    it('should merge multiple deep layers', () => {
      const obj1: Record<string, any> = { a: { b: { c: 1 } } };
      const obj2 = { a: { b: { d: 2 }, e: 3 } };

      expect(mergeDeep(obj1, obj2)).toEqual({ a: { b: { c: 1, d: 2 }, e: 3 } });
    });

    it('should drive primitive values while merging', () => {
      const obj1: Record<string, any> = { a: 1 };
      const obj2 = { a: { b: 2 } };
      expect(mergeDeep(obj1, obj2)).toEqual({ a: { b: 2 } });
    });
  });

  describe('filter', () => {
    it('should filter values', () => {
      const object = { Marcock: { age: 32 }, Socram: { age: 20 }, yowe: { age: 17 } };
      expect(filter(object, ([_, value]) => value.age < 24)).toEqual({ Socram: { age: 20 }, yowe: { age: 17 } });
    });
  });

  describe('omit', () => {
    it('should omit selected values', () => {
      const object = { a: 1, b: 2, c: 3 };
      expect(
        omit(object, (_, v) => v >= 2)
      ).toEqual({ a: 1 });
    });
  });

  describe('pick', () => {
    it('should select only given properties', () => {
      const obj = { a: 1, b: 2, c: 3 };
      expect(pick(obj, ['a', 'c'])).toEqual({ a: 1, c: 3 });
    });

    it('should select only matching properties due to predicate', () => {
      const obj = { a: 1, b: 2, c: 3 };
      expect(pick(obj, (k, v) => v >= 2)).toEqual({ b: 2, c: 3 });
    })
  });
});
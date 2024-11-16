import { contains, reverse } from "../src";
import { capitalize, slugify } from '../src/string';
import { describe, it, expect } from "bun:test";

describe('String methods', () => {
  it('contains', () => {
    const str = 'Hello, world';
    expect(contains(str, 'll')).toBe(true);
    expect(contains(str, ',')).toBe(true);
    expect(contains(str, 'ñ')).toBe(false);
  });

  it('reverse', () => {
    const str = 'a man a plan a canal panama';
    const exp = 'amanap lanac a nalp a nam a';
    expect(reverse(str)).toBe(exp);
    expect(reverse(exp)).toBe(str);
  })
});

describe('String manipulation functions', () => {
  describe('capitalize', () => {
    it('should capitalize first letter by default', () => {
      expect(capitalize('hello world')).toBe('Hello world');
      expect(capitalize('multiple words here')).toBe('Multiple words here');
    });

    it('should capitalize all words when specified', () => {
      expect(capitalize('hello world', { all: true })).toBe('Hello World');
      expect(capitalize('test-case', { all: true, separator: '-' })).toBe('Test-Case');
    });
  });

  describe('slugify', () => {
    it('should convert strings to URL-friendly slugs', () => {
      expect(slugify('Hello World!')).toBe('hello-world');
      expect(slugify('This is a test')).toBe('this-is-a-test');
      expect(slugify('¡Hola Mundo!')).toBe('hola-mundo');
      expect(slugify('  Spaces  ')).toBe('spaces');
    });
  });
});
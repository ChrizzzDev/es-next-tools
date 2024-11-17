export * from './array';
export * from './structures';
export * from './date';
export * from './function';
export * from './math';
export * from './object';
export * from './promise';
export * from './string';

export type AnyFunction = (...args: any[]) => any;

/**
 * Composes functions from left to right.
 * @param {...AnyFunction} fns - The functions to compose.
 * @returns {AnyFunction} A function that runs the composed functions in sequence.
 * @example
 * const addOne = (x: number) => x + 1;
 * const double = (x: number) => x * 2;
 * const addOneThenDouble = pipe(addOne, double);
 * console.log(addOneThenDouble(3)); // 8
 */
export const pipe = (...fns: AnyFunction[]): AnyFunction => (value: any) => fns.reduce((acc, fn) => fn(acc), value);

/**
 * Composes functions from right to left.
 * @param {...AnyFunction} fns - The functions to compose.
 * @returns {AnyFunction} A function that runs the composed functions in reverse sequence.
 * @example
 * const addOne = (x: number) => x + 1;
 * const double = (x: number) => x * 2;
 * const doubleAndAddOne = compose(addOne, double);
 * console.log(doubleAndAddOne(3)); // 7
 */
export const compose = (...fns: AnyFunction[]): AnyFunction => (value: any) => fns.reduceRight((acc, fn) => fn(acc), value);
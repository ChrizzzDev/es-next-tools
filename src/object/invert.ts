/**
 * Inverts the keys and values of an object.
 * Currently, this function only supports PropertyKey type (string | number | symbol)
 * @param {Readonly<T>} object - The object to invert.
 * @returns A new object with the original object's values as keys and keys as values.
 * @example
 * const obj = { a: 1, b: 2, c: 3 };
 * const inverted = invert(obj);
 * // { '1': 'a', '2': 'b', '3': 'c' }
 */
export type Invertible = Record<PropertyKey, PropertyKey>;

export type Inverted<T extends Invertible> = {
  [K in keyof T as T[K]]: K;
};

export function invert<T extends Invertible>(object: Readonly<T>): Inverted<T> {
  const _ = <P, Q>(
    obj: Readonly<Record<string, P>>,
    trans: (entry: [string, P]) => [string, Q]
  ) => {
    const result: Record<string, Q> = {};

    for (const entry of Object.entries(obj)) {
      const [key, value] = trans(entry);

      result[key] = value;
    }

    return result;
  };

  return _(object as Record<string, string>, ([key, value]) => [
    value,
    key,
  ]) as Inverted<T>;
}
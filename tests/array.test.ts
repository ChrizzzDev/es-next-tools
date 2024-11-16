import { groupBy, intersection, unique, zip } from '../src/array';
import { expect, describe, it } from 'bun:test';

const array1 = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5];
const array2 = [1, 4, 3];

const zip1 = [1, 2, 3];
const zip2 = ['a', 'b', 'c'];

const users = [
  {
    name: 'Ethan',
    age: 18
  },
  {
    name: 'Valery',
    age: 21
  },
  {
    name: 'Sapo perro triple hijueputa',
    age: 18
  },
  {
    name: 'Fietu',
    age: 14
  }
];

const result = {
  
  "14": [
    {
      name: "Fietu",
      age: 14,      
    }
  ],
  "18": [
    {
      name: "Ethan",
      age: 18,      
    }, {
      name: "Sapo perro triple hijueputa",
      age: 18,
    }
  ],
  "21": [
    {
      name: "Valery",
      age: 21,
    }
  ]
}

describe('Array methods', () => {
  describe('groupBy', () => {
    it('should group items by predicate', () => {
      expect(groupBy(users, ({ age }) => age)).toEqual(result);
    });
  });

  describe('intersection', () => {
    it('should return repeated values', () => {
      expect(intersection(unique(array1), array2)).toEqual([1, 3, 4]);
    });
  });

  describe('unique', () => {
    it('should return unique values', () => {
      expect(unique(array1)).toEqual([1, 2, 3, 4, 5]);
    });
  });

  describe('zip', () => {
    it('zip should zip...?', () => {
      expect(zip(zip1, zip2)).toEqual([[1, 'a'], [2, 'b'], [3, 'c']]);
    });
  })
})
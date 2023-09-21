const assert = require('assert');
const { sortArray } = require('./program-4');

describe('sortArray', function() {
  it('should sort an array of numbers in ascending order', function() {
    const unsortedArray = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
    const expected = [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9];

    const result = sortArray(unsortedArray);

    assert.deepStrictEqual(result, expected);
  });

  it('should return an empty array when given an empty array', function() {
    const unsortedArray = [];
    const expected = [];

    const result = sortArray(unsortedArray);

    assert.deepStrictEqual(result, expected);
  });

  it('should sort an array of negative numbers in ascending order', function() {
    const unsortedArray = [-3, -1, -4, -1, -5, -9, -2, -6, -5, -3, -5];
    const expected = [-9, -6, -5, -5, -4, -3, -2, -1, -1, -3, -5];

    const result = sortArray(unsortedArray);

    assert.deepStrictEqual(result, expected);
  });
});
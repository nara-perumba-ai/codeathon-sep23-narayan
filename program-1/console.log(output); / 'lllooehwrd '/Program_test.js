const sortStringByFrequency = require('./Program-1');

describe('sortStringByFrequency', () => {
  test('sorts a string with unique characters', () => {
    expect(sortStringByFrequency('tree')).toBe('eetr');
  });

  test('sorts a string with repeated characters', () => {
    expect(sortStringByFrequency('hello')).toBe('llleo');
  });

  test('sorts an empty string', () => {
    expect(sortStringByFrequency('')).toBe('');
  });

  test('sorts a string with whitespace characters', () => {
    expect(sortStringByFrequency('a bb ccc')).toBe('ccc bb a');
  });

  test('sorts a string with special characters', () => {
    expect(sortStringByFrequency('a!b@c#')).toBe('abc!@#');
  });
});
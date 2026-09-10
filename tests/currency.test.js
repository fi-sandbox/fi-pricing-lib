const { toUsd } = require('../src/currency');

describe('toUsd', () => {
  test('converts EUR to USD', () => {
    expect(toUsd(100, 'EUR')).toBe(108);
  });

  test('throws for an unsupported currency', () => {
    expect(() => toUsd(100, 'JPY')).toThrow();
  });
});
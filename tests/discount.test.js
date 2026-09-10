const { bulkDiscountRate } = require('../src/discount');

describe('bulkDiscountRate', () => {
  test('no discount below 10', () => {
    expect(bulkDiscountRate(5)).toBe(0);
  });

  test('5% between 10 and 100', () => {
    expect(bulkDiscountRate(50)).toBe(0.05);
  });

  test('15% at or above 100', () => {
    expect(bulkDiscountRate(100)).toBe(0.15);
  });

  test('rejects a negative quantity', () => {
    expect(() => bulkDiscountRate(-1)).toThrow();
  });
});
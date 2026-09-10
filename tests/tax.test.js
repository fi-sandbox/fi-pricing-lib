const { taxRateForRegion } = require('../src/tax');

describe('taxRateForRegion', () => {
  test('returns the US rate', () => {
    expect(taxRateForRegion('US')).toBe(0.07);
  });

  test('returns 0 for an unknown region', () => {
    expect(taxRateForRegion('ZZ')).toBe(0);
  });
});
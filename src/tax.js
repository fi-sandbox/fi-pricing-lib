const RATES_BY_REGION = {
  US: 0.07,
  EU: 0.2,
  UK: 0.2,
};

function taxRateForRegion(region) {
  return RATES_BY_REGION[region] ?? 0;
}

module.exports = { taxRateForRegion, RATES_BY_REGION };
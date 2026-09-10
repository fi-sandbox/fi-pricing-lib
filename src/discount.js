const TIERS = [
  { minQuantity: 100, rate: 0.15 },
  { minQuantity: 10, rate: 0.05 },
];

function bulkDiscountRate(quantity) {
  if (typeof quantity !== 'number' || quantity < 0) {
    throw new Error('quantity must be a non-negative number');
  }
  const tier = TIERS.find((t) => quantity >= t.minQuantity);
  return tier ? tier.rate : 0;
}

module.exports = { bulkDiscountRate };
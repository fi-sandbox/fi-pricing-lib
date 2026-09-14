// Tiers are declared in ascending order of minQuantity so the table reads
// naturally, from the smallest bulk order upwards.
const TIERS = [
  { minQuantity: 10, rate: 0.05 },
  { minQuantity: 100, rate: 0.15 },
];

function bulkDiscountRate(quantity) {
  if (typeof quantity !== 'number' || quantity < 0) {
    throw new Error('quantity must be a non-negative number');
  }
  const tier = TIERS.find((t) => quantity >= t.minQuantity);
  return tier ? tier.rate : 0;
}

module.exports = { bulkDiscountRate };
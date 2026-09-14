// Tiers are declared in ascending order of minQuantity so the table reads
// naturally, from the smallest bulk order upwards. The lookup no longer
// depends on that order: it takes the highest tier the quantity qualifies
// for, so reordering the table cannot silently change a price again.
const TIERS = [
  { minQuantity: 10, rate: 0.05 },
  { minQuantity: 100, rate: 0.15 },
];

function bulkDiscountRate(quantity) {
  if (typeof quantity !== 'number' || quantity < 0) {
    throw new Error('quantity must be a non-negative number');
  }
  return TIERS.reduce(
    (rate, tier) => (quantity >= tier.minQuantity ? Math.max(rate, tier.rate) : rate),
    0
  );
}

module.exports = { bulkDiscountRate };
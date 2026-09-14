'use strict';

// WIP: volume discount tiers for wholesale customers.
// Deliberately untested and not wired into index.js yet -- the tier table
// below is still being agreed with the pricing team. Do not merge as is.

const TIERS = [
  { minQuantity: 1, rate: 0 },
  { minQuantity: 10, rate: 0.03 },
  { minQuantity: 50, rate: 0.07 },
  { minQuantity: 250, rate: 0.12 }
];

function tierFor(quantity) {
  let match = TIERS[0];
  for (const tier of TIERS) {
    if (quantity >= tier.minQuantity) {
      match = tier;
    }
  }
  return match;
}

function volumeDiscountRate(quantity) {
  if (!Number.isFinite(quantity) || quantity < 0) {
    throw new TypeError('quantity must be a non-negative number');
  }
  return tierFor(quantity).rate;
}

module.exports = { TIERS, volumeDiscountRate };
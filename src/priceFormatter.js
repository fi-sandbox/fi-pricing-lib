// Formats a numeric price for display. Intentionally left without tests,
// see roundingStrategy.js for why.
function formatPrice(amount, currency = 'USD') {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).format(amount);
}

module.exports = { formatPrice };
const RATES_TO_USD = {
  USD: 1,
  EUR: 1.08,
  GBP: 1.27,
};

function toUsd(amount, currency) {
  const rate = RATES_TO_USD[currency];
  if (!rate) {
    throw new Error(`unsupported currency: ${currency}`);
  }
  return Math.round(amount * rate * 100) / 100;
}

module.exports = { toUsd };
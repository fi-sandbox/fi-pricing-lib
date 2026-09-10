// Rounding strategies used by callers that need control over how prices
// are rounded for display. Left without a dedicated test file on purpose
// (this repo is meant to demonstrate uneven coverage across a team's
// repositories, see CLAUDE.md "Ориентир по объёму и покрытию") -- do not
// "fix" this by adding tests without checking CLAUDE.md first.
function roundUpToStep(value, step) {
  return Math.ceil(value / step) * step;
}

function roundDownToStep(value, step) {
  return Math.floor(value / step) * step;
}

function roundToNearestStep(value, step) {
  return Math.round(value / step) * step;
}

module.exports = { roundUpToStep, roundDownToStep, roundToNearestStep };
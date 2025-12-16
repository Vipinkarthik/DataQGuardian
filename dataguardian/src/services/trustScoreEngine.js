export function calculateTrustScore(company, sectorThresholds) {
  let score = 100;

  Object.keys(sectorThresholds).forEach((field) => {
    const expected = sectorThresholds[field];
    const actual = company[field];

    if (actual === undefined) score -= 10;
    else if (actual > expected.max || actual < expected.min) score -= 15;
  });

  return Math.max(score, 0);
}

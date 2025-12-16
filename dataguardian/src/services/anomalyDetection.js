export function detectAnomaly(values) {
  const mean = values.reduce((a, b) => a + b, 0) / values.length;
  const variance =
    values.reduce((a, b) => a + (b - mean) ** 2, 0) / values.length;

  const std = Math.sqrt(variance);

  return values.map((v) => Math.abs(v - mean) > 2 * std);
}

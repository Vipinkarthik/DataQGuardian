export function detectGreenwashing(current, previous) {
  const flags = [];

  Object.keys(current).forEach((metric) => {
    if (!previous[metric]) return;

    const change =
      ((previous[metric] - current[metric]) / previous[metric]) * 100;

    if (change > 40) {
      flags.push({
        metric,
        issue: "Unrealistic sudden improvement",
        change: change.toFixed(2) + "%",
      });
    }
  });

  return flags;
}

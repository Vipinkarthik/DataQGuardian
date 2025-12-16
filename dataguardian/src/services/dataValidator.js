export function validateCompanyData(company) {
  const issues = [];

  Object.keys(company).forEach((key) => {
    if (company[key] === null || company[key] === "") {
      issues.push(`${key} is missing`);
    }
  });

  return issues;
}

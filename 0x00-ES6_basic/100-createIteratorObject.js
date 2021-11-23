export default function createIteratorObject(report) {
  const employeeNames = [];
  for (const department of Object.keys(report.allEmployees)) {
    for (const employee of report.allEmployees[department]) {
      employeeNames.push(employee);
    }
  }

  return employeeNames;
}

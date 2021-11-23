export default function iterateThroughObject(reportWithIterator) {
  let employeeNames = '';
  reportWithIterator.forEach((name, idx) => {
    employeeNames += name;
    if (idx + 1 !== reportWithIterator.length) employeeNames += ' | ';
  });

  return employeeNames;
}

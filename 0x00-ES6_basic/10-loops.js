export default function appendToEachArrayValue(array, appendString) {
  const output = [];

  for (const i of array) {
    output.push(appendString + i);
  }

  return output;
}

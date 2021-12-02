export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  let noOfCalls = weakMap.get(endpoint) || 0;
  noOfCalls += 1;

  weakMap.set(endpoint, noOfCalls);

  if (noOfCalls >= 5) {
    throw new Error('Endpoint load is high');
  }

  return noOfCalls;
}

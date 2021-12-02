export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw Error('Cannot process');
  }
  map.forEach((value, key, update) => {
    if (value === 1) update.set(key, 100);
  });
  return map;
}

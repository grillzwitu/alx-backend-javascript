export default function cleanSet(set, startString) {
  if (!startString || typeof startString !== 'string') return '';

  let output = '';
  set.forEach((ele) => {
    if (ele && ele.startsWith(startString)) output += `${ele.slice(startString.length)}-`;
  });
  return output.slice(0, output.length - 1);
}

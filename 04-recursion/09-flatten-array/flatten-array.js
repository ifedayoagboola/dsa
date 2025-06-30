function flattenArray(arr) {
  let flat = [];

  for (const item of arr) {
    if (Array.isArray(item)) {
      flat = flat.concat(flattenArray(item));
    } else {
      flat.push(item);
    }
  }
  return flat;
}

module.exports = flattenArray;

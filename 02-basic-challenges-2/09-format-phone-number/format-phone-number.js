function formatPhoneNumber(arr) {
  const fmt = arr.join("");

  const prefix = fmt.slice(0, 3);
  const mid = fmt.slice(3, 6);
  const suffix = fmt.slice(6);
  return `(${prefix}) ${mid}-${suffix}`;
}

module.exports = formatPhoneNumber;

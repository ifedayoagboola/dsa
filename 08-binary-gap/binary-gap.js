function binaryGap(int) {
  if (int < 0) {
    return;
  }

  const bin = int.toString(2);

  let firstIndex;
  for (let i = 0; i < bin.length; i++) {
    const char = bin[i];
    if (char === "1") {
      firstIndex = i;
      break;
    }
  }

  let lastIndex;
  for (let i = bin.length; i > 0; i--) {
    const char = bin[i];
    if (char === "1") {
      lastIndex = i;
      break;
    }
  }

  let chars = "";
  for (let i = firstIndex + 1; i < lastIndex; i++) {
    const char = bin[i];
    chars += char;
  }

  const diff = chars.split("1");
  if (!diff) {
    return 0;
  }

  let count = 0;
  for (const oct of diff) {
    if (oct.length > count) {
      count = oct.length;
    }
  }

  return count;
}

module.exports = binaryGap;

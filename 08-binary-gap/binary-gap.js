function binaryGap(int) {
  if (int < 0) {
    return;
  }

  const bin = int.toString(2);
  let firstIndex;
  let lastIndex;
  let chars = 0
  let countArr = []

  for (let i = 0; i < bin.length; i++) {
    const char = bin[i];
    if (char === "1") {
      firstIndex = i;
      break;
    }
  }

   for (let i = bin.length; i > 0; i--) {
    const char = bin[i];
    if (char === "1") {
      lastIndex = i;
      break;
    }
  }


     for (let i = firstIndex; i <= lastIndex; i++) {
            const char = bin[i];
   
   }
  console.log(firstIndex, lastIndex, bin, count);
}

module.exports = binaryGap;

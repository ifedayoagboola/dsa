function wordFrequencyCounter(str) {
  const words = str.toLowerCase().split(/\W+/);
  const frequencyCount = new Map();

  for (const word of words) {
    if (word === "") continue;

    if (frequencyCount.has(word)) {
      frequencyCount.set(word, frequencyCount.get(word) + 1);
    } else {
      frequencyCount.set(word, 1);
    }
  }

  return frequencyCount;
}

module.exports = wordFrequencyCounter;

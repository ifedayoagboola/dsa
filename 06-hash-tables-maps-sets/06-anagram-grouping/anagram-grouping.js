function anagramGrouping(arr) {
  const anagram = new Map();

  for (const word of arr) {
    const sortedWord = word.split("").sort().join("");
    if (anagram.has(sortedWord)) {
      anagram.get(sortedWord).push(word);
    } else {
      anagram.set(sortedWord, [word]);
    }
  }

  return Array.from(anagram.values());
}

module.exports = anagramGrouping;

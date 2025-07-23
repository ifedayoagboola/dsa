function anagramGrouping(arr) {
  const anagram = new Map();

  for (const word of arr) {
    const key = word.split("").sort().join("");

    if (!anagram.has(key)) {
      anagram.set(key, [word]);
    } else {
      anagram.get(key).push(word);
    }

  }

  return Array.from(anagram.values());

}

module.exports = anagramGrouping;

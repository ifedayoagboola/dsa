function countVowels(str) {
  const fmt = str.toLowerCase();
  let vowels = 0;
  for (let i = 0; i < fmt.length; i++) {
    if (
      fmt[i] === "a" ||
      fmt[i] === "e" ||
      fmt[i] === "i" ||
      fmt[i] === "o" ||
      fmt[i] === "u"
    ) {
      vowels++;
    }
  }
  return vowels;
}

module.exports = countVowels;

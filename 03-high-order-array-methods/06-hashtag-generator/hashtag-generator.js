function generateHashtag(str) {
  const fmt = str.split(" ");

  const string = fmt.map((word) => {
    const firstAlp = word.charAt(0).toUpperCase();
    const rest = word.slice(1);

    return firstAlp + rest;
  });

  const hashtag = string.join("");

  if (!str.length || str.length > 140) {
    return false;
  }

  return "#" + hashtag;
}

module.exports = generateHashtag;

function validatePassword(str) {
  const fmt = str.split("");
  const hasUpperCase = fmt.some((char) => {
    return char === char.toUpperCase() && char !== char.toLowerCase();
  });
  const hasLowerCase = fmt.some((char) => {
    return char === char.toLowerCase() && char !== char.toUpperCase();
  });
  const hasInteger = fmt.some((char) => !isNaN(parseInt(char, 10)));

return hasUpperCase && hasLowerCase && hasInteger && str.length >= 8
}

module.exports = validatePassword;

function findMissingLetter(arr) {
  let alp = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let startIndex = alp.indexOf(arr[0]);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== alp[startIndex + i]) {
      return alp[startIndex + i];
    }
  }
}

module.exports = findMissingLetter;

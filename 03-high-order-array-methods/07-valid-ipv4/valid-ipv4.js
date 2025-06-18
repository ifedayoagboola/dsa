const isValidIPv4 = (str) => {
  const arr = str.split(".");

  if (arr.length !== 4) {
    return false
  }

  return arr.every((i) => {
    const octet = Number(i);

    if (octet >= 0 && octet <= 255 && octet.toString() === i) {
      return true;
    }

  });

};

//This is a tricky one. you should use the .every() method because we are only trying to return a boolean.
//If we use the .map() method, an array will be return which will fail the test.

module.exports = isValidIPv4;

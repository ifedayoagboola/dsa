function sumOfEvenSquares(arr) {
  let sum = 0;
  arr.map((i) => {
    if (i % 2 === 0) {
      sum += i ** 2;
    }
  });
  return sum
}

module.exports = sumOfEvenSquares;

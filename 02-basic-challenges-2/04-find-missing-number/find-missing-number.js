function findMissingNumber(arr) {
    if(arr.length === 0){
        return
    }
  let n = arr.length + 1;

  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = arr.reduce((sum, num) => {
    return sum + num;
  }, 0);

  return expectedSum - actualSum

}

module.exports = findMissingNumber;

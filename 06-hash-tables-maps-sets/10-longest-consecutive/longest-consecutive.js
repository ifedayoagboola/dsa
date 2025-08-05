function longestConsecutiveSequence(arr) {
  const numSet = new Set(arr);
  let longestSeq = 0;

  for (num of numSet) {
    if (!numSet.has(num - 1)) {
      let currentNum = num;
      let currentSeq = 1;

      while (numSet.has(currentNum + 1)) {
        currentSeq++;
        currentNum++;
      }
      longestSeq = Math.max(longestSeq, currentSeq);
    }
  }

  return longestSeq;
}

module.exports = longestConsecutiveSequence;

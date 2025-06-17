function highestScoringWord(str) {
  const fmt = str.toLowerCase().split(" ");
  const alp = "abcdefghijklmnopqrstuvwxyz";
  let highestScore = 0;
  let highestIndex = 0
  let score = 0;

  fmt.map((word, i) => {
    for (let i = 0; i < word.length; i++) {
      score += alp.indexOf(word[i]) + 1;
    }

    if(score > highestScore){
        highestScore = score
        highestIndex = i
    }


  });

  return fmt[highestIndex]

}

module.exports = highestScoringWord;

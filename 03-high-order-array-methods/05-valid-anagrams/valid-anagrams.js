function validAnagrams(str1, str2) {

    const ang1 = str1.split('').reduce((acc, char)=> {
        acc[char] = (acc[char] || 0) + 1
        return acc
    },{})

      const ang2 = str2.split('').reduce((acc, char)=> {
        acc[char] = (acc[char] || 0) + 1
        return acc
    },{})

    return Object.keys(ang1).every(
    (char) => ang1[char] === ang2[char]
  );

}

module.exports = validAnagrams;

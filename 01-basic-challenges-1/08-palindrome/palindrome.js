function isPalindrome(input) {
  let formattedInput = "";
  let reversedWord = "";
  const char = input.toLowerCase();
  for (let i = 0; i < char.length; i++) {
    if (
      (char[i]?.charCodeAt(0) >= 48 && char[i]?.charCodeAt(0) <= 57) ||
      (char[i]?.charCodeAt(0) >= 97 && char[i]?.charCodeAt(0) <= 122)
    ) {
      formattedInput += char[i];
    }
  }

  for (let i = formattedInput.length - 1; i >= 0; i--) {
    reversedWord += formattedInput[i];
  }

  const palindrome = reversedWord === formattedInput;
  
  return palindrome;
}

module.exports = isPalindrome;

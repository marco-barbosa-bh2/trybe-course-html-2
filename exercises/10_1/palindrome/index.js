// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  let direct = [];
  let reverse = [];

  if (typeof str === 'string') {
    direct = str.split("");
    reverse = str.split("").reverse();
    return direct.every((element, index) => element === reverse[index]);
  }
  else if (typeof str === 'number') {
    direct = String(str).split("");
    reverse = String(str).split("").reverse();
    return direct.every((element, index) => element === reverse[index]);
  }
  else return undefined;
}

module.exports = palindrome;

// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
letters = str.toLowerCase().split('');
let conta = 0;
letters.forEach(element => {
  if (element === 'a' || element === 'e' || element === 'i'
  || element === 'o' || element === 'u') {
    conta += 1;
  }
});

return conta;
}

console.log(vowels('aeiou'));

module.exports = vowels;

const uppercase = str => str.toUpperCase();
const firstLetter = (str) => {
  let result = str.split("");
  return result[0];
};
const concatStr = (str1, str2) => `${str1}${str2}`;

module.exports = { uppercase, firstLetter, concatStr };
// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  let reverseStr = '';

  if(n >= 0) {
    reverseStr = String(n).split("").reverse();
    return Number(reverseStr.reduce((accumulator,element) => 
    accumulator =  accumulator + `${element}`));
  } else {
    let n1 = -n;
    reverseStr = String(n1).split("").reverse();
    return -Number(reverseStr.reduce((accumulator,element) => 
    accumulator =  accumulator + `${element}`));
  }
}

module.exports = reverseInt;

// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

function fizzBuzz(n) {
  const array = [];
  for (let i = 1; i <= n; i += 1) {
    array.push(i);
  }

  let result = [];
  array.forEach(element => {
    if (element %3 === 0 && element %5 === 0) {
        result.push('fizzbuzz');
    }else if (element %3 === 0) {
        result.push('fizz'); 
    } else if (element %5 === 0) {
        result.push('buzz');
    } else result.push(element);
  });

  result.forEach(element => console.log(element));
}

module.exports = fizzBuzz;

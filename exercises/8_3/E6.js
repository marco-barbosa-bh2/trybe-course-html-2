const assert = require('assert');

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

// implemente seus testes aqui
assert.deepEqual(myFizzBuzz(3),'fizz');
assert.deepEqual(myFizzBuzz(5),'buzz');
assert.deepEqual(myFizzBuzz(15),'fizzbuzz');
assert.deepEqual(myFizzBuzz(16),16);
assert.deepEqual(myFizzBuzz('x'),false);
const assert = require('assert');

function isAbove(num1, num2) {
  return num1 > num2;
}

// implemente seus testes aqui
assert.deepEqual(isAbove(3,2),true);
assert.deepEqual(isAbove(2,3),false);
const assert = require('assert');
// escreva a função addOne para passar nos testes abaixo:
const addOne = (aay) => {
    const array = [];
    for (let i = 0; i < aay.length; i += 1) {
        array[i] = aay[i] + 1;
    }
    return array;
}

//
const myArray = [31, 57, 12, 5];
const unchanged = [31, 57, 12, 5];
const expected = [32, 58, 13, 6];
const output = addOne(myArray);

assert.strictEqual(typeof addOne, 'function');
assert.deepEqual(output, expected);
assert.deepEqual(myArray, unchanged);
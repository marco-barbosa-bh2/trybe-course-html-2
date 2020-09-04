const assert = require('assert');
// escreva a função addAllnumbers para passar nos testes abaixo:
const addAllnumbers = (aay) => {
    const numeros = aay;
    let conta = 0;
    for (let i = 0; i < numeros.length; i += 1) {
      conta += numeros[i];
    }
    return conta;
}
//
const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = addAllnumbers(numbers);

assert.strictEqual(typeof addAllnumbers, 'function');
assert.strictEqual(output, expected);

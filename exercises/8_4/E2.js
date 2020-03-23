const assert = require('assert');
// escreva a função wordLengths para passar nos testes abaixo:
const wordLengths = (frase) => {
    let tamanho = [];
    for (let i = 0; i < frase.length; i += 1){
      tamanho[i] = frase[i].length;
    }
    return tamanho;
}

//
const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepEqual(output, expected);

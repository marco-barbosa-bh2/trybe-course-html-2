const removeVowels = (word) => {
    const characters = word.split('');
    const results = [];
    let saida = '';
  
    for (let i = 0; i < characters.length; i += 1) {
      if (
        characters[i] === 'a' ||
        characters[i] === 'o' ||
        characters[i] === 'i' ||
        characters[i] === 'e' ||
        characters[i] === 'u'
      ) {
        //results.push('_');
      } else {
        results.push(characters[i]);
      }
    }
    for (let index in results){
      saida += `${results[index]}`;
    }
    return saida;
  };
  
  
  const parameter = 'Dayane';
  const result = 'Dyn';
  /*
    Use a variável parameter como parâmetro da função acima, escreva testes para verificar
    se a mesma está retornando a como se vê na variável result e, caso não esteja, altere
    o código para que ele passe nos testes. Lembre-se: testes pequenos e numerosos! Escreva
    um por vez e vá corrigindo a função aos poucos:
  */
 const assert = require('assert');
 assert.strictEqual(removeVowels(parameter),result);
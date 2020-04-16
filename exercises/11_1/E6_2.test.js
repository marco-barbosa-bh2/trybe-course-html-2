const getAnimalByAge = require('./E6_2.js');

describe('Testando promise - findAnimalByName', () => {
    describe('Quando existe o animal com a idade procurada', () => {
      test('Retorne o objeto do animal', () => {
        expect.assertions(1);
        return getAnimalByAge(1).then(animal => {
          expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
        });
      });
    });
  
    describe('Quando não existe o animal com a idade procurada', () => {
      test('Retorna um erro', () => {
        expect.assertions(1);
        return getAnimalByAge(32).catch(error =>
          expect(error).toEqual('Nenhum animal com esse nome!')
        );
      });
    });
  });
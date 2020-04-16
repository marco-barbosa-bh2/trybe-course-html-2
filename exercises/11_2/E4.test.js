const strings = require('./E4.js');
jest.mock('./E4.js');

test('Modificando as funções mockadas uppercase', () => {
  strings.uppercase.mockImplementation(str => str.toLowerCase());
  strings.uppercase('MArCO');

  expect(strings.uppercase).toHaveBeenCalled();
  expect(strings.uppercase).toHaveBeenCalledWith('MArCO');
  expect(strings.uppercase).toHaveBeenCalledTimes(1);
  expect(strings.uppercase('MArCO')).toStrictEqual('marco'); 
});

test('Modificando as funções mockadas firstLetter', () => {
  strings.firstLetter.mockImplementation((str) => {
    let result = str.split("");
    return result[result.length - 1];
  });
  strings.firstLetter('Marco');

  expect(strings.firstLetter).toHaveBeenCalled();
  expect(strings.firstLetter).toHaveBeenCalledWith('Marco');
  expect(strings.firstLetter).toHaveBeenCalledTimes(1);
  expect(strings.firstLetter('Marco')).toStrictEqual('o'); 
});

test('Modificando as funções mockadas concatStr', () => {
  strings.concatStr.mockImplementation((str1, str2, str3) => `${str1}${str2}${str3}`);
  strings.concatStr('Marco', ' é o lindão', ' da Trybe! (Quiçá do Mundo!)');

  expect(strings.concatStr).toHaveBeenCalled();
  expect(strings.concatStr).toHaveBeenCalledWith('Marco', ' é o lindão', ' da Trybe! (Quiçá do Mundo!)');
  expect(strings.concatStr).toHaveBeenCalledTimes(1);
  expect(strings.concatStr('Marco', ' é o lindão', ' da Trybe! (Quiçá do Mundo!)'))
  .toStrictEqual('Marco é o lindão da Trybe! (Quiçá do Mundo!)'); 
});
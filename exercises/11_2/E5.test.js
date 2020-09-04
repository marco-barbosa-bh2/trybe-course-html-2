const strings = require('./E4.js');
// jest.mock('./E4.js');

test('Modificando as funções mockadas uppercase', () => {  
  const spyUpperCase = jest.spyOn(strings, 'uppercase').mockImplementation(str => str.toLowerCase());

  spyUpperCase('MArCO');

  expect(spyUpperCase).toHaveBeenCalled();
  expect(spyUpperCase).toHaveBeenCalledWith('MArCO');
  expect(spyUpperCase).toHaveBeenCalledTimes(1);
  expect(spyUpperCase('MArCO')).toStrictEqual('marco');

  strings.uppercase.mockRestore();
  const spyUpperCase2 = jest.spyOn(strings, 'uppercase');
  spyUpperCase2('marco');

  expect(spyUpperCase2).toHaveBeenCalled();
  expect(spyUpperCase2).toHaveBeenCalledWith('marco');
  expect(spyUpperCase2).toHaveBeenCalledTimes(1);
  expect(spyUpperCase2('marco')).toStrictEqual('MARCO');
});




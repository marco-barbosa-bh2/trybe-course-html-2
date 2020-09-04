const mock = require('./E1.js');
test('Testa randomHundred que gera numeros aleatorios', () => {
  mock.randomHundred = jest.fn()
  .mockReturnValue(10);
  
  expect(mock.randomHundred()).toBe(10);
  expect(mock.randomHundred).toHaveBeenCalled();
  expect(mock.randomHundred).toHaveBeenCalledTimes(1);
});

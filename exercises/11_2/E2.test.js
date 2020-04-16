const rh = require('./E2.js');
jest.mock('./E2.js');

test('testing function call, times called, parameters and returns', () => {
  rh.randomHundred.mockImplementation((a, b) => {
    if (b === 0) {
      return 'Divide by Zero is not permited.'
    }
    return (a / b);
  });
  rh.randomHundred(10,2);
  
  expect(rh.randomHundred).toHaveBeenCalled();
  expect(rh.randomHundred).toHaveBeenCalledTimes(1);
  expect(rh.randomHundred).toHaveBeenCalledWith(10,2);
  expect(rh.randomHundred(10,2)).toBe(5);
});
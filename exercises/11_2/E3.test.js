const rh = require('./E2.js');
jest.mock('./E2.js');

test('testing function call, times called, parameters and returns', () => {
  rh.randomHundred.mockImplementation((a, b, c) => a * b * c);
  rh.randomHundred(10,2,3);
  
  expect(rh.randomHundred).toHaveBeenCalled();
  expect(rh.randomHundred).toHaveBeenCalledTimes(1);
  expect(rh.randomHundred).toHaveBeenCalledWith(10,2,3);
  expect(rh.randomHundred(10,2,3)).toBe(60);
});

test('testing function call, times called, parameters and returns', () => {
    rh.randomHundred.mockReset();
    rh.randomHundred.mockImplementation(a => a * 2);
    rh.randomHundred(15);
    
    expect(rh.randomHundred).toHaveBeenCalled();
    expect(rh.randomHundred).toHaveBeenCalledTimes(1);
    expect(rh.randomHundred).toHaveBeenCalledWith(15);
    expect(rh.randomHundred(15)).toBe(30);
  });
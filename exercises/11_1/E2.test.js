const getUserName = require('./E2.js');

test('A valid user found', () => {
  expect.assertions(1);
  return getUserName(4).then(result => {
    expect(result).toStrictEqual('Mark');
  });
});

test('A valid user not found', () => {
  expect.assertions(1);
  return getUserName(6).catch(error => {
    expect(error).toStrictEqual({"error": "User with 6 not found."});
  });
});

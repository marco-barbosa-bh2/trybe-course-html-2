const getUserName = require('./E3.js');

test('A valid user found', async () => {
  expect.assertions(1);
  const result = await getUserName(4);
  expect(result).toStrictEqual('Mark');
});

test('A valid user not found', async () => {
  expect.assertions(1);
  try {
    await getUserName(6);
  } catch(error) {
    expect(error).toStrictEqual({"error": "User with 6 not found."});
  }
    
});

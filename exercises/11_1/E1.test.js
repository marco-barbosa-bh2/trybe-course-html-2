const uppercase = require('./E1.js');

test('Test if is callback receive an uppercase string', (done) => {
  expect.assertions(1);

  const callback = (data) => {
    expect(data).toStrictEqual('MARCO');
    done();
  };

  uppercase('Marco',callback);
});

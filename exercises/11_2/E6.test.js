const fetch = require('node-fetch');
const fetchDogsPromise = require('./E6.js');

jest.mock('node-fetch');

test('should fetch dogs', () => {
  const dogs = {
    message: 'https://images.dog.ceo/breeds/stbernard/n02109525_14676.jpg',
    status: 'success'
  };

  fetch.mockImplementation(
    () => Promise.resolve({
      json: () => Promise.resolve(dogs),
    })
  );

  return fetchDogsPromise().then((data) =>
    expect(data).toEqual('https://images.dog.ceo/breeds/stbernard/n02109525_14676.jpg')
  );
});

test('should error', () => {
  fetch.mockReset;
  const result = {error: 'Time Out'};

  fetch.mockImplementation(
    () => Promise.reject(`Error: ${result.error}`)
  );

  return fetchDogsPromise().catch((error) => {
    expect(error).toEqual('Error: Time Out')
  });

});
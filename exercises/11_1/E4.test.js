const getRepos = require('./E4.js');

test('Verify if repositores are in result', () => {
  expect.assertions(2);
  const url = 'https://api.github.com/users/tryber/repos';
  return getRepos(url).then(result => {
    expect(result.find(e => e === 'sd-01-week10-movie-card-library-tests')).toStrictEqual('sd-01-week10-movie-card-library-tests');
    expect(result.find(e => e === 'sd-01-week12-movie-card-library-crud')).toStrictEqual('sd-01-week12-movie-card-library-crud');
  });
});
const model = require('../model/model');

const tokenService = async (token) => {
  const regexToken = new RegExp(/[a-z0-9]{12}/i);
  if (token && regexToken.test(token)) {
    return await model.fetchApi();
  }
  return ({
    error: {
      message: 'invalid_token',
      status: 401,
   }
  });
};

module.exports = {
  tokenService,
};
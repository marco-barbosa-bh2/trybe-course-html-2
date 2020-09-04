const service = require('../services/services');

const tokenController = async (req, res, next) => {
  const token = req.headers.authorizaton;
  const result = await service.tokenService(token);
  if (result.error) {
    return next(result.error);
  }
  res.status(200).send(result);
};

module.exports = {
  tokenController,
};
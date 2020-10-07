const models = require('./plantModel');

const getPlantsService = () => {
  const result = models.defaultPlants;
  return result; 
};

module.exports = {
  getPlantsService,
};
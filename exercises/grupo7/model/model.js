const fetch = require('node-fetch');
const fetchApi = async () => {
  try {
    return fetch('https://api.coindesk.com/v1/bpi/currentprice/BTC.json')
    .then((response) => response.json())
  }
  catch (error) {
    throw new Error(error)
  }
};

module.exports = {
  fetchApi,
};
// teste master

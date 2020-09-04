const express = require('express');
const app = express();

app.get('http://cep.la/30575730', (_req, res) => {
  console.log(res.body);
});


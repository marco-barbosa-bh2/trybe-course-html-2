const express = require('express');
const bodyParser = require('body-parser');

const app =  express();
const controller = require('./controllers/controllers');
app.use(bodyParser.json());

app.get('/btc/price', controller.tokenController);

app.use((err, _req, res, _next) => {
  const  { message, status } = err;
  res.status(status).send({ message });
});

const { PORT = 3000 } = process.env;
app.listen(PORT, () => { console.log(`Escutando na porta ${PORT}`); });

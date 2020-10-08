const express = require('express');
const bodyParser = require('body-parser');

const controllers = require('./controllers');

const app = express();

app.use(express.json());

app.use('/books', controllers.books);

app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(500).json({ ok: false, message: 'Algo deu errado', errorMessage: err.message });
});

app.listen(3000, () => {
  console.log('App ouvindo a porta 3000!');
});

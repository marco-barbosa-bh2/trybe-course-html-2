const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/', (req, res) => {
  const { cep } = req.body;
  console.log(cep);
});

app.get('/', (req, res) => {
  res.status(200).render('home', {
    message: null,
  });
});

app.listen(3000, () => { console.log(`Ouvindo na porta 3000!`) });

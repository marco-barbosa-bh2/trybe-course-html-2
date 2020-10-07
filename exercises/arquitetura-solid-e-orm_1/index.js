const express = require('express');
const bodyParser = require('body-parser');

// Chame os controllers
const controllers = require('./plantController');

const app = express();
app.use(cors(), bodyParser.json());

app.use('/', bodyParser.json());

// Chame as rotas
app.get('/plants', controllers.getPlants());

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`ouvindo na porta ${PORT}`));

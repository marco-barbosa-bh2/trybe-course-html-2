const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use('/', bodyParser.json());
app.get('/', (req, res) => res.status(200).send({message: 'I Seeq You!'}));

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log('I am online!');
});

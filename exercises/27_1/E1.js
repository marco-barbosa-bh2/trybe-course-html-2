const express = require('express');
const app = express();

// Ouve a porta 3000
app.listen(3000, () => {
  console.log('Estou ouvindo a porta 3000');
});

// Code copied from https://codeforgeek.com/handle-get-post-request-express-4/
const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

router.get('/',(req, res) => {
  res.sendfile('index.html');
});

router.post('/login',(req, res) => {
  const user_name=req.body.user;
  const password=req.body.password;
  console.log("User name = "+user_name+", password is "+password);
  res.end("yes");
});

app.listen(3000,() => {
  console.log("Started on PORT 3000");
});

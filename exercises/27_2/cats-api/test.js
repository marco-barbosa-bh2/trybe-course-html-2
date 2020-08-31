var express    = require("express");
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  port: 33060,
  password: 'm169870m',
  database: 'pretty_cats',
});
var app = express();

connection.connect(function(err){
if(!err) {
    console.log("Database is connected ... \n\n");  
} else {
    console.log("Error connecting database ... \n\n");  
}
});
app.listen(3000);

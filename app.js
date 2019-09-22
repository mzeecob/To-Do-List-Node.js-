var express = require('express');
var todoController = require('./controllers/todoController');

var app = express();

// set up a view engine
app.set('view engine', 'ejs');

// static files
app.use(express.static('./assets'));



// listen to port
app.listen(3000);
console.log('you are listening to port 3000');
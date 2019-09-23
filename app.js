var express = require('express');
var todoRoute = require('./controllers/todoController');

var app = express();

// set up a view engine
app.set('view engine', 'ejs');

// static files
app.use(express.static('./assets'));

app.use(todoRoute);


// listen to port
app.listen(3000);
console.log('you are listening to port 3000');
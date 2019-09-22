var express = require('express');

var app = express();

// set up a view engine
app.set('view engine', 'ejs');

// static files
app.use('/assets', express.static('/assets'));
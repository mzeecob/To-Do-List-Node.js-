const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const router = require('express').Router();

// connect to the database
mongoose.connect('mongodb://localhost/Todo_database', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// create a schema - like a blue print
const todoSchema = new mongoose.Schema({
    item: String,
});

// create the model
const Todo = mongoose.model('Todo', todoSchema);



// console.log("err while saving", err)

var urlencodedParser = bodyParser.urlencoded({ extended: false })

router.get('/todo', function(req, res){
    
    // get data from mongodb to viw
    Todo.find({}, function(err, data){
        if (err) throw err;
        res.render('todo', {todos: data});
    });
    
});

router.post('/todo', urlencodedParser, function(req, res){

    //get data from view and add it to database 
    var newTo = Todo(req.body).save(function(err, data){
        if (err) throw err;
        res.json(data);
    })
});

router.delete('/todo/:item', function(req, res){

    // delete item from mangodb

    Todo.find({item: req.params.item.replace(/\-/g, "")}).remove(function(err, data){
        if (err) throw err;
        res.json(data);
    });
    
});

module.exports = router;
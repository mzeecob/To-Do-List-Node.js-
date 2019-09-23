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

// add file to the database
var itemOne = Todo({item: 'buy flowers'}).save().then(()=>{
    console.log('item saved');
}).catch(err => console.log("error while saving", err));

// console.log("err while saving", err)


var data = [{item: 'get milk'}, {item: 'walkk dog'}, {item: 'kick some coding ass'}]
var urlencodedParser = bodyParser.urlencoded({ extended: false })

router.get('/todo', function(req, res){
    res.render('todo', {todos: data});
});

router.post('/todo', urlencodedParser, function(req, res){
    data.push(req.body);
    res.json(data);
});

router.delete('/todo/:item', function(req, res){
    data = data.filter(function(todo){

        return todo.item.replace(/ /g, '-') !== req.params.item
    });
    res.json(data);
    
});


module.exports = router;
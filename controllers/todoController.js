var bodyParser = require('body-parser');
var router = require('express').Router();

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
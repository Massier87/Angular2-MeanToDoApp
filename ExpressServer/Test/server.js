var express = require('express')
var app = express()

var mongojs = require('mongojs');
var db = mongojs('mongodb://admin:admin@ds113136.mlab.com:13136/meantodos', ['todos']);
 
app.get('/', function (req, res) {
  res.send('Hello World')
//   db.todos.find(function(err, todos){
//         if(err){
//             res.send(err);

//         } else {
//             res.json(todos);
//         }
//     });
})
 
app.listen(3000, function(){
    console.log('Server started on port 3000...');
});


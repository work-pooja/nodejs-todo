const express = require('express');
const app = express();
const todoController = require('./controllers/todoController.js')
app.set('view engine','ejs')

app.use( express.static('./public'));

//controllers
todoController(app);
    
app.listen(3000, '127.0.0.1');
console.log('You are listening  to port 3000');
let data = [{ id: 1, item: "buy vegetables", complete: false },{ id: 2, item: "Go to market", complete: true }];


const bodyParser = require('body-parser');
const { render } = require('express/lib/response');
const urlencodedParser = bodyParser.urlencoded({extended: false});
const jsonParser = bodyParser.json();

module.exports = (app) =>{

    app.get('/todo', (req,res) =>{
        todos = data.filter(o => o.complete === false)
        completed = data.filter(o => o.complete === true)
        res.render('todo',{ todos: todos, completed: completed })
    });

    app.post('/todo', jsonParser, (req,res) => {
        let newItem = req.body;
        newItem['id'] =  data.length + 1;
        data.push(newItem);;
        res.json(req.body);
    });

    app.put('/todo/:id', jsonParser, (req, res) => {
        // Mark the item in data as complete
        item = data.find(o => o.id == req.body.strID)
        if (req.body.strState == 1){
            item.complete = true;  
        } else{
            item.complete = false;
        }
        //data.pop(item)
        res.json(item)


    })
}
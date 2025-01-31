const Express = require('express');
const app = Express();


app.get('/', function(req, res){
    res.json({"users": ["userOne", "userTwo","UserThree"]})
})

app.listen(5000, function(){
    console.log('Server started on 5000')
})
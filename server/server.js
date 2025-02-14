const Express = require('express')
const mongoose = require('mongoose')
const app = Express()
const databaseName = 'umteste'
const products = require('./api/products.js')


mongoose.connect(`mongodb://localhost/${databaseName}`)
    .then(() => console.log(`connected to database ${databaseName}`))
    .catch(err => console.log(`there is an error: ${err}`))
const BookSchema = mongoose.Schema({
    "title" : {
        type : String,
        require : true
    },
    "auctor" : {
        type : String,
        require : true
    },
    "date" : {
        type: String,
        require : false,
        default: null
    },
    "price" : {
        type : Number,
        require : true
    },
    "related-words" : {
        type : Array,
        require : true
    }
})

mongoose.model('books', BookSchema)
const Book = mongoose.model('books') 

app.use('/api', products)


const port = 8080
app.listen(port, function(){
    console.log(`Server started on localhost:${port}`)
})
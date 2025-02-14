const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()

router.get('/booklist', function(req, res){
    res.json({"users": ["userOne", "userTwo","UserThree"]})
})


module.exports = router
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
// require('dotenv').load()
var cors = require('cors')

app.use(cors()) // Use this after the variable declaration

const port = process.env.PORT || 4000

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

let routes = require('./routes') //importing route
routes(app)

app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
})

app.listen(port)

console.log('RESTful API server started on: ' + port)


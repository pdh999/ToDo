// app.js

var express = require('express');
var bodyParser = require('body-parser');
//This is the link to the routes folder
var toDo = require('./routes/toDo'); // Imports routes for the products
var app = express();


// Set up mongoose connection
var mongoose = require('mongoose')
var dev_db_url = 'mongodb+srv://test:test@cluster0.wur8d.mongodb.net/eduonix?authMechanism=SCRAM-SHA-1';
mongoose.connect(dev_db_url), { useNewUrlParser: true, useUnifiedTopology: true,};
mongoose.Promise = global.Promise
var db = mongoose.connection;

db.on('error',console.error.bind(console,'MongoDB connection error'))


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//This links to the controller
app.use('/toDos', toDo);

var port = 1234;

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});

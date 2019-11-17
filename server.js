const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Gamer = require('./models/GamerAccount.js');
const routes = require('./routes/api');
const bcrypt = require('bcrypt');
const passport = require('passport');
const app = express();

// data formatted in JSON-format
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//calling the function
app.use(routes);
app.use('/api', require('./routes/api'));

//connect to mongodb
mongoose.connect('mongodb://localhost:27017/GamerSweetAccount');
mongoose.Promise = global.Promise; 

app.listen(3000, function() {
    console.log("Running on 3000 :) ... ");
});

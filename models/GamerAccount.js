const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

// creating gamer schema & model 
const Gamer = new Schema({
    email: {
       type: String,
       required: [true, "Please Enter email"] 
    },
    firstName: {
        type: String,
        required: [true, "Enter First Name"]
    },
    lastName:  {
        type: String,
        required: [true, "Enter Last Name"]
    },
    username: {
        type: String,
        required: [true, "Enter username"]
    },
    password: {
        type: String,
        required: [true, "Enter Password"]
    }
});

module.exports = mongoose.model('Gamer', Gamer);
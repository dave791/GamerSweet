const express = require('express');
const router = express.Router();
const Gamer = require('../models/GamerAccount');
const bcrypt = require('bcrypt');

const saltRounds = bcrypt.genSaltSync(10);

// adding Gamer credentials to database.
router.post('/signup', function(req, res) {
    Gamer.create(req.body).then(function(gamer){
        res.send(gamer);

    // hash and store password to DB. 
        bcrypt.hash(req.body.password, saltRounds).then(hash => {
            console.log(`Hash: ${hash}`);
            res.send(hash);
        })
    });
});

// retrieving and finding data credentials from the post.  
router.get('/signup', function(req, res) {
    Gamer.findOne({}, function(err, gamer) {
        if (err) {
            res.status(500).send({error: "Could not fetch Gamer's gist :( "});
        }
        else {
            res.send(gamer);
        }
    });
});

//update password if user forgets password. 
router.put('/forgot-password', function(req,res) {
    //use user's email address to authenticate for new password. 

});

//deactivate account if user decides to delete account. 
    // query through database in order to find user's creds.
    // delete credentials from database. 


// user willing to change username. 
router.put('change-user', function(req, res) {

});






module.exports = router;
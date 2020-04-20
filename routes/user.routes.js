var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');
var VerifyToken = require('./VerifyToken');

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
var User = require('./../models/UserModel');
/**
 * Configure JWT
 */
var jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens
var config = require('../config'); // get config file

router.post('/createuser', function(req, res) {

        User.create({
          Name : req.body.name,
          Email : req.body.email,
          EmpID : req.body.EmpID,
          Address:req.body.address,
          Phone : req.body.phone,
          Desgination: req.body.designation,
          Reported:req.body.reported,
          PassportNo: req.body.PassportNo,
          Joining: req.body.joining,
          EmployeeDocument:req.body.document,
          Password:req.body.password,
          AdminType:req.body.AdminType,
        }, 

        function (err, user) {
          if (err) return res.status(500).send("There was a problem registering the user.");
          console.log(err)

           var transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: 'anjani513devi@gmail.com',
            pass: 'anjanichotu24'
          }
        });

        var mailOptions = {
          to: req.body.email,
          subject: 'Email and Pawword Mail',
          text: "Please Find your details of Regsitration" + "Email ID" +req.body.email + "Password:" + req.body.password
      };
       transporter.sendMail(mailOptions, function(error, info){
          if (error) {
          console.log("erorr related the mail ", error);
          } else {
          console.log('Email sent: ' + info.response);
          }
        });
          res.status(200).send(user);
        });

});
router.post('/Userlogin', function(req, res) {

      User.findOne({ Email: req.body.email }, function (err, user) {
        if (err) return res.status(500).send('Error on the server.');
        if (!user) return res.status(404).send('No user found.');
        
        // check if the password is valid
        var passwordIsValid = req.body.password;
        if (!passwordIsValid) return res.status(401).send({ auth: false, token: null });

        // if user is found and password is valid
        // create a token
        var token = jwt.sign({ id: user._id }, config.secret, {
          expiresIn: 86400 // expires in 24 hours
        });

        // return the information including token as JSON
        res.status(200).send({ auth: true, token: token });
      });

});

router.get('/getlist',VerifyToken, function (req, res) {
        User.find({AdminType:0}, function (err, users) {
            if (err) return res.status(500).send("There was a problem finding the users.");
            res.status(200).send(users);
        });
});
router.get('/viewData/:id', VerifyToken, function (req, res) {
      User.findById(req.params.id, function (err, user) {
          if (err) return res.status(500).send("There was a problem finding the user.");
          if (!user) return res.status(404).send("No user found.");
          res.status(200).send(user);
      });
});

router.put('/edit/:id',VerifyToken, function (req, res) {
        User.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, user) {
            if (err) return res.status(500).send("There was a problem updating the user.");
            res.status(200).send(user);
        });
});
// DELETES A USER FROM THE DATABASE
router.delete('/delete/:id',VerifyToken, function (req, res) {
      User.findByIdAndRemove(req.params.id, function (err, user) {
          if (err) return res.status(500).send("There was a problem deleting the user.");
          res.status(200).send("User: "+ user.name +" was deleted.");
      });
});

module.exports = router;
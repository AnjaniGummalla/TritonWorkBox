var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');
var VerifyToken = require('./VerifyToken');

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
var ProjectModel = require('./../models/ProjectModel');
/**
 * Configure JWT
 */
var jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens
//var bcrypt = require('bcryptjs');
var config = require('../config'); // get config file

router.post('/create',VerifyToken, function(req, res) {

        ProjectModel.create({
          Name : req.body.name,
          DeliveryDeadline : req.body.DeliveryDeadline,
          ProjectCompletion : req.body.ProjectCompletion,
          TestingDeadline : req.body.TestingDeadline,
          Description: req.body.Description,
          Contact: req.body.Contact,
          EmergencyContact:req.body.EmergencyContact,
          Attachment:req.body.Attachment,

        }, 
        function (err, Data) {
          if (err) return res.status(500).send("There was a problem registering the project.");
          console.log("project details",Data)

          res.status(200).send(Data);
        });
});

router.get('/getlist',VerifyToken, function (req, res) {
         ProjectModel.find({}, function (err, Data) {
            if (err) return res.status(500).send("There was a problem finding the data.");
            res.status(200).send(Data);
        });
});
router.get('/view/:id', VerifyToken, function (req, res) {
       ProjectModel.findById(req.params.id, function (err, Data) {
          if (err) return res.status(500).send("There was a problem finding the Data.");
          if (!Data) return res.status(404).send("No Data found.");
          res.status(200).send(Data);
      });
});

router.put('/edit/:id',VerifyToken, function (req, res) {
        ProjectModel.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, Data) {
            if (err) return res.status(500).send("There was a problem updating the Data.");
            res.status(200).send(Data);
        });
});
// DELETES A USER FROM THE DATABASE
router.delete('/delete/:id',VerifyToken, function (req, res) {
      ProjectModel.findByIdAndRemove(req.params.id, function (err, Data) {
          if (err) return res.status(500).send("There was a problem deleting the Data.");
          res.status(200).send("Project deleted Successfully");
      });
});

module.exports = router;
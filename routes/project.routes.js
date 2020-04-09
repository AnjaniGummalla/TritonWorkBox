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

router.post('/project',VerifyToken, function(req, res) {

        ProjectModel.create({
          Name : req.body.name,
          StartDate : req.body.StartDate,
          EndDate : req.body.EndDate,
          Days : req.body.Days,
          Description: req.body.Description,
        }, 
        function (err, Data) {
          if (err) return res.status(500).send("There was a problem registering the project`.");
          console.log("project details",Data)

          res.status(200).send(Data);
        });
});

router.get('projectgetlist',VerifyToken, function (req, res) {
         ProjectModel.find({}, function (err, Data) {
            if (err) return res.status(500).send("There was a problem finding the data.");
            res.status(200).send(Data);
        });
});
router.get('projectview/:id', VerifyToken, function (req, res) {
       ProjectModel.findById(req.params.id, function (err, Data) {
          if (err) return res.status(500).send("There was a problem finding the Data.");
          if (!user) return res.status(404).send("No Data found.");
          res.status(200).send(Data);
      });
});

router.put('projectedit/:id',VerifyToken, function (req, res) {
        ProjectModel.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, Data) {
            if (err) return res.status(500).send("There was a problem updating the Data.");
            res.status(200).send(Data);
        });
});
// DELETES A USER FROM THE DATABASE
router.delete('projectdelete/:id',VerifyToken, function (req, res) {
      ProjectModel.findByIdAndRemove(req.params.id, function (err, Data) {
          if (err) return res.status(500).send("There was a problem deleting the Data.");
          res.status(200).send("Project deleted Successfully");
      });
});

module.exports = router;
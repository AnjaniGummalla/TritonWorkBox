var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');
var VerifyToken = require('./VerifyToken');

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
var AttendenceModel = require('./../models/AttendenceModel');
/**
 * Configure JWT
 */
var jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens
//var bcrypt = require('bcryptjs');
var config = require('../config'); // get config file

router.post('/create',VerifyToken, function(req, res) {

        AttendenceModel.create({
          EmpID : req.body.EmpID,
          EmpName:req.body.EmpName,
          Date : req.body.Date,
          Logintime: req.body.Logintime,
          Logouttime: req.body.Logintime,
          TotalWork: req.body.TotalWork,
          Status: req.body.Status,
        }, 
        function (err, Data) {
          if (err) return res.status(500).send("There was a problem registering the Task`.");
          console.log(err);
          console.log("Task details",Data)

          res.status(200).send(Data);
        });
});

router.get('/getlist',VerifyToken, function (req, res) {
         AttendenceModel.find({}, function (err, Data) {
            if (err) return res.status(500).send("There was a problem finding the data.");
            res.status(200).send(Data);
        }).populate('EmpID');
});
router.get('/view/:id', VerifyToken, function (req, res) {
       AttendenceModel.findById(req.params.id, function (err, Data) {
          if (err) return res.status(500).send("There was a problem finding the Data.");
          if (!user) return res.status(404).send("No Data found.");
          res.status(200).send(Data);
      });
});

router.put('/edit/:id',VerifyToken, function (req, res) {
        AttendenceModel.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, Data) {
            if (err) return res.status(500).send("There was a problem updating the Data.");
            res.status(200).send(Data);
        });
});
// DELETES A USER FROM THE DATABASE
router.delete('/delete/:id',VerifyToken, function (req, res) {
      AttendenceModel.findByIdAndRemove(req.params.id, function (err, Data) {
          if (err) return res.status(500).send("There was a problem deleting the Data.");
          res.status(200).send("Task deleted Successfully");
      });
});

module.exports = router;
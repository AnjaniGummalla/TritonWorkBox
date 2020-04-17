var mongoose = require('mongoose');  
var ProjectSchema = new mongoose.Schema({  
  Name: String,
  EmergencyContact: String,
  Contact:String,
  DeliveryDeadline: Date,
  ProjectCompletion: Date,
  TestingDeadline: Date,
  Description:String,
  Attachment:String,
});
mongoose.model('Project', ProjectSchema);

module.exports = mongoose.model('Project');
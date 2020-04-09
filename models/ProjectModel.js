var mongoose = require('mongoose');  
var ProjectSchema = new mongoose.Schema({  
  Name: String,
  StartDate: Date,
  EndDate: Date,
  Days: Date,
  Description:String,
});
mongoose.model('Project', ProjectSchema);

module.exports = mongoose.model('Project');
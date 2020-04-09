var mongoose = require('mongoose');  
var UserSchema = new mongoose.Schema({  
  Name: String,
  Email:{
  	type: String,
  	unique: true
  },
  EmpID: {
  	type: String,
  	unique: true
  },
  Phone: String,
  Password: String,
  Designation:String,
});
mongoose.model('User', UserSchema);

module.exports = mongoose.model('User');
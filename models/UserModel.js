var mongoose = require('mongoose');
const Schema = mongoose.Schema; 
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
  Password: String,
  
  Address: String,
  
  Phone: String,
 
  Reported: String,
  
  Designation:{ 

  type: Schema.Types.ObjectId,
  ref: 'Desgination',
  
   },
   
   Joining: String,

   PassportNo:String,
   
   EmployeeDocument: String,
    
    AdminType: {
        type: Number,
        enum: [0, 1],
        default: 0
    },
});
mongoose.model('User', UserSchema);

module.exports = mongoose.model('User');
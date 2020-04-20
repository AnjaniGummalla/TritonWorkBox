var mongoose = require('mongoose');
const Schema = mongoose.Schema;
var AttendenceSchema = new mongoose.Schema({  
	  EmpName: {  
	  	type: Schema.Types.ObjectId,
        ref: 'User',
        //required: true
    },
	  EmpID:  {  
	  	type: Schema.Types.ObjectId,
        ref: 'User',
        //required: true
    },
	  Date: Date,
	  Logintime: Date,
	  Logouttime: Date,
	  TotalWork: Number,
	  Status: {
        type: Number,
        enum: [0, 1],
        default: 0
    },
});
mongoose.model('Attendence', AttendenceSchema);

module.exports = mongoose.model('Attendence');
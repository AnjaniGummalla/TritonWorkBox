var mongoose = require('mongoose');
const Schema = mongoose.Schema;
var AssignSchema = new mongoose.Schema({  
	  Project: {  
	  	type: Schema.Types.ObjectId,
        ref: 'Project',
        required: true
    },
	  User:  {  
	  	type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
	  Date: Date,
	  AssignedBy: String,
});
mongoose.model('Assign', AssignSchema);

module.exports = mongoose.model('Assign');
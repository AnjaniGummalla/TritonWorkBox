var mongoose = require('mongoose');
const Schema = mongoose.Schema;
var TestingSchema = new mongoose.Schema({  
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
     Project: {  
	  	type: Schema.Types.ObjectId,
        ref: 'Project',
        //required: true
    },
	  Task:  {  
	  	type: Schema.Types.ObjectId,
        ref: 'Task',
        //required: true
    },
	  Date: Date,
	  
	  TaskDescription: String,
	  
	  SubTask: {  
	  	type: Schema.Types.ObjectId,
        ref: 'Task',
        //required: true
    },
	  subTaskDescription: String,
	  EstimatedTime: Date,
	  CompletedTime: Date,
	  TotalHours: Number,
	  Status: {
        type: Number,
        enum: [0, 1],
        default: 0
    },
});
mongoose.model('Testing', TestingSchema);

module.exports = mongoose.model('Testing');
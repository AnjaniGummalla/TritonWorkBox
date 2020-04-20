var mongoose = require('mongoose');
const Schema = mongoose.Schema;
var TaskRedoSchema = new mongoose.Schema({  
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
	  EstimatedTime: String,
	  CompletedTime: String,
	  TotalHours: String,
	  Status: String,
});
mongoose.model('TaskRedo', TaskRedoSchema);

module.exports = mongoose.model('TaskRedo');
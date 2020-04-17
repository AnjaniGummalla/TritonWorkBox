var mongoose = require('mongoose');
const Schema = mongoose.Schema; 
var TaskSchema = new mongoose.Schema({  
	  TaskNo: {

	  	type:Number,
	  	unique:true
	  }
	  ,
	  Project:{	

       type: Schema.Types.ObjectId,
       ref: 'Project',
	
	 },

	  StartDate: Date,
	  
	  EndDate: Date,
	  
	  EstimatedTime: Date,
	  
	  Title: String,
	  
	  Process: String,
	  
	  Description:String,
	  TotalTime: Date,
	  
	  Status:{
        type: Number,
        enum: [0, 1,2],
        default: 0
    },
	  
	  UnitStatus: {
        type: Number,
        enum: [0, 1,2],
        default: 0
    },
	  
	  SubmitStatus:{
        type: Number,
        enum: [0, 1],
        default: 0
    },
});
mongoose.model('Task', TaskSchema);

module.exports = mongoose.model('Task');
const mongoose = require('mongoose')
const Schema = mongoose.Schema;
//const SoftDelete = require('mongoose-delete');
const EODSchema = new Schema({
    CurrentDate: {
     type: Date,
     //required: true,
    },
    project: {
    type: Schema.Types.ObjectId,
      ref: 'Project',
    },
   EmpID:  {  
	 type: Schema.Types.ObjectId,
      ref: 'User',
    },
    Task:  {  
	 type: Schema.Types.ObjectId,
      ref: 'Task',
    },
    SubTask:
      {  
	 type: Schema.Types.ObjectId,
      ref: 'Task',
    },
    Description:
      {  
	 type: String,
    },
    EstimatedTime:
      {  
	 type: Date,
    },
    CompletedTime:
      {  
	 type: Date,
    },
    TotalWorkingHours:
      {  
	 type: Number,
    },
});

//DesginationSchema.plugin(SoftDelete, { deletedAt: true, deletedBy: true, overrideMethods: 'all' });
const EODModel = mongoose.model('EODReport', EODSchema);

module.exports = EODModel;
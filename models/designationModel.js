const mongoose = require('mongoose')
const Schema = mongoose.Schema;
//const SoftDelete = require('mongoose-delete');
const DesginationSchema = new Schema({
    Name: {
        type: String,
        required: true,
    },
    Roll: {
        type: Array,
        required: true,
    },
});

//DesginationSchema.plugin(SoftDelete, { deletedAt: true, deletedBy: true, overrideMethods: 'all' });
const DesginationModel = mongoose.model('Desgination', DesginationSchema);

module.exports = DesginationModel;
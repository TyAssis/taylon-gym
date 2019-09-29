const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const JobsSchema = new Schema({
    name: String,
    type: String
});

const Jobs = mongoose.model('Jobs', JobsSchema);

module.exports = Jobs;
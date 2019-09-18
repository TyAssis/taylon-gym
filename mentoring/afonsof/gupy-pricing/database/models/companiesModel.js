const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CompaniesSchema = new Schema({
    subdomain: String
});

const Companies = mongoose.model('Companies', CompaniesSchema);

module.exports = Companies;
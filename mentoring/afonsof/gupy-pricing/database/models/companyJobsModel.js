const mongoose = require('mongoose');
const Schema = mongoose.Schema,
      ObjectId = Schema.ObjectId;

const CompaniesJobsSchema = new Schema({
    companyId: ObjectId,
    jobs: {
        jobId: ObjectId,
        applicationCount: Number 
    }
});

const CompaniesJobs = mongoose.model('CompanyJobs', CompaniesJobsSchema);

module.exports = CompaniesJobs;
const gupyDB = require('../database/connect-gupy');
const Company = require('../database/models/companiesModel.js');
const Jobs = require('../database/models/jobsModel.js');
const CompanyJobs = require('../database/models/companyJobsModel.js');

const updateJob = async (jobId, updateDocument) => {
    return await Jobs.findByIdAndUpdate(jobId, updateDocument, {new: true});
};

const updateCompany = async (companyId, updateDocument) => {
    return await Company.findByIdAndUpdate(companyId, updateDocument, {new: true});
};

const updateCompanyJob = async (companyJobId, updateDocument) => {
    return await CompanyJobs.findByIdAndUpdate(companyJobId, updateDocument, {new: true});
};

module.exports = { updateJob, updateCompany, updateCompanyJob };

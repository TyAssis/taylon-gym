const gupyDB = require('../database/connect-gupy');
const Company = require('../database/models/companiesModel.js');
const Jobs = require('../database/models/jobsModel.js');
const CompanyJobs = require('../database/models/companyJobsModel.js');

const deleteJob = async (jobId) => {
    return await Jobs.findByIdAndRemove(jobId);
};

const deleteCompany = async (companyId) => {
    return await Company.findByIdAndRemove(companyId);
};

const deleteCompanyJob = async (companyJobId) => {
    return await CompanyJobs.findByIdAndRemove(companyJobId);
};

module.exports = { deleteJob, deleteCompany, deleteCompanyJob };

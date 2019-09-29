const gupyDB = require('../database/connect-gupy');
const Company = require('../database/models/companiesModel.js');
const Jobs = require('../database/models/jobsModel.js');
const CompanyJobs = require('../database/models/companyJobsModel.js');

const insertDocument = async (model) => {
    return await model.save();
}

const insertCompany = (subdomain) => {
    const company = new Company({ subdomain });
    return insertDocument(company);
}

const insertJob = (name, type) => {
    const job = new Jobs({ name, type });
    return insertDocument(job);
}

const insertCompanyJob = (companyId, jobId) => {
    const companyJobs = new CompanyJobs({ companyId, jobs: { jobId, applicationCount: 0 }});
    return insertDocument(companyJobs);    
};

module.exports = { insertCompany, insertJob, insertCompanyJob };
const gupyDB = require('../database/connect-gupy'); // Q: Porque chamar conexão?
const Companies = require('../database/models/companiesModel.js');
const Jobs = require('../database/models/jobsModel.js');
const CompanyJobs = require('../database/models/companyJobsModel.js');

const models = {
    companies: Companies,
    jobs: Jobs,
    companyJobs: CompanyJobs 
}

// Q: await aqui e na chamada também??
const getDocuments = async (collection, query_object) => {
    return await models[collection].find(query_object);
}

const getDocument = async (collection, query_object) => {
    return await models[collection].findOne(query_object);
}

// Q: Não sei o nome dessas funções, DAO?
const getCompany = (subdomain) => {
    return getDocument('companies', {'subdomain': subdomain});
}

const getJobs = (job_ids) => {
    return getDocuments('jobs', {_id: {$in: job_ids} });
} 

const getCompanyJobs = (company_id) => {
    return getDocuments('companyJobs', {companyId: company_id});
}

module.exports = {
    getJobs,
    getCompanyJobs,
    getCompany
}
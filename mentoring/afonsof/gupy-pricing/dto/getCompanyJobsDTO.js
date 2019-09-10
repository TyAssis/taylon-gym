const { getCompanyJobs } = require('../database/get-document.js');

const getCompanyJobsDTO = async (company_id) => {
    return getCompanyJobs(company_id);
};

module.exports = getCompanyJobsDTO;
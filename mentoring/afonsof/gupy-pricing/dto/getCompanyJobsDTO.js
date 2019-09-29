const { getCompanyJobs } = require('../database/get-document.js');

const getCompanyJobsDTO = async (company_id) => {
    return await getCompanyJobs(company_id);
};

module.exports = getCompanyJobsDTO;
const { getJobs } = require('../database/get-document.js');

const getJobsDTO = async (job_ids) => {
    return await getJobs(job_ids);
};

module.exports = getJobsDTO;
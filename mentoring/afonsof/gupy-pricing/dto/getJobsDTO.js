const { getJobs } = require('../database/get-document.js');

const getJobsDTO = async (job_ids) => {
    const jobs = await getJobs(job_ids);
    return jobs.reduce((acc, cur) => {
        acc[cur._id] = { name: cur.name, type: cur.type}
        return acc;
    }, {});
};

module.exports = getJobsDTO;
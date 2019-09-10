const { calculateJobCost } = require('./costCalculator.js');

const getCompanyPricingData = (companyJobs, jobs) => {
    return Object.values(companyJobs.jobs).map(job => {
        const cost = calculateJobCost(job, jobs[job.jobId].type);
        return {jobName: jobs[job.jobId].name, cost, applicationCount: job.applicationCount};
    });
}

const getTotalAmount = (amounts) => {
    return amounts.reduce((acc,amount) => acc + amount.cost, 0);
};

module.exports = {
    getTotalAmount,
    getCompanyPricingData
};
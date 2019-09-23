const { calculateJobCost } = require('./costCalculator.js');

// Q: Preciso refatorar, pois o getCompanyPricingData agora recebe dados do banco
// porém, dentro dele há o calculateJobCost que também precisa ser refatorado... como proceder?
// Não há teste para o getCompanyPricingData
const getCompanyPricingData = (companyJobs, jobs) => {
    return companyJobs.map(companyJob => {
        // Q: aqui não dá pra ser === ?
        const job = jobs.find(job => job.id == companyJob.jobs.jobId);
        const cost = calculateJobCost(companyJob.jobs, job.type);
        return {jobName: job.name, cost, applicationCount: companyJob.jobs.applicationCount};
    });
}

const getTotalAmount = (amounts) => {
    return amounts.reduce((acc,amount) => acc + amount.cost, 0);
};

module.exports = {
    getTotalAmount,
    getCompanyPricingData
};
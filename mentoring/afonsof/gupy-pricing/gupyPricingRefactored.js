const { getTotalAmount, getAmounts, creditsCalculator, format } = require('./pricingCalculator.js')
const { getJobs } = require('./database/get-document.js');

function calculatePricingData(companyJobs, jobs, companies) {
    const amounts = getAmounts(companyJobs, jobs);
    return {
        companySubdomain: companies[companyJobs.companyId].subdomain,
        credits: creditsCalculator(companyJobs, jobs),
        totalAmount: getTotalAmount(amounts),
        amounts
    };
}

const jobs = {
    "123": { name: "Dev Back End", type: "effective" },
    "456": { name: "Banco de Talentos", type: "talentPool" },
    "789": { name: "Dev Front End", type: "effective" }
};

const companies = {
    "119": { subdomain: 'ambev' }
};

const companyJobs = [{
    companyId: 119,
    jobs: [
        { jobId: 123, applicationCount: 55 },
        { jobId: 456, applicationCount: 35 },
        { jobId: 789, applicationCount: 40 }
    ]
}];

module.exports = {
    calculatePricingData,
    jobs,
    companies,
    companyJobs
};
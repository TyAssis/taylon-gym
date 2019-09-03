const { getTotalAmount, getAmounts } = require('../gupy-pricing/calculators/amountCalculators.js');
const { creditsCalculator } = require('../gupy-pricing/calculators/creditsCalculator');
const { getJobs } = require('./database/get-document.js');
const { companyJobs, jobs, companies } = require('../gupy-pricing/fake-database/fake-data.js')

function calculatePricingData(companyJobs, jobs, companies) {
    const amounts = getAmounts(companyJobs, jobs);

    return {
        companySubdomain: companies[companyJobs.companyId].subdomain,
        credits: creditsCalculator(companyJobs, jobs),
        totalAmount: getTotalAmount(amounts),
        amounts
    };
}

module.exports = {
    calculatePricingData,
};
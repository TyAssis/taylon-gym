const { getTotalAmount, getCompanyPricingData } = require('../gupy-pricing/calculators/amountCalculators.js');
const { creditsCalculator } = require('../gupy-pricing/calculators/creditsCalculator');
const { companyJobs, jobs, companies } = require('../gupy-pricing/fake-database/fake-data.js');

function calculatePricingData(companyJobs, jobs, companies) {
    const companyPricingData = getCompanyPricingData(companyJobs, jobs);

    return {
        companySubdomain: companies.subdomain,
        credits: creditsCalculator(companyJobs, jobs),
        totalAmount: getTotalAmount(companyPricingData),
        companyPricingData
    };
}

module.exports = {
    calculatePricingData,
};
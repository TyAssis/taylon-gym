const { creditsCalculator } = require('./pricingCalculator.js');
const { getTotalAmount } = require('./pricingCalculator.js')

function custo(companyJobs, jobs, companies) {
    let result = `Custo das vagas para ${companies[companyJobs.companyId].subdomain}\n`;
    result += getTotalAmount(companyJobs, jobs);    
    result += `Você ganhou ${creditsCalculator(companyJobs, jobs)} na Gupy\n`;
    return result;
}

const jobs = {
    "123": {name: "Dev Back End", type: "effective"},
    "456": {name: "Banco de Talentos", type: "talentPool"},
    "789": {name: "Dev Front End", type: "effective"}
};

const companies = {
    "119": {subdomain: 'ambev'}
};

const companyJobs = [{
    companyId: 119,
    jobs: [
        {jobId: 123, applicationCount: 55},
        {jobId: 456, applicationCount: 35},
        {jobId: 789, applicationCount: 40}
    ]
}];

//console.log(custo(companyJobs[0], jobs, companies));

module.exports = {
    custo,
    jobs,
    companies,
    companyJobs
};
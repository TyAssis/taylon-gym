const { creditsCalculator } = require('./pricingCalculator.js');
const { jobCostCalculator } = require('./pricingCalculator.js');
const { format } = require('./pricingCalculator.js');

function custo(companyJobs, jobs, companies) {
    let totalAmount = 0;
    let result = `Custo das vagas para ${companies[companyJobs.companyId].subdomain}\n`;

    for (let job of companyJobs.jobs) {
        let value = 0;
        const jobData = jobs[job.jobId];

        value += jobCostCalculator(job, jobData);
        result += `  ${jobData.name}: ${format(value / 100)} (${job.applicationCount} inscrições)\n`;
        totalAmount += value;
    }
    result += `Total devido ${format(totalAmount / 100)}\n`;
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
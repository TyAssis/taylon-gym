const { getTotalAmount, getAmounts, creditsCalculator, format } = require('./pricingCalculator.js')

function custo(companyJobs, jobs, companies) {
    const amounts = getAmounts(companyJobs, jobs);
    return printTxt({
        companySubdomain: companies[companyJobs.companyId].subdomain,
        credits: creditsCalculator(companyJobs, jobs),
        totalAmount: getTotalAmount(amounts),
        amounts
     });
}

const printAmountTxt = ({jobName, cost, applicationCount}) => 
`  ${jobName}: ${format(cost / 100)} (${applicationCount} inscrições)`

const printTxt = ({companySubdomain, credits, totalAmount, amounts }) => {
     return `Custo das vagas para ${companySubdomain}
${amounts.map(printAmountTxt).join('\n')}
Total devido ${format(totalAmount / 100)}
Você ganhou ${credits} na Gupy
`
}

const printAmountHtml = ({jobName, cost, applicationCount}) => 
`<li>${jobName}: ${format(cost / 100)} (${applicationCount} inscrições)</li>`

const printHtml = ({companySubdomain, credits, totalAmount, amounts }) => {
    return `<h1>Custo das vagas para ${companySubdomain}</h1>
${amounts.map(printAmountHtml).join('')}
Total devido <b>${format(totalAmount / 100)}</b>
Você ganhou <b>${credits}</b> na Gupy
`
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
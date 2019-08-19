function custo(companyJobs, jobs, companies) {
    let totalAmount = 0;
    let volumeCredits = 0;
    let result = `Custo das vagas para ${companies[companyJobs.companyId].subdomain}\n`;
    const format = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
        minimumFractionDigits: 2
    }).format;
    for (let job of companyJobs.jobs) {
        const jobData = jobs[job.jobId];
        let value = 0;

        switch (jobData.type) {
            case "effective":
                value = 40000;
                if (job.applicationCount > 30) {
                    value += 1000 * (job.applicationCount - 30);
                }
                break;
            case "talentPool":
                value = 30000;
                if (job.applicationCount > 20) {
                    value += 10000 + 500 * (job.applicationCount - 20);
                }
                value += 300 * job.applicationCount;
                break;
            default:
                throw new Error(`unknown type: ${jobData.type}`);
        }
        volumeCredits += Math.max(job.applicationCount - 30, 0);
        if ("talentPool" === jobData.type) volumeCredits += Math.floor(job.applicationCount / 5);
        result += `  ${jobData.name}: ${format(value / 100)} (${job.applicationCount} inscrições)\n`;
        totalAmount += value;
    }
    result += `Total devido ${format(totalAmount / 100)}\n`;
    result += `Você ganhou ${volumeCredits} na Gupy\n`;
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
    custo
};
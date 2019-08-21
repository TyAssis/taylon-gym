const jobCostCalculator = (job, jobType) => {
    let value = 0;
    switch (jobType) {
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
            throw new Error(`unknown type: ${jobType}`);
    }
    return value;
};

const getTotalAmount = (companyJobs, jobs) => {
    let totalAmount = 0;
    return Object.values(companyJobs.jobs).map(job => {
        const values = jobCostCalculator(job, jobs[job.jobId].type);
        totalAmount += values;
        return `  ${jobs[job.jobId].name}: ${format(values / 100)} (${job.applicationCount} inscrições)\n`;
    }).join('').concat(`Total devido ${format(totalAmount / 100)}\n`);

};

const creditsCalculator = (companyJobs, jobs) => {
    return Object.values(companyJobs.jobs).map(job => {
        let volumeCredits = Math.max(job.applicationCount - 30, 0);
        if ("talentPool" === jobs[job.jobId].type) 
            volumeCredits += Math.floor(job.applicationCount / 5);
        return volumeCredits
    }).reduce((acc, curr) => acc + curr);
};

const format = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2
}).format;

module.exports = {
    jobCostCalculator,
    creditsCalculator,
    format,
    getTotalAmount
};
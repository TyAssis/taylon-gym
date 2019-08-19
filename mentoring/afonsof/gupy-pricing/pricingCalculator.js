const jobCostCalculator = (job, jobData) => {
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
    return value;
};

const creditsCalculator = (companyJobs, jobs) => {
    let volumeCredits = 0;
    for (let job of companyJobs.jobs) {
        volumeCredits += Math.max(job.applicationCount - 30, 0);
        if ("talentPool" === jobs[job.jobId].type) 
            volumeCredits += Math.floor(job.applicationCount / 5);
    }
    return volumeCredits;
};

const format = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2
}).format;

module.exports = {
    jobCostCalculator,
    creditsCalculator,
    format
};
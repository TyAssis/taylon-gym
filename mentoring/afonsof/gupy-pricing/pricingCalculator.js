const pricingCalculator = (job, jobData) => {
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

const creditsCalculator = (job, jobData) => {
    let volumeCredits = 0;
    volumeCredits += Math.max(job.applicationCount - 30, 0);
    if ("talentPool" === jobData.type) volumeCredits += Math.floor(job.applicationCount / 5);
    return volumeCredits;
};

module.exports = {
    pricingCalculator,
    creditsCalculator
}
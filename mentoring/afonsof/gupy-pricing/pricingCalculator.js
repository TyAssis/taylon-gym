const pricingCalculator = () => {

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
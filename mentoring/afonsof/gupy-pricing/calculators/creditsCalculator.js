const creditsCalculator = (companyJobs, jobs) => {
    return Object.values(companyJobs.jobs).map(job => {
        let volumeCredits = Math.max(job.applicationCount - 30, 0);
        if ("talentPool" === jobs[job.jobId].type) 
            volumeCredits += Math.floor(job.applicationCount / 5);
        return volumeCredits
    }).reduce((acc, curr) => acc + curr);
};

module.exports = {
    creditsCalculator
}
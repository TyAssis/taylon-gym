const creditsCalculator = (companyJobs, jobs) => {
    return companyJobs.map(companyJob => {
        let volumeCredits = Math.max(companyJob.jobs.applicationCount - 30, 0);
        const jobId = companyJob.jobs.jobId;
        const job = jobs.find(job => job.id == jobId); 
        if ("talentPool" === job.type)
            volumeCredits += Math.floor(companyJob.jobs.applicationCount / 5);
        return volumeCredits
    }).reduce((acc, curr) => acc + curr);
};

module.exports = {
    creditsCalculator
}
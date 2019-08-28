const calculateEffective = (job) => {
    let value = 40000;
    if (job.applicationCount > 30) {
        value += 1000 * (job.applicationCount - 30);
    }
    return value;
}

const calculateTalentPool = (job) => {
    let value = 30000;
    if (job.applicationCount > 20) {
        value += 10000 + 500 * (job.applicationCount - 20);
    }
    return value + 300 * job.applicationCount;
}

const calculatorsFunctions = {
    effective: calculateEffective,
    talentPool: calculateTalentPool
}

const calculateJobCost = (job, jobType) => {
    const calculatorFunction = calculatorsFunctions[jobType];
    if(!calculatorFunction) throw new Error(`unknown type: ${jobType}`);
    return calculatorFunction(job);
};

const getAmounts = (companyJobs, jobs) => {
    return Object.values(companyJobs.jobs).map(job => {
        const cost = calculateJobCost(job, jobs[job.jobId].type);
        return {jobName: jobs[job.jobId].name, cost, applicationCount: job.applicationCount};
    });
}

const getTotalAmount = (amounts) => {
    return amounts.reduce((acc,amount) => acc + amount.cost, 0);
};

const creditsCalculator = (companyJobs, jobs) => {
    return Object.values(companyJobs.jobs).map(job => {
        let volumeCredits = Math.max(job.applicationCount - 30, 0);
        if ("talentPool" === jobs[job.jobId].type) 
            volumeCredits += Math.floor(job.applicationCount / 5);
        return volumeCredits
    }).reduce((acc, curr) => acc + curr);
};

module.exports = {
    calculateJobCost,
    creditsCalculator,
    getTotalAmount,
    getAmounts,
};
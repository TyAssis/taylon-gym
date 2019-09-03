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

 module.exports = {
     calculateJobCost
 }
const { assert } = require('chai');
const { custo } = require('../gupy-pricing/gupyPricingRefactored.js');
const { companies } = require('../gupy-pricing/gupyPricingRefactored.js');
const { companyJobs } = require('../gupy-pricing/gupyPricingRefactored.js');
const { jobs } = require('../gupy-pricing/gupyPricingRefactored.js');
const { creditsCalculator } = require('../gupy-pricing/pricingCalculator.js');
const { jobCostCalculator } = require('../gupy-pricing/pricingCalculator.js');

describe('custo', () => {
    it('ambev pricing message', () => {
		assert.equal(custo(companyJobs[0], jobs, companies), 'Custo das vagas para ambev\n  Dev Back End: R$650.00 (55 inscrições)\n  Banco de Talentos: R$580.00 (35 inscrições)\n  Dev Front End: R$500.00 (40 inscrições)\nTotal devido R$1,730.00\nVocê ganhou 47 na Gupy\n');
    });
});

describe('creditsCalculator', () => {

    const companyJobsTest = {
        jobs: [
            {jobId: 123, applicationCount: 0}
        ]
    };

    const jobsTest = {"123": {name: "Dev Back End", type: "effective"}};

    it('creditsCalculator should return 0 when no applications', () => {
        companyJobsTest.jobs[0].applicationCount = 0;
        jobsTest["123"].type = "effective";
        assert.equal(creditsCalculator(companyJobsTest, jobsTest), 0);
        assert.equal(creditsCalculator(companyJobsTest, jobsTest), 0);
     });

    it('creditsCalculator should return 7 when 31 applications to a talentPool', () => {
        companyJobsTest.jobs[0].applicationCount = 31;
        jobsTest["123"].type = "talentPool";
        assert.equal(creditsCalculator(companyJobsTest, jobsTest), 7);
    });

    it('creditsCalculator should return 1 when 31 applications to an effective', () => {
        companyJobsTest.jobs[0].applicationCount = 31;
        jobsTest["123"].type = "effective";
        assert.equal(creditsCalculator(companyJobsTest, jobsTest), 1);
    });

    
    it('creditsCalculator should return 5 when 35 applications to an effective job', () => {
        companyJobsTest.jobs[0].applicationCount = 35;
        jobsTest["123"].type = "effective";
        assert.equal(creditsCalculator(companyJobsTest, jobsTest), 5);
    });

    it('creditsCalculator should return 12 when 35 applications to a talentPool', () => {
        companyJobsTest.jobs[0].applicationCount = 35;
        jobsTest["123"].type = "talentPool";
        assert.equal(creditsCalculator(companyJobsTest, jobsTest), 12);
    });
});

describe('pricingCalculator', () => {
    it('pricingCalculator should return 40000 when no applications to an effective job', () => {
        assert.equal(jobCostCalculator({applicationCount: 0}, {type: "effective"}), 40000);
     });

    it('pricingCalculator should return 30000 when no applications to a talentPool', () => {
        assert.equal(jobCostCalculator({ applicationCount: 0 }, { type: "talentPool" }), 30000);
    });

    it('pricingCalculator should return 41000 when 31 applications to an effective job', () => {
        assert.equal(jobCostCalculator({applicationCount: 31}, {type: "effective"}), 41000);
     });

    it('pricingCalculator should return 46800 when 21 applications to a talentPool', () => {
        assert.equal(jobCostCalculator({ applicationCount: 21 }, { type: "talentPool" }), 46800);
    });
});
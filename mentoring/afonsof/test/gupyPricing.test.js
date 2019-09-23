const { assert } = require('chai');
const { calculatePricingData } = require('../gupy-pricing/gupyPricing.js');
const { companyJobs, jobs, companies } = require('../gupy-pricing/fake-database/fake-data.js');
const { creditsCalculator } = require('../gupy-pricing/calculators/creditsCalculator.js');
const { calculateJobCost } = require('../gupy-pricing/calculators/costCalculator.js');
const getCompanyDTO = require('../gupy-pricing/dto/getCompanyDTO.js');
const getJobsDTO = require('../gupy-pricing/dto/getJobsDTO.js');
const getCompanyJobsDTO = require('../gupy-pricing/dto/getCompanyJobsDTO.js');
const { printTxt } = require('../gupy-pricing/output/printer.js')
const { getCompanyPricingData } = require('../gupy-pricing/calculators/amountCalculators');

describe('calculatePricingData', () => {
    it('ambev pricing message', async () => {
        const companies = await getCompanyDTO('ambev');
        const companyJobs = await getCompanyJobsDTO(companies.id);
        const jobsIds = companyJobs.map(companyJob => companyJob.jobs.jobId);
        const jobs = await getJobsDTO(jobsIds);
        const pricingData = calculatePricingData(companyJobs, jobs, companies);

		assert.equal(printTxt(pricingData), 'Custo das vagas para ambev\n  Dev Back End: R$650.00 (55 inscrições)\n  Banco de Talentos: R$580.00 (35 inscrições)\n  Dev Front End: R$500.00 (40 inscrições)\nTotal devido R$1,730.00\nVocê ganhou 47 na Gupy\n');
    });
});

describe('creditsCalculator', () => {

    // Q: unit test, uso models?
    const companyJobsTest = [{
        id: '1111',
        companyId: '119',
        jobs: {
            jobId: 123, applicationCount: 0
        }
    }];

    const jobsTest = [{id: 123, name: "Dev Back End", type: "effective"}];

    it('creditsCalculator should return 0 when no applications', () => {
        assert.equal(creditsCalculator(companyJobsTest, jobsTest), 0);
        assert.equal(creditsCalculator(companyJobsTest, jobsTest), 0);
     });

    it('creditsCalculator should return 7 when 31 applications to a talentPool', () => {
        companyJobsTest[0].jobs.applicationCount = 31;
        jobsTest[0].type = "talentPool";
        assert.equal(creditsCalculator(companyJobsTest, jobsTest), 7);
    });

    it('creditsCalculator should return 1 when 31 applications to an effective job', () => {
        companyJobsTest[0].jobs.applicationCount = 31;
        jobsTest[0].type = "effective";
        assert.equal(creditsCalculator(companyJobsTest, jobsTest), 1);
    });

    it('creditsCalculator should return 5 when 35 applications to an effective job', () => {
        companyJobsTest[0].jobs.applicationCount = 35;
        jobsTest[0].type = "effective";
        assert.equal(creditsCalculator(companyJobsTest, jobsTest), 5);
    });

    it('creditsCalculator should return 12 when 35 applications to a talentPool', () => {
        companyJobsTest[0].jobs.applicationCount = 35;
        jobsTest[0].type = "talentPool";
        assert.equal(creditsCalculator(companyJobsTest, jobsTest), 12);
    });
});

describe('calculateJobCost', () => {
    it('calculateJobCost should return 40000 when no applications to an effective job', () => {
        assert.equal(calculateJobCost({applicationCount: 0}, "effective"), 40000);
     });

    it('calculateJobCost should return 30000 when no applications to a talentPool', () => {
        assert.equal(calculateJobCost({ applicationCount: 0 }, "talentPool"), 30000);
    });

    it('calculateJobCost should return 41000 when 31 applications to an effective job', () => {
        assert.equal(calculateJobCost({applicationCount: 31}, "effective"), 41000);
     });

    it('calculateJobCost should return 46800 when 21 applications to a talentPool', () => {
        assert.equal(calculateJobCost({ applicationCount: 21 }, "talentPool"), 46800);
    });
});

describe('getCompanyPricingData', () => {
    // TODO: lidar com essas variáveis
    const companyJobsTest = [{
        id: '1111',
        companyId: '119',
        jobs: {
            jobId: 123, applicationCount: 31
        }
    }];

    const jobsTest = [{id: 123, name: "Dev Back End", type: "effective"}];
    // Q: pode testar só um? [0]
    it('getCompanyPricingData should return a proper JSON', () => {
        const pricingData = getCompanyPricingData(companyJobsTest, jobsTest);
        assert.property(pricingData[0], 'jobName');
        assert.property(pricingData[0], 'cost');
        assert.property(pricingData[0], 'applicationCount');
        assert.propertyVal(pricingData[0], 'jobName', 'Dev Back End');
        assert.propertyVal(pricingData[0], 'cost', 41000);
        assert.propertyVal(pricingData[0], 'applicationCount', 31);
    });
});
const { assert } = require('chai');
const getCompanyDTO = require('../gupy-pricing/dto/getCompanyDTO.js');
const getCompanyJobsDTO = require('../gupy-pricing/dto/getCompanyJobsDTO.js');
const mongoose = require('mongoose');

describe('database query functions', () => {
    it('ambev subdomain should return ambev document', async () => {
        const company = await getCompanyDTO('ambev');
        assert(company.subdomain, 'ambev');
    });

    it('ambev ObjectId should return companyJobs documents', async () => {
        const company = await getCompanyDTO('ambev');
        const companyJobs = await getCompanyJobsDTO(company.id);
        companyJobs.forEach((companyJob) => {
            assert.equal(mongoose.Types.ObjectId.isValid(companyJob.companyId), true);
            assert.equal(mongoose.Types.ObjectId.isValid(companyJob.jobs.jobId), true);    
            assert(companyJob.companyId, company.id);
            assert(company.subdomain, 'ambev');
        });
    });
});

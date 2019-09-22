const { assert } = require('chai');
const getCompanyDTO = require('../gupy-pricing/dto/getCompanyDTO.js');
const getCompanyJobsDTO = require('../gupy-pricing/dto/getCompanyJobsDTO.js');
const getJobsDTO = require('../gupy-pricing/dto/getJobsDTO.js');
const mongoose = require('mongoose');

describe('database query functions', () => {
    it('ambev subdomain should return ambev document', async () => {
        const company = await getCompanyDTO('ambev');
        assert(company.subdomain, 'ambev');
    });

    it('ambev ObjectId should return ambev companyJobs documents', async () => {
        const company = await getCompanyDTO('ambev');
        const companyJobs = await getCompanyJobsDTO(company.id);
        companyJobs.forEach(companyJob => {
            assert.equal(mongoose.Types.ObjectId.isValid(companyJob.companyId), true);
            assert.equal(mongoose.Types.ObjectId.isValid(companyJob.jobs.jobId), true);    
            assert(companyJob.companyId, company.id);
        });
    });

    it('ambev companyJobs should return ambev jobs', async () => {
        const company = await getCompanyDTO('ambev');
        const companyJobs = await getCompanyJobsDTO(company.id);
        // companyJobs.forEach(companyJob => {
        //     // Q: testar um basta? loop in loop?

        // });
        const jobsIds = companyJobs.map(companyJob => companyJob.jobs.jobId);
        const jobs = await getJobsDTO(jobsIds);
        const job = jobs[0];
        assert.oneOf(job.type, ['effective', 'talentPool'], 'type is not in the list');
        assert.typeOf(job.name, 'string');
    });
});


// Q: comecei com R, deveria ter começado com C para testar tudo?!
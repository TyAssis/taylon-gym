const { assert } = require('chai');
const getCompanyDTO = require('../gupy-pricing/dto/getCompanyDTO.js');
const getCompanyJobsDTO = require('../gupy-pricing/dto/getCompanyJobsDTO.js');
const getJobsDTO = require('../gupy-pricing/dto/getJobsDTO.js');
const mongoose = require('mongoose');
const { insertCompany, insertJob, insertCompanyJob } = require('../gupy-pricing/database/insertDocument.js');
const { updateJob, updateCompany, updateCompanyJob } = require('../gupy-pricing/database/updateDocument.js');

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

describe('database insert functions', () => {
    it('insertCompany should return a new company document', async () => {
        const insertedCompany = await insertCompany('sicredi');
        assert(!insertedCompany.isNew);
    });

    it('insertJobs should return a new job document', async () => {
        const insertedJob = await insertJob('Support Analyst', 'effective');
        assert(!insertedJob.isNew);
    });

    it('insertCompany should return a new companyJob document', async () => {
        const insertedJob = await insertJob('Human Resources Internship', 'talentPool');
        const insertedCompany = await insertCompany('lasa');
        const insertedCompanyJob = await insertCompanyJob(insertedCompany.id, insertedJob.id);
        assert(!insertedCompanyJob.isNew);
    });
});

describe('database update functions', () => {
    let insertedJob, insertedCompany, insertedCompanyJob;
    before(async () => {
        insertedJob = await insertJob('Lawyer', 'talentPool');
        insertedCompany = await insertCompany('b2w');
        insertedCompanyJob = await insertCompanyJob(insertedCompany.id, insertedJob.id);
    }); 
    
    it('updateJob should update a job document using its ObjectId', async () => {
        // Q: callback == Promise?
        const job = await updateJob(insertedJob.id, {name: 'Criminal Lawyer', type: 'effective'});
        assert(job.name, 'Criminal Lawyer'); 
        assert(job.type, 'effective');
    });

    it('updateCompany should update a company document using its ObjectId', async () => {
        // Q: callback == Promise?
        const company = await updateCompany(insertedCompany.id, {subdomain: 'b2wdigital'});
        assert(company.subdomain, 'b2wdigital');  
    });

    it('updateCompanyJob should update a companyJob document using its ObjectId', async () => {
        const companyJob = await updateCompanyJob(insertedCompanyJob.id, {$set: {'jobs.applicationCount': 10}});
        assert(companyJob.jobs.applicationCount, 10); 
    });
});


// Q: comecei com R, deveria ter começado com C para testar tudo?!
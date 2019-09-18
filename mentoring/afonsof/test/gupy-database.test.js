const { assert } = require('chai');
const getCompanyDTO = require('../gupy-pricing/dto/getCompanyDTO.js');
const getCompanyJobsDTO = require('../gupy-pricing/dto/getCompanyJobsDTO.js');

describe('database query functions', () => {
    it('ambev subdomain should return ambev document', async () => {
        const company = await getCompanyDTO('ambev');
        assert(company.subdomain, 'ambev');
    });

    it('ambev ObjectId should return companyJobs document', async () => {
        const company = await getCompanyDTO('ambev');
        const company = await getCompanyJobsDTO(company._id);
        assert(company.subdomain, 'ambev');
    });
});

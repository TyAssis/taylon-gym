const { assert } = require('chai');
const { getCompanyDTO } = require('../gupy-pricing/database/get-document.js');

describe('database query functions', () => {
    it('ambev subdomain should return ambev object', async () => {
        const company = await getCompanyDTO('ambev');
        assert.deepEqual(company, {"119": { subdomain: 'ambev' }});
    });
});

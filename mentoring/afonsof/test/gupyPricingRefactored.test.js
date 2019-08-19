const { assert } = require('chai');
const { custo } = require('../gupy-pricing/gupyPricing.js');

describe('custo', () => {
    it('ambev pricing message', () => {
		assert.equal(custo({
            companyId: 119,
            jobs: [
                {jobId: 123, applicationCount: 55},
                {jobId: 456, applicationCount: 35},
                {jobId: 789, applicationCount: 40}
            ]
        },
        {
            "123": {name: "Dev Back End", type: "effective"},
            "456": {name: "Banco de Talentos", type: "talentPool"},
            "789": {name: "Dev Front End", type: "effective"}
        },
        {
            "119": {subdomain: 'ambev'}
        }), 'Custo das vagas para ambev\n  Dev Back End: R$650.00 (55 inscrições)\n  Banco de Talentos: R$580.00 (35 inscrições)\n  Dev Front End: R$500.00 (40 inscrições)\nTotal devido R$1,730.00\nVocê ganhou 47 na Gupy\n');
    });
    
    // it('ambev gupy credits should be 47', () => {
    //     assert.equal(custo(), '');
    // });
});
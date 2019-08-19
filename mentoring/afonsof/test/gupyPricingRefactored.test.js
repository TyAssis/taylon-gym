const { assert } = require('chai');
const { custo } = require('../gupy-pricing/gupyPricingRefactored.js');
const { companies } = require('../gupy-pricing/gupyPricingRefactored.js');
const { companyJobs } = require('../gupy-pricing/gupyPricingRefactored.js');
const { jobs } = require('../gupy-pricing/gupyPricingRefactored.js');
const { creditsCalculator } = require('../gupy-pricing/pricingCalculator.js');
const { pricingCalculator } = require('../gupy-pricing/pricingCalculator.js');

describe('custo', () => {
    it('ambev pricing message', () => {
		assert.equal(custo(companyJobs[0], jobs, companies), 'Custo das vagas para ambev\n  Dev Back End: R$650.00 (55 inscrições)\n  Banco de Talentos: R$580.00 (35 inscrições)\n  Dev Front End: R$500.00 (40 inscrições)\nTotal devido R$1,730.00\nVocê ganhou 47 na Gupy\n');
    });
});

describe('creditsCalculator', () => {
    it('creditsCalculator should return 0 when no applications', () => {
        assert.equal(creditsCalculator({applicationCount: 0}, {type: "talentPool"}), 0);
        assert.equal(creditsCalculator({applicationCount: 0}, {type: "effective"}), 0);
     });

    it('creditsCalculator should return 7 when 31 applications to a talentPool', () => {
        assert.equal(creditsCalculator({ applicationCount: 31 }, { type: "talentPool" }), 7);
    });

    it('creditsCalculator should return 1 when 31 applications to an effective', () => {
        assert.equal(creditsCalculator({ applicationCount: 31 }, { type: "effective" }), 1);
    });

    
    it('creditsCalculator should return 5 when 35 applications to an effective job', () => {
        assert.equal(creditsCalculator({ applicationCount: 35 }, { type: "effective" }), 5);
    });

    it('creditsCalculator should return 12 when 35 applications to a talentPool', () => {
        assert.equal(creditsCalculator({ applicationCount: 35 }, { type: "talentPool" }), 12);
    });
});

describe('pricingCalculator', () => {
    it('pricingCalculator should return 40000 when no applications to an effective job', () => {
        assert.equal(pricingCalculator({applicationCount: 0}, {type: "effective"}), 40000);
     });

    it('pricingCalculator should return 30000 when no applications to a talentPool', () => {
        assert.equal(pricingCalculator({ applicationCount: 0 }, { type: "talentPool" }), 30000);
    });

    it('pricingCalculator should return 41000 when 31 applications to an effective job', () => {
        assert.equal(pricingCalculator({applicationCount: 31}, {type: "effective"}), 41000);
     });

    it('pricingCalculator should return 46800 when 21 applications to a talentPool', () => {
        assert.equal(pricingCalculator({ applicationCount: 21 }, { type: "talentPool" }), 46800);
    });
});
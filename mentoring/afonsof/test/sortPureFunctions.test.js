const { assert } = require('chai');
const { sortPureFunctions } = require('../sort-pure-functions/sortPureFunctions.js');

describe('sortPureFunctions', function () {
	it('deve ordenar com números naturais', () => {
 		assert.deepEqual(sortPureFunctions([3,7,3,0,8,7,5]), [0,3,3,5,7,7,8]);
	});

	it('deve ordernar com números inteiros', () => {
		assert.deepEqual(sortPureFunctions([5,3,2,3,5,-1,7], [-1,2,3,3,5,5,7]));
	})
});

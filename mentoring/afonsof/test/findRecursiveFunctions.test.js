const { assert } = require('chai');
const { findRecursiveFunctions } = require('../find-recursive/findRecursiveFunctions.js');

describe('findRecursiveFunctions', function () {
	it('deve buscar pela posição do 0 em uma lista de números naturais', () => {
 		assert.equal(findRecursiveFunctions([3,7,3,0,8,7,5], 0), 3);
	});

	it('deve retornar null se não encontrar um elemento no array', () => {
		assert.equal(findRecursiveFunctions([4,5,2,1,2,9],3), null);
	});
});

const { assert } = require('chai');
const { stringify } = require('../stringify/stringify2.js');

describe('stringify', () => {

	it('serialize an empty json', () => {
		assert.equal(stringify({}), '{}');
	});
	
	it('serialize a json containing letter in key and numbers in value', () => {
		assert.equal(stringify({ abc: 123 }), '{"abc":123}');
	});
	
	it('serialize a json containing letter in key and in value', () => {
		assert.equal(stringify({ abc: "def" }), '{"abc":"def"}');
	});


	it('serialize a json containing letter in key and in value', () => {
		assert.equal(stringify({ abc: "def", ghi: "jkl" }), '{"abc":"def","ghi":"jkl"}');
	});

	it('serialize an array of numbers', () => {
		assert.equal(stringify([1, 2, 3]), '[1,2,3]');
	});
	
	it('serialize a json containing letter in key and array of numbers value', () => {
		assert.equal(stringify({ a: [1, 2, 3] }), '{"a":[1,2,3]}');
	});
	
	it('serialize nested json', () => {
		assert.equal(stringify({ a: { b: [1, 2, 3] } }), '{"a":{"b":[1,2,3]}}');
	});
	
	it('serialize inner json on an array', () => {
		assert.equal(stringify({ a: { b: [{ id: 1 }, { id: 2 }, null] } }), '{"a":{"b":[{"id":1},{"id":2},null]}}');
	});
});
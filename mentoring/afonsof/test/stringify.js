it('simple serialization', ()=>{
	assert.equal(jsontaylon({}), '{}');
});

it('simple serialization', ()=>{
	assert.equal(jsontaylon({abc: 123}), '{"abc": 123}');
});

it('simple serialization', ()=>{
	assert.equal(jsontaylon({abc: "def"}), '{"abc": "def"}');
});

it('simple serialization', ()=>{
	assert.equal(jsontaylon([1,2,3]), '[1,2,3]');
});

it('simple serialization', ()=>{
	assert.equal(jsontaylon({a: [1,2,3] }), '{"a":[1,2,3]}');
});

it('simple serialization', ()=>{
	assert.equal(jsontaylon({a: {b: [1,2,3]} }), '{"a":{"b":[1,2,3]}}');
});

it('simple serialization', ()=>{
	assert.equal(jsontaylon({a: {b: [{id: 1}, {id: 2}, null]} }), '{"a":{"b":[{"id":1},{"id":2},null]}}');
});

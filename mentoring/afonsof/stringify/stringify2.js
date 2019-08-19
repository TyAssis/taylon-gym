const stringify = (object) => {

    if(typeof(object) === 'number' || typeof(object) === 'boolean')
        return object;

    if(typeof(object) === 'string')
        return  '"' + object + '"';

    if(object === null)
        return 'null';

    if(Object.keys(object).length === 0)
        return '{}';

    if(Array.isArray(object)) {
        return '[' + object.map(stringify).join(',') + ']';
    }

    return '{' + Object.entries(object).map(obj => `"${obj[0]}":${stringify(obj[1])}`).join(',') + '}'
};

module.exports = {
	stringify
}
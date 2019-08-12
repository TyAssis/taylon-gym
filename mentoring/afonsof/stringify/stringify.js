const stringify = (object) => {
    if(object === null)
        return 'null';

    if(Object.keys(object).length === 0)
        return '{}';

    if(Array.isArray(object)) {
        for(let i = 0; i < object.length; i++) {
            if (typeof(object[i]) === 'object') 
                object[i] = stringify(object[i]);
        }
        return '[' + object + ']';
    }

    let newObject = '';

    for (key in object) {
        if(typeof(object[key]) === 'object') {
            values = stringify(object[key]);
        } else if (typeof(object[key]) === 'string') {
            values = '"' + Object.values(object).reduce((acc, cur) => acc + cur) + '"';
        } else {
            values = Object.values(object).reduce((acc, cur) => acc + cur);
        }

        if(typeof(key) === 'string') {
            keys = '"' + Object.keys(object).reduce((acc, cur) => 
                acc + cur
            ) + '"';
        }

        newObject += '{' + keys + ':' + values + '}';
    }

    return newObject; 
};

module.exports = {
	stringify
}
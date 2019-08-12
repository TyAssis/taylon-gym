const findRecursiveFunctions = (list, value, index = 0) => {
	if (list.length === index)
		return -1;
	else 
		return list[index] == value ? index : findRecursiveFunctions(list, value, ++index); 
};

module.exports = {
	findRecursiveFunctions
}

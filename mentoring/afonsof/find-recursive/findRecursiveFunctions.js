let index = -1;

const findRecursiveFunctions = (list, value) => {
	index++;
	if (list.length <= index)
		return null;
	else 
		return list[index] == value ? index : findRecursiveFunctions(list, value); 
};

module.exports = {
	findRecursiveFunctions
}

// [3,2,1]
const sortPureFunctions = (list) => {

	if (!Array.isArray(list))
		return null;

	if (list.length === 0)
		return list;
	
	let pivot = list[0];
	const leftList = [];
	const rightList = [];

	for(let i = 1; i < list.length; i++) {
		if (list[i] < pivot)
			leftList.push(list[i]);
		else 
			rightList.push(list[i]);
	}

	return [... sortPureFunctions(leftList), pivot, ...sortPureFunctions(rightList)];

	// let tempList = newList.length === 0 ? 
	// 	list : 
	// 	list.filter((element) => {
	// 		let cnt = 0;
	// 		for (let i = 0; i < newList.length; i++) {
	// 			if(element > newList[i])
	// 				cnt++;

	// 			if(cnt === newList.length)
	// 				return element;
	// 		}
	// 	});

	// let lesser = tempList[0];

	// for (let i = 0; i < tempList.length; i++) {
	// 	if(tempList[i] <= lesser)
	// 		lesser = tempList[i];
	// }

	// const x = [... newList];

	// list.forEach(function (element) {
	// 	if (element === lesser)
	// 		x.push(element);
	// });

	// return list.length === newList.length ? newList : sortPureFunctions(list, x);
};

module.exports = {
	sortPureFunctions
};

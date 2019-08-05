let newList = [];

const sortPureFunctions = (list) => {
	let tempList = newList.length == 0 ? 
		list : 
		list.filter(function (element) {
			let cnt = 0;
			for (let i = 0; i < newList.length; i++) {
				if(element > newList[i])
					cnt++;

				if(cnt == newList.length)
					return element;
			}
		});

	let lesser = tempList[0];

	for (let i = 0; i < tempList.length; i++) {
		if(tempList[i] <= lesser)
			lesser = tempList[i];
	}

	list.forEach(function (element) {
		if (element == lesser)
			newList.push(element);
	});

	return list.length == newList.length ? newList : sortPureFunctions(list);
};

module.exports = {
	sortPureFunctions
};

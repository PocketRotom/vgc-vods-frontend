/*const groupToArray = (array, key) => {
	return array.reduce((result, currentValue) => {
		(result[currentValue[key]] = result[currentValue[key]] || []).push(
			currentValue
		);
		console.log(result);
		return result;
	}, {});
};*/


const groupToArray = (array, key) => {
	const groupedMap = new Map();
	for (const e of array) {
		let thisList = groupedMap.get(e[key]);
		if (thisList === undefined) {
			thisList = [];
			groupedMap.set(e[key], thisList);
		}
		thisList.push(e);
	}
	return Array.from(groupedMap);
};


export default groupToArray;
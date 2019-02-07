function cyclicRotation(array, iteration) {
	let nw_arr = [];
	let effective_iteration = iteration % array.length;
	if (effective_iteration === 0) {
		return array;
	}
	for (let index = 0; index < array.length; index++) {
		if ((effective_iteration + index) < array.length) {
			nw_arr[effective_iteration + index] = array[index];
		} else {
			nw_arr[effective_iteration + index - array.length] = array[index]
		}
	}
	return nw_arr;
}

const arr = [3, 8, 9, 7, 6];
console.log(cyclicRotation(arr, 18))
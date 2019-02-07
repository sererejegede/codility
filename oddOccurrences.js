function oddOccurrence(array) {
	for (let i = 0; i < array.length; i++) {
		let curr = array.indexOf(array[i]);
		if ( array.indexOf(array[i], curr + 1) === -1) {
			return array[i];
		}
	}
}

const arr = [1, 3, 4, 1, 5, 4, 3, 5, 9];

console.log(oddOccurrence(arr))
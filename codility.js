// Binary Gap
function solution(N) {
	let str = N.toString(2),
		zeroCount = 0,
		result = 0;

	for (let digit of str) {
		if (digit === '0') {
			zeroCount += 1;
		} else /* if ( digit === '1' ) */ {
			result = Math.max(result, zeroCount);
			zeroCount = 0;
		}
	}

	return result;
}

// Cyclic Rotation
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

// Factorial
function factorial(n) {
	if (n < 2) {
		return 1;
	}
	return factorial(n - 1) * n;
}

// Odd Occurrences
function oddOccurrence(array) {
	for (let i = 0; i < array.length; i++) {
		let curr = array.indexOf(array[i]);
		if (array.indexOf(array[i], curr + 1) === -1) {
			return array[i];
		}
	}
}

// Check if array is consecutive
function isConsecutive(A) {
	// ascending order
	A = A.sort((a, b) => a - b);
	// if all elements are negative
	if (A[A.length - 1] < 1) {
		return 1;
	}
	// if only one element is there or all elements are consecutive
	if (A.length === 1 || checkConsecutive(A)) {
		return A[A.length - 1] + 1;
	}
	for (let i = 0; i < A.length; i++) {
		if (A[i + 1] - A[i] > 1) {
			consecutive = false;
			return A[i] + 1;
		}
	}
}
console.log('bcasj'.split('').sort().join(''))
function checkConsecutive(Ae) {
	let consecutive = true;
	for (let index = 0; index < Ae.length - 1; index++) {
		if (Ae[index + 1] - Ae[index] !== 1) {
		 return	consecutive = false;
		}
	}
	return consecutive;
}

console.log(checkConsecutive([2, 3, 4, 5, 7]));

console.log	(isConsecutive([1, 3, 6, 4, 1, 2]));
console.log	(isConsecutive([1, 2, 3]));
console.log	(isConsecutive([-1, -3]));
console.log	(isConsecutive([1]));
// console.log	(isConsecutive([1, 3, 6, 4, 1, 2]));
// console.log	(isConsecutive([1, 3, 6, 4, 1, 2]));
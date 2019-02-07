function binaryGap(number) {
	let binary_gap = 0;
	let curr_binary_gap = 0;
	const binary = Math.abs(number).toString(2);
	for (let i = 0; i < binary.length; i++) {
		curr_binary_gap = 0;

		while (binary[i] === '0') {
			++curr_binary_gap;
			i++;
		}

		if (binary[i] === '1') {
			binary_gap = Math.max(curr_binary_gap, binary_gap);
		}
	}
	return binary_gap;
}

console.log(binaryGap(111111111111))
console.log(binaryGap(1111111111))


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

console.log(solution(1))
console.log(solution(1))
function unscrambler(word) {
	let length = word.length;
	let new_word = [];
	// while(length > 0) {
	// 	new_word.push(word.splice(length - 1));
	// 	length--;
	// }
	// console.log('line 8', word);
	return word.join('');
}

function unscramble(original_word) {
	let length = original_word.length;
	let unscrambled_array = []; // Put original input in the array of answers
	let current_scrambling = original_word.split(''); // Turn input string to array
	while(length > 0) {
		unscrambled_array.push(unscrambler(JSON.parse(JSON.stringify(current_scrambling))));
		// 1. Rearrange - Bring last letter to the front and shift others 1 space to the right.
		//                This isn't sufficient as it doesn't cater for all the possible combinations
		let temp = JSON.parse(JSON.stringify(current_scrambling)); // Duplicate array
		current_scrambling.pop(); // Remove the last from the original
		current_scrambling.unshift(temp.pop()); // Remove last from duplicate and insert in first position of original
		length--;
	}
	return unscrambled_array;
}

function scramble(original_word) {
	let length = original_word.length;
	let unscrambled_array = []; // Put original input in the array of answers
	let current_scrambling = original_word; // Turn input string to array
	// console.log(original_word);
	// let repeat = combination(length);
	// for (let i = 0; i < repeat; i++) {
		while(length > 0) {
			unscrambled_array.push(unscrambler(JSON.parse(JSON.stringify(current_scrambling))));
			// 1. Rearrange - Bring last letter to the front and shift others 1 space to the right.
			//                This isn't sufficient as it doesn't cater for all the possible combinations
			let temp = JSON.parse(JSON.stringify(current_scrambling)); // Duplicate array
			current_scrambling.pop(); // Remove the last from the original
			current_scrambling.unshift(temp.pop()); // Remove last from duplicate and insert in first position of original
			length--;
		}
	// }
	return unscrambled_array;
}

function factorial(num) {
	num = parseInt(num);
	let i = 1;
	let answer = 1
	if (num) {
		while (i <= num) {
			answer *= i;
			i++
		}
	}
	return answer;
}

function combination(x, y) {
	if (y === 0 || y === null || y === undefined) {
		return factorial(x);
	}
	return (factorial(x)/((factorial(x - y) * factorial(y))))
}

function selfInvoke(original_word) {
	let letter_array = original_word.split('');
	let answer_doubtful;
	// if (letter_array.length > 2) {
	// 	 selfInvoke();
	// }
	// for (let i = 0; i < letter_array.length; i++) {
		let focus = letter_array.pop();
		answer_doubtful = scramble(letter_array);
		// console.log(answer_doubtful);
		for (let j = 0; j < answer_doubtful.length; j++) {
			answer_doubtful[j] = `${focus}${answer_doubtful[j]}`;
		};
		return answer_doubtful;
	// }
}

function caller(word) {
	let letter_array = word.split('');
	let answer = scramble(letter_array);
	let big_answers = [];
	for (let y = 0; y < answer.length; y++) {
		big_answers = big_answers.concat(selfInvoke(answer[y]));
	}
	return big_answers;
}

console.log('line 95', caller('etnho'));
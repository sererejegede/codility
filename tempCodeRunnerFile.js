// function factorial(n) {
// 	if (n < 2) {
// 		return 1;
// 	}
// 	return factorial(n - 1) * n;
// 	// for (let index = 0; index < n.length; index++) {
// 	// 	const element = n[index];

// 	// }
// }


// function anp(a, n, p) {
// 	return (Math.pow(a, factorial(n))) % p;
// }

// console.log(anp(3090, 3, 9));

let newgr = {
	degree_class: [],
	grades: []
};
let grading = {
	degree_class: {
		'First class': [4.5, 5],
		'Second class (Lower)': [2.5, 3.49],
		'Second class (Upper)': [3.5, 4.49],
		'Third class': [0, 2.49],
	},
	grades: {
		A: { unit: "5", score: { min: 70, max: 100 } },
		B: { unit: "4", score: { min: 60, max: 69 } },
		C: { unit: "3", score: { min: 50, max: 59 } },
		D: { unit: "2", score: { min: 40, max: 49 } },
		F: { unit: "0", score: { min: 0, max: 39 } }
	}
}
// console.log(Object.entries(grading.degree_class));
for (const key in grading.degree_class) {
	newgr['degree_class'].push({key: key, value: grading.degree_class[key]});
	// console.log({key: key, value: grading.degree_class[key]});
}
for (const key in grading.grades) {
	newgr['grades'].push({key: key, value: grading.grades[key]});
	// console.log({key: key, value: grading.degree_class[key]});
}
console.log(newgr.grades);
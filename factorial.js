function factorial(n) {
	if (n < 2) {
		return 1;
	}
	return factorial(n - 1) * n;
	// for (let index = 0; index < n.length; index++) {
	// 	const element = n[index];
		
	// }
}


function anp(a, n, p) {
	return (Math.pow(a, factorial(n))) % p;
}

console.log(anp(3090, 3, 9));
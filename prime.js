function prime(number){
  let half = parseInt(number / 2, 10);
  let sqrt = Math.ceil(Math.sqrt(number));
  // return sqrt;
  let isPrime = true;
  while (sqrt > 1) {
    if (number % sqrt === 0) {
      return isPrime = false
    }
    sqrt--;
  }
  return isPrime;
}
let j = 0;
for (let i = 100000; i > 1; i--) {
  if (prime(i)) {
    j++;
    console.log(j + ' => ' + i)
    // console.log(i)
  }
}

// console.log(prime(200000191));
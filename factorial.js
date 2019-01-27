function factorialize(num){
	let factorial = 1;
	var i = 1;
	while (i <= num) {
		factorial *= i
		i++
	};
	return factorial;
}

console.log(factorialize(10));
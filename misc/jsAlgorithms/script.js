// 'use strict'

function addUpTo(n) {
	let total = 0;
	for (let i = 1; i <= n; i++) {
		total += i;
	}
	return total;
}

// Timer function
var t1 = performance.now();
addUpTo(1000000000000); //should be a billion

var t2 = performance.now();
console.log(`Time elapsed: ${( t2 - t1 ) / 1000} seconds.`)

console.log(addUpTo(8));

/*
function addUpTo(n) {
	return n * (n + 1) /2;
}

console.log(addUpTo(6));
*/

// ToDo: Look up performance.now later



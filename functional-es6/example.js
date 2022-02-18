// Use reduce 

const numbers = [1, 2, 3, 4, 10, 2, 56, 3, 5, 2, 2, 12, 73, 14, 23, 6, 15];

const sum = numbers.reduce((acc, x) => {
console.log(`acc: ${acc}`);
console.log(`x: ${x}`);
return acc * x;
}, 3);

console.log(sum);
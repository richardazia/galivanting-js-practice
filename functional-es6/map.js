const numbers =  [1, 2, 3, 4, 5]
console.log(numbers)
// numbers.reverse()
// console.log(numbers);
// const doubledNumbers = [];
// for (let i = 0; i < numbers.length; i++) {
//   doubledNumbers.push(numbers[i] * 2);
// }

const double = x => x * 2;

const doubledNumbers = numbers.map(double);

console.log(doubledNumbers);
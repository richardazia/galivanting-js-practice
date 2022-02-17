// experiment with spread operator
const numbers = [1,2,3,4,5];
const newNumbers = [
    0, // adds a number at the start
    ...numbers, // adds all the numbers
    6, // add an element at the end
];

console.log(newNumbers);


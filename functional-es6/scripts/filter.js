const numbers =  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const isEven = x => x % 2 === 0;

const evenNumbers = numbers.filter(isEven);

console.log(evenNumbers);

const words = [
    'chicken', 
    'dog', 
    'giraffe',
    'horse',
    'bicycle',
    'airplane',
    'rabbit',
    'jaberwocky',
    'cat', 
    'cow', 
    'horse', 
    'pig', 
    'sheep', 
    'goat', 
    'cow', 
    'cow'
];

const createLengthTest = minLength => word => word.length > minLength;

const isLongerThan5 = createLengthTest(5);

const isShorterThanfour = word => word.length < 4;

const shortWords = words.filter(isShorterThanfour);
// const longWords = words.filter(word => word.length > 3);
const longWords = words.filter(createLengthTest(5));
console.log("These are words shorter than four letters long: "+ shortWords);
console.log("These are words longer than five letters long: "+ longWords);
// Verbose solution
// var evenNumbers = [];


// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] % 2 === 0) {
//     evenNumbers.push(numbers[i]);
//   }
// }

// console.log(evenNumbers);
// Return functions

//Short version
// const sayGoodMorning = () => () => console.log('Good Morning');

// //full version

// const sayGoodMorning = function() {
//     return function() {
//         console.log('Good Morning');
//     };
// };

// Example

// const double = (x) => x * 2;
// const triple = (x) => x * 3;
// const quadruple = (x) => x * 4;

// refactor with first class function

const multiplyFunction = y => (x) => x * y;

const double = multiplyFunction(2);
const triple = multiplyFunction(3);
const quadruple = multiplyFunction(4);

console.log(double(10));
console.log(triple(58));
console.log(quadruple(58));


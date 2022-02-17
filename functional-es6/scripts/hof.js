// experimenting with higher order functions
// 
// const divide = (a, b) => {
//     if (b === 0 ) {
//         console.log('does not compute');
//         return null;
//     }
//     return a / b;
// }
// 
//refactor as higher order function
const divide = (a, b) => a/b;

const notZeroArgument = func => 
    (...args) => {
        if (args[1] === 0) {
            console.log('does not compute');
            return null;
        }

        return func(...args);
    }

const divideSafe = notZeroArgument(divide);

console.log(divideSafe(12, 0));

console.log(divideSafe(12, 2));
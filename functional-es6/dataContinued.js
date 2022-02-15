// Running a functions array 

const double = x => x * 2;
const triple = x => x * 3;
const subtractOne = x => x - 1;
const addOne = x => x + 1;
const add12 = x => x + 12;


const myNumber = 42;

// the slow way
const doubled = double(myNumber);
const tripled = triple(myNumber);
const subtracted = subtractOne(myNumber);
const added = addOne(myNumber);
const added12 = add12(myNumber);

// The quicker way

const functionsArray = [
    double, 
    triple, 
    subtractOne, 
    addOne, 
    add12,
    Math.sqrt,
];

var number = 42;

functionsArray.forEach(func => number = func(number));

console.log(number); 
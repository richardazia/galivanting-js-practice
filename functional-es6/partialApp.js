// const add = (x, y, z) => x + y + z;

// const addPartial = x =>
//     (y, z) => add(x, y, z);

// const add5 = addPartial(5);
// const sum = add5(10, 15);
// console.log(sum);

//pass in the first argument of addPartial and then the second and third arguments

const add = (x, y, z) => x + y + z;

const addPartial = x =>
    y => 
        z=> add(x, y, z);

const add5 = addPartial(5);
const add5and6 = add5(6);
const sum = add5and6(7);

console.log(sum);
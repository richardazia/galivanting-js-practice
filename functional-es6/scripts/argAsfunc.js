// Use functions as arguments

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;

const combine12and32 = func =>
    func(12, 32);

console.log(combine12and32(add));
console.log(combine12and32(subtract));
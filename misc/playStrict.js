'use strict';
// console.log("Hello")

// function counter() {
//     console.log("Hello")
// }

// counter();
// counter();
// counter();
// counter();
// counter();
// counter();
// counter();
// counter();

// function viaFerrata(harness, helmet) {
//     // console.log(`${harness}, ${helmet}`);
//     const safety = `${harness} harnesses and ${helmet} helmets are available.`;
//     return safety;
// }

// viaFerrata(3, 4); // returns just 3 and 4

// To return the sentence we need to create a new variable and call the variable. 
// const safetyRequirement = viaFerrata(3, 4);
// console.log(safetyRequirement);

function fruitBlender(mangoes, oranges) {
    const fruit = `${mangoes} mangoes and ${oranges} oranges are available.`;
    return fruit;
}

const fruitBlend = fruitBlender(3, 4);
console.log(fruitBlend);

const mangoJuice = fruitBlender(5, 0);
console.log(mangoJuice);





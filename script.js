// 1. Scope
// var warrior = 'ninja';

// const screamWarrior = () => {
//     let warrior2 = 'Samurai';
//     console.log(warrior, warrior2);
// }

// screamWarrior();

// console.log(warrior, warrior2);

//2. Closure

// var warrior = 'ninja';

// const screamWarrior = () => {
//     let warrior2 = 'Samurai';
//     return {
//         shootWarrior: () => {
//             return console.log(warrior, warrior2);
//         }
//     }
// }

// const newWarrior =  screamWarrior();

// newWarrior.shootWarrior();

// console.log(warrior, warrior2);

// 3. Hoisting

// warrior = 'ninja'; // warrior is defined here
// warrior3 = 'viking'; 

// const screamWarrior = () => {
//     let warrior2 = 'Samurai';
//     // wrapped in a function now is a closure
//     return {
//         shootWarrior: () => {
//             return console.log(warrior, warrior2);
//         }
//     }
// }

// const newWarrior =  screamWarrior();

// newWarrior.shootWarrior();

// console.log(warrior, warrior3);

// var warrior; // warrior is declared here

// var warrior3; // will show undefined if it is declared and called at the same time -- warrior3 = 'viking'; --

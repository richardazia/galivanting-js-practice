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

// 4. Global Variables

const warrior = {
    name: 'Jujin Take',
    type: 'Ninja',
    weapon: 'Shuriken',
    agility: 79
} 

const knight = {
    name: 'Richard',
    type: 'Crusader',
    weapon: 'Sword',
    agility: 67
}
// this is globally scoped

//Globally scoped function
const screamWarrior = () => {
    let warrior2 = 'samurai';

    warrior3 = 'Viking';

    return {
        shootWarrior: () => {
            return console.log(warrior, warrior2);
        }
    }
}

// console.log(knight3) knight 3 is not defined globally yet

const screamKnight = () => {
    let knight2 = 'Dragoon';

    knight3 = 'trebuchet';

    return {
        shootKnight: () => {
            return console.log(knight, knight2)
        }
    }
}

const newWarrior = screamWarrior();
const newKnight = screamKnight();

newWarrior.shootWarrior();
newKnight.shootKnight();
console.log(warrior, warrior3);
console.log(knight, knight3); //knight3 is defined globally from within the function. 


// add 'use sctrict'; to prevent viking from working. 
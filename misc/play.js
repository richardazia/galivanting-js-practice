// const thisYear = new Date().getFullYear();

// const ageBob = thisYear - 1984;
// const ageJohn = thisYear - 1990;

// console.log("Bob is " + ageBob + " and John is " + ageJohn);

// // play with maths functions in javascript, ** is exponential ("2 * 2 * 2")

// console.log(ageBob * 2, ageJohn * 2);
// console.log(ageBob * ageJohn, 2 ** 3);

// firstName = "Donald";
// lastName = "Duck";

// console.log(firstName + " " + lastName);

//Operator Precedence - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

// const now = 2022;

// console.log(now - 1984 > now - 1990);

// console.log(20 - 10 - 5);

// let x, y;

// x = y = 25 - 10 -5; // it will go from left to right for the maths part, and then from right to left for the assignment part

// console.log(x, y);

// const averageAge = (ageBob + ageJohn) / 2; // add the two ages and divide the result by two. We tell it how to calculate, instead of letting it assume.

// console.log(ageBob, ageJohn, averageAge);

// console.log("The challenge");

// markHeight = 1.69;
// markMass = 78;
// markHeightTall = 1.88;
// markMassTall = 95;

// JohnHeight = 1.95;
// JohnMass = 92;
// JohnSmallHeight = 1.76;
// JohnSmallMass = 85;

// markBmi = markMass / markHeight ** 2; 
// johnBMI = JohnMass / (JohnHeight * JohnHeight);

// markTallBMI = markMassTall / markHeightTall ** 2;
// johnTallBMI = JohnMass / (JohnSmallHeight * JohnSmallHeight);

// markTallHigherBMI = markTallBMI > markBmi;

// console.log(markBmi, johnBMI);

// console.log(markTallBMI, johnTallBMI);

// markHigherBMI = markBmi > johnBMI;

// console.log(markHigherBMI);

// console.log(markTallHigherBMI);

// if (markBmi > johnBMI) {
//     console.log(`Mark's BMI: (${markBmi}) is higher than John's: (${johnBMI}).`);
// } else {
//     console.log(`John's BMI: (${johnBMI}) is higher than Mark's: (${markBmi})`);
// }

// if (markTallBMI > johnTallBMI) {
//     console.log(`Tall Mark's BMI: (${markTallBMI}) is higher than John's: (${johnTallBMI})`);
// } else {
//     console.log(`Tall John's BMI: (${johnTallBMI}) is higher than Mark's (${markTallBMI}).`);
// }

// console.log('I want to span \n\
// several lines\n\
// \n\
// and I have succeeded');

// console.log(`I am a string literal
// and I span a few
// lines too.`)

// const age = 19;
// const age = 12;
// const isNotTooYoung = age >= 18;
// const timeToWait = 18 - age;

// if (isNotTooYoung) {
//     console.log("You are not too young for this.");
// }

// if (age >= 18) {
//     console.log("You are old enough to vote.");
// } else {
//     console.log(`You are not old enough to vote. You must wait ${timeToWait} years.`);
// }

// const birthYear = 1984;

// let century; 
//     if (birthYear <= 2000) {
//         century = 20;
//     } else {
//         century = 21;
//     }

// console.log(century);

// const isMale = true;
// const isFemale = false;

// if (isMale) {
//     console.log("You are a

//Convert string to Number

// const inputYear = '1984';
// console.log(Number(inputYear), inputYear);
// console.log(inputYear + 16);
// console.log(Number(inputYear) + 16);

// console.log(typeof inputYear);

// console.log(String(42));

// console.log(Number('three')); // NaN

// // Type Coercion

// console.log('I am ' + 20 + ' minutes into the ' + 11 + 'th hour.');
// console.log('I am ' + String(20) + ' minutes into the ' + String(11) + 'th hour.');

// console.log('12' + '10' + 4); // 121014
// console.log('23' - '10' - 3); // 10
// console.log('21' * '2'); // 42
// console.log('21' / '2'); // 10.5

// let n = '1' + 1; // '11'
// n = n - 1; // '10' because the minus operator turns it into a number so 11 is a number, minus one for ten 
// console.log(n);

// console.log(Boolean(0)); // false
// console.log(Boolean(1)); // true
// console.log(Boolean('')); // false
// console.log(Boolean(' ')); // true
// console.log(Boolean({})); // true

// const cycleDistance = 0;
// if(cycleDistance !== 0) {
//     console.log(`You are ${cycleDistance}km away from your goal.`);
// } else {
//     console.log("You have not cycled.");
// }


// const favourite = prompt("What is your favourite colour?");

// console.log(favourite);

// console.log(typeof favourite);

// if (favourite === 'red') {
//     console.log("Red like A Fiat Barchetta.");
// }

// const favourite = Number(prompt("What is your favourite number?"));
// console.log(favourite);
// console.log(typeof favourite);

// if (favourite === 42) {
//     console.log(`You have discovered the HitchHiker's Guide to the Galaxy);`);
// } else if (favourite === 16) {
//     console.log("Oh to be sweet 16 again.");
// } else {
//     console.log("42 and 16 are the two answers I was inspired to write a comment on");
// }

console.log("playing with logical operators");

var waterPhobia = true;
var claustrophobia = false;

console.log(waterPhobia && claustrophobia);
console.log(waterPhobia || claustrophobia);

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

// function fruitBlender(mangoes, oranges) {
//     const fruit = `${mangoes} mangoes and ${oranges} oranges are available.`;
//     return fruit;
// }

// const fruitBlend = fruitBlender(3, 4);
// console.log(fruitBlend);

// const mangoJuice = fruitBlender(5, 0);
// console.log(mangoJuice);
// declaration - can be hoisted
// function calcHeight(peakHeight) {
//     return peakHeight - 455;
// }

// const ascent1 = calcHeight(1677);

// // Function Expression 
// const calcHeight2 = function(peakHeight) {
//     return peakHeight - 455;
// }

// const ascent2 = calcHeight2(1677);

// console.log(ascent1, ascent2);

// // Arrow Functions

// const calcHeight3 = peakHeight => peakHeight - 455;
// const ascent3 = calcHeight3(1677);
// console.log(ascent3);

// Needs to be debugged
// const roadTripRemaining = totalDistance => {
//     const distanceTravelled = 1300 - totalDistance;
//     console.log(distanceTravelled)
//     const tripCompletion = 1300 - distanceTravelled;
//     console.log(tripCompletion);
//     return tripCompletion;
// }

// console.log(roadTripRemaining(800));
// Arrow functions.
// const yearsUntilRetirement = (birthYear, firstname) => {
//     const age = 2020 - birthYear;
//     const retirement = 65 - age;
//     // return retirement;
//     console.log(`${firstname} will retire in ${retirement} years.`);
// }

// console.log(yearsUntilRetirement(1984, "George"));
// console.log(yearsUntilRetirement(1981, "Primo"));

// function fruitBlender(fruit) {
//     return fruit * 8;
// }

// function cocktailMaker(apples, pears, oranges, bananas) {
//     // call the function fruitBlender
//     const preparedApples = fruitBlender(apples);
//     const preparedPears = fruitBlender(pears);
//     const preparedOranges = fruitBlender(oranges);
//     const preparedBananas = fruitBlender(bananas);

//     const juice = `The Cocktail is made from ${preparedApples} apple pieces, ${preparedPears} pear fragments, ${preparedOranges} orange slices, and ${preparedBananas} sliced banana pieces.`;
//     return juice;
// }

// const ready = cocktailMaker(3, 4, 5, 6);
// console.log(ready);

//function review

// const findAge = function (birthYear) {
//     return 2040 - birthYear;
// }

// const yearsUntilFreedom = function (birthYear, nickname) {
//     const age = findAge(birthYear);
//     const liberation = 65 - age;
    
//     if (liberation > 0) {
//         console.log(`${nickname} has ${liberation} years remaining.`);
//         return liberation;
//     }   else {
//         console.log(`${nickname} is already retired.`);
//         return -1;
//     }
// }

// console.log(yearsUntilFreedom(1984, "George"));
// console.log(yearsUntilFreedom(1906, "Picsou"));

// JavaScript Fundamentals – Part 2
// Coding Challenge #1
// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new 
// gymnastics discipline, which works differently.
// Each team competes 3 times, and then the average of the 3 scores is calculated (so 
// one average score per team).
// A team only wins if it has at least double the average score of the other team. 
// Otherwise, no team wins!
// Your tasks:

// Part 1 
// 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
// function calcAverage (score1, score2, score3) {
//     const average = (score1 + score2 + score3) / 3;
//     return average;
// }

// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// 2. Use the function to calculate the average for both teams

//Data 1
// const avgDolphins = calcAverage(44, 23, 71);
// const avgKoalas = calcAverage(65, 54, 49);
// Data 2
// const avgDolphins = calcAverage(85, 54, 41);
// const avgKoalas = calcAverage(23, 34, 27);

// // 3. Create a function 'checkWinner' that takes the average score of each team 
// // as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner 
// // to the console, together with the victory points, according to the rule above. 
// // Example: "Koalas win (30 vs. 13)"

// function checkWinner (avgDolphins, avgKoalas) {
//     if (avgDolphins > avgKoalas * 2) {
//         console.log("Dolphins win (", avgDolphins, " vs. ", avgKoalas, ")");
//     } else if (avgKoalas > avgDolphins * 2) {
//         console.log("Koalas win (", avgKoalas, " vs. ", avgDolphins, ")");
//     } else {
//         console.log("The teams had a Draw (", avgDolphins, " vs. ", avgKoalas, ")");
//     }
// }

// // 4. Use the 'checkWinner' function to determine the winner for both Data 1 and 
// // Data 2
// console.log(checkWinner(avgDolphins, avgKoalas));


/*
Coding Challenge #2
Steven is still building his tip calculator, using the same rules as before: Tip 15% of 
the bill if the bill value is between 50 and 300, and if the value is different, the tip is 
20%.
Your tasks:
1. Write a function 'calcTip' that takes any bill value as an input and returns 
the corresponding tip, calculated based on the rules above (you can check out 
the code from first tip calculator challenge if you need to). Use the function 
type you like the most. Test the function using a bill value of 100
2. And now let's use arrays! So create an array 'bills' containing the test data 
below
3. Create an array 'tips' containing the tip value for each bill, calculated from 
the function you created before
4. Bonus: Create an array 'total' containing the total values, so the bill + tip
Test data: 125, 555 and 44
*/

//My solution
// function calcTip (bills) {
//     if (bills < 50) {
//         return bills * 0.15;
//     } else if (bills > 300) {
//         return bills * 0.20;
//     } else {
//         return bills * 0.15;
//     }
// }

// Option 2
// const calcTip = function(bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
// }
// Option 3
// const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;

// function iterator (bill) {
//     const tips = [];
//     for (let i = 0; i < bill.length; i++) {
//         tips.push(calcTip(bill[i]));
//     }
//     const total = [];
//     for (let i = 0; i < bill.length; i++) {
//         total.push(bill[i] + tips[i]);
//     }
//     return [tips, total];
// }

// const bills = [125, 555, 44];
// const tips = iterator(bills);
// console.log(bills);
// console.log(tips);

// Challenge - write a dynamic sentence generator

// var firstName = "John";
// var lastName = "Doe";
// var age = 35;
// var friends = ["Jane", "Mark", "Bob"];

// console.log (`${firstName}) has ${friends.length} friends, and his best friend is ${friends[0]}.`);

// const biggles = {
//     firstName: "Biggles",
//     lastName: "Bigglesworth",
//     birthYear: 1896,
//     job: "pilot",
//     friends: ["Sally", "Sam", "Sue"],
//     hasFlyingAbility: true,

//     // calcAge: function(birthYear) {
//     //     return 1914 - birthYear;
//     // }

//     // calcAge: function() {
//     //     console.log(this) // returns the entire object
//     //     return 1914 - this.birthYear;
//     // }

//     // streamline further
//     calcAge: function() {
//         this.age = 1914 - this.birthYear;
//         return this.age;
//     },

//     getSummary: function() {
//         return `${this.firstName} is a ${this.job} who is ${this.age} years old. He ${this.hasFlyingAbility ? 'can': 'cannot'} fly planes.`;
//     }
// };

// console.log(biggles.calcAge());
// console.log(biggles.age);
// console.log(biggles.age);
// console.log(biggles.age);


// console.log(biggles.getSummary());

// const mark = {
//     firstName: "Mark",
//     lastName: "Miller",
//     mass: 78,
//     height: 1.69,
//     calcBMI: function() {
//         this.bmi = this.mass / (this.height * this.height);
//         return this.bmi.toFixed(2);
//     }
// }

// var markBMI = mark.calcBMI();
// console.log(markBMI);

// const john = {
//     firstName: "John",
//     lastName: "Smith",
//     mass: 92,
//     height: 1.95,
//     calcBMI: function() {
//         this.bmi = this.mass / (this.height * this.height);
//         return this.bmi.toFixed(2);
//     },
// }

// var johnBmi = john.calcBMI();

// const summary = john.bmi > markBMI ? `${john.firstName} has a higher BMI(${johnBmi}) than ${mark.firstName}(${markBMI})` : `${mark.firstName} has a higher BMI (${markBMI}) than ${john.firstName} (${johnBmi})`;

// console.log(summary);

// Joke counter

// for (let num = 1; num <= 5; num++) {
//     console.log(`${num} gare`);
// }

// console.log("6 gares = Cigar")

// for (let num = 1; num <= 5; num++) {
//     console.log(`${num} tronc`);
// }

// console.log("6 troncs = Citrons")

const bike = [
    'Genesis',
    'Equilibrium',
    2022-2014,
    'road',
    ['cycling', 'touring', 'exploration'],
    true,
    'https://www.bicycling.com/images/products/genesis-g-series/genesis-g-series-hero-image.jpg',
];

const types = [];
console.log(types)
console.log(' ---- Strings ---- ')
for (let i = 0; i < bike.length; i++) {
    if (typeof bike[i] !== 'string') continue;
    console.log(bike[i], typeof bike[i]);

    types[i] = typeof bike[i];
}

console.log("<---- Break ---->")
for (let i = 0; i < bike.length; i++) {
    if (typeof bike[i] !== 'string') break;
    console.log(bike[i], typeof bike[i]);

    types[i] = typeof bike[i];
}

console.log(types)

const cols = [4884, 2670, 1161, 1286];
const climb = [];

for (let i = 0; i < cols.length; i++) {
    climb[i] = cols[i] - 484;
}

console.log(`The cyclist has to climb ${climb} meters`);
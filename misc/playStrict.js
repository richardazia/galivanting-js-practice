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

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// 2. Use the function to calculate the average for both teams

//Data 1
// const avgDolphins = calcAverage(44, 23, 71);
// const avgKoalas = calcAverage(65, 54, 49);
// Data 2
const avgDolphins = calcAverage(85, 54, 41);
const avgKoalas = calcAverage(23, 34, 27);

// 3. Create a function 'checkWinner' that takes the average score of each team 
// as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner 
// to the console, together with the victory points, according to the rule above. 
// Example: "Koalas win (30 vs. 13)"

function checkWinner (avgDolphins, avgKoalas) {
    if (avgDolphins > avgKoalas * 2) {
        console.log("Dolphins win (", avgDolphins, " vs. ", avgKoalas, ")");
    } else if (avgKoalas > avgDolphins * 2) {
        console.log("Koalas win (", avgKoalas, " vs. ", avgDolphins, ")");
    } else {
        console.log("The teams had a Draw (", avgDolphins, " vs. ", avgKoalas, ")");
    }
}

// 4. Use the 'checkWinner' function to determine the winner for both Data 1 and 
// Data 2
console.log(checkWinner(avgDolphins, avgKoalas));


// 5. Ignore draws this time
// Test data:

// § Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49

// § Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

// Hints:

// § To calculate average of 3 values, add them all together and divide by 3

// § To check if number A is at least double number B, check for A >= 2 * B. 

// Apply this to the team's average scores �
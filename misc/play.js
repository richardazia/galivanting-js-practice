const thisYear = new Date().getFullYear();

const ageBob = thisYear - 1984;
const ageJohn = thisYear - 1990;

// console.log("Bob is " + ageBob + " and John is " + ageJohn);

// // play with maths functions in javascript, ** is exponential ("2 * 2 * 2")

// console.log(ageBob * 2, ageJohn * 2);
// console.log(ageBob * ageJohn, 2 ** 3);

// firstName = "Donald";
// lastName = "Duck";

// console.log(firstName + " " + lastName);

//Operator Precedence - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

const now = 2022;

console.log(now - 1984 > now - 1990);

console.log(20 - 10 - 5);

let x, y;

x = y = 25 - 10 -5; // it will go from left to right for the maths part, and then from right to left for the assignment part

console.log(x, y);

const averageAge = (ageBob + ageJohn) / 2; // add the two ages and divide the result by two. We tell it how to calculate, instead of letting it assume.

console.log(ageBob, ageJohn, averageAge);
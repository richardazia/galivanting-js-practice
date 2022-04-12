"use-strict";
// Scope Practice
// function calcAge(birthYear) {
// 	const age = 2022 - birthYear;

// 	// console.log(firstName); // The Etruscan

// 	function printAge() {
// 		const output = `If born in ${birthYear} ${firstName} would be ${age} years old.`;
// 		console.log(output);

// 		// Block scope
// 		if (birthYear >= 1981 && birthyear <= 1996) {
// 			var millenial = true;
// 			// Create a new variable with the same name as outer scope
// 			const firstName = "Aranet";
// 			// reassinging outer scope variable
// 			const ouput = "The Quick brown fox jumped over the lazy dog";
// 			const strTrue = `${firstName}, Welcome to the Millenial club.`;
// 			console.log(strTrue);
// 			// E6 Block scope function
// 			function add(a, b) {
// 				return a + b;
// 			}
// 		} else {
// 			const strFalse = `Seems you were born way too early to be a millenial, ${firstName}`;
// 			console.log(strFalse);
// 			// console.log(output);
// 		}
// 		// console.log(strFalse, strTrue); // Out of Scope
// 		console.log(millenial);
// 		// add(4, 6); // not defined, out of scope
// 		// console.log(output);
// 	}
// 	printAge();

// 	return age;
// }

// const firstName = "The Etruscan";
// calcAge(55);
// // console.log(age); // undefined

// 02. Hoisting and the TDZ

// Hoisting

// console.log(me);
// // console.log(sport);
// // console.log(year);

// // Variables

// var me = "Richard";
// var sport = "hiking";
// const year = 2000;

// console.log(addDecl(1, 2)); // hoisted
// console.log(addExpr(1, 2)); // temporarl dead zone
// console.log(addArrow(1, 2)); //temporal dead zone

// function addDecl(a, b) {
// 	return a + b;
// }

// const addExpr = function (a, b) {
// 	return a + b;
// };

// var addArrow = (a, b) => a + b;

// Example
// console.log(numProd);
// if (!numProd) deleteShopCart();

// var numProd = 10;

// function deleteShopCart() {
// 	console.log("Your shopping cart is empty");
// }

// var x = 10;
// let y = 20;
// const z = 30;

// console.log(x === window.x); // true
// console.log(y === window.y); // false
// console.log(z === window.z); // false

// Playing with 'this'

// console.log(this);

// const calcAge = function (birthYear) {
// 	console.log(2022 - birthYear);
// 	console.log(this);
// };
// calcAge(1969);

// arrow function example

// const calcAgeArrow = (birthYear) => {
// 	console.log(2022 - birthYear);
// 	console.log(this); // shows the window object
// };
// calcAgeArrow(1969);

// const twitter = {
// 	year: 2006,
// 	calcAge: function () {
// 		console.log(this);
// 		console.log(2022 - this.year);
// 	},
// };
// twitter.calcAge();

// const picsou = {
// 	year: 1948,
// };

// picsou.calcAge = twitter.calcAge;
// picsou.calcAge();

// const f = twitter.calcAge;
// f();

// 98. Regular functions vs arrows

// const aranet = {
// 	fullName: "Aranet4",
// 	year: 2022,
// 	calcDioxide: function () {
// 		console.log(this);
// 		console.log(2037 - this.year);
// 	},
// 	// greet: () => console.log(`Hey ${this.fullName}`),
// 	greet: function () {
// 		console.log(this);
// 		console.log(`Hey ${this.fullName}`);
// 	},
// };
// aranet.greet();

// never use an arrow function as a method

// const aranet = {
// 	fullName: "Aranet4",
// 	year: 2022,
// 	calcDioxide: function () {
// 		console.log(2022 - this.year);

// // Solution 1:
// const self = this;
// const isNew = function () {
// 	console.log(self);
// 	// console.log(this.year >= 2018 && this.year <= 2023);
// 	console.log(
// 		`The product is new: ${self.year >= 2018 && self.year <= 2023}`
// 	);
// };

// Solution 2: arrow function
// 		const isNew = () => {
// 			console.log(this);
// 			// console.log(this.year >= 2018 && this.year <= 2023);
// 			console.log(
// 				`The product is new: ${this.year >= 2018 && this.year <= 2023}`
// 			);
// 		};

// 		isNew();
// 	},
// 	// greet: () => console.log(`Hey ${this.fullName}`),
// 	greet: function () {
// 		console.log(this);
// 		console.log(`Hey ${this.fullName}`);
// 	},
// };
// aranet.greet();
// aranet.calcDioxide();
// //arguments keyword
// const addExpr = function (a, b) {
// 	console.log(arguments);
// 	return a + b;
// };
// addExpr(5, 2);
// addExpr(5, 12, 15, 12, 17, 22);

// var arrow = (a, b) => {
// 	console.log(arguments);
// 	return a + b;
// };
// arrow(5, 2, 3, 4, 5, 6);

// let duration = 120;
// let totalDuration = duration;
// duration = 121;
// console.log(duration);
// console.log(totalDuration);

// let age = 30;
// let wise = age;
// age = 31;
// console.log(age);
// console.log(wise);

// const bee = {
// 	name: "Melissa",
// 	age: 25,
// };

// const otherBee = bee;
// otherBee.age = 23;
// console.log("otherBee", otherBee);
// console.log("bee", bee);

// Primitives vs Objects part Deux
// Primitives
// let lastName = "Rabbit";
// let oldLastName = lastName;
// lastName = "Lapin";
// console.log(lastName, oldLastName);
// // Reference types
// const jessica = {
// 	name: "Jessica",
// 	lastName: "Rabbit",
// 	age: 37,
// };

// const marriedJessica = jessica;
// marriedJessica.lastName = "Lapin";
// console.log("Before Marriage: ", jessica);
// console.log("After Marriage: ", marriedJessica);

const jessica2 = {
	name: "Jessica",
	lastName: "Rabbit",
	age: 37,
};

// Only creates a shallow copy rather than a deep clone
const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = "Lapin";
console.log("Before Marriage: ", jessica2);
console.log("After Marriage: ", jessicaCopy);

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

// const jessica2 = {
// 	name: "Jessica",
// 	lastName: "Rabbit",
// 	age: 37,
// };

// // Only creates a shallow copy rather than a deep clone
// const jessicaCopy = Object.assign({}, jessica2);
// jessicaCopy.lastName = "Lapin";
// console.log("Before Marriage: ", jessica2);
// console.log("After Marriage: ", jessicaCopy);

// // 103. Destructuring arrays
// const arr = [1, 2, 3, 4, 5];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];
// const d = arr[3];
// const e = arr[4];

// // JavaScript knows how to destructure arrays
// const [f, g, h, i, j] = arr;
// console.log(f, g, h, i, j);
// console.log(arr);

// const climbing = {
// 	name: "Totem Escalade",
// 	location: "Gland",
// 	categories: ["climbing", "indoor", "bouldering", "lessons", "fitness"],
// 	requirements: ["chalk", "climbing shoes"],
// 	climbingGrades: ["easy", "moderate", "hard"],
// 	desire: function (categories, requirements) {
// 		return [this.requirements[requirements], this.categories[categories]];
// 	},
// };

// const [first, , third, fifth] = climbing.categories;
// console.log(first, third, fifth);
// console.log(first, third);

// let [main, , secondary] = climbing.categories;
// console.log(main, secondary);

// // Switching places between main and secondary - option 1
// // const temp = main;
// // main = secondary;
// // secondary = temp;
// // console.log(main, secondary);

// // Option 2
// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// console.log(climbing.desire(1, 0));

// const [requirements, categories] = climbing.desire(1, 0);
// console.log(requirements, categories);

// const nested = [2, 4, [6, 8]];
// // const [w, , y] = nested; // shows 2 and the nested array
// const [w, , [y, z]] = nested;
// console.log(w, y, z);

// Default values
// const [s, p, q, r] = ["senatus", "populus", "que"];
// console.log(s, p, q, r);

const climbing = {
	name: "Totem Escalade",
	location: "Gland",
	categories: ["climbing", "indoor", "bouldering", "lessons", "fitness"],
	requirements: ["chalk", "climbing shoes"],
	climbingGrades: ["easy", "moderate", "hard"],
	snackOption: ["crisps", "chips", "chocolate", "candy", "peanuts"],
	drinkOption: [
		"water",
		"juice",
		"coke",
		"coffee",
		"tea",
		"hot chocolate",
		"beer",
		"wine",
	],
	openingHours: {
		monday: {
			open: "9:00",
			close: "18:00",
		},
		tuesday: {
			open: "9:00",
			close: "18:00",
		},
		wednesday: {
			open: "9:00",
			close: "18:00",
		},
		thursday: {
			open: "9:00",
			close: "18:00",
		},
		friday: {
			open: "9:00",
			close: "22:00",
		},
		saturday: {
			open: "9:00",
			close: "22:00",
		},
		sunday: {
			open: "9:00",
			close: "22:00",
		},
	},

	desire: function (categories, requirements) {
		return [this.requirements[requirements], this.categories[categories]];
	},

	desireDelivery: function ({ snack, drink, time, location }) {
		console.log(`Ready for delivery at ${time} in ${location}:
		snack: ${this.snackOption[snack]},
		drink: ${this.drinkOption[drink]}`);
	},
	orderPasta: function (ing1, ing2, ing3) {
		console.log(
			`Thank you for ordering the Pasta al ${ing1}, ${ing2} e ${ing3}`
		);
	},
};

// climbing.desireDelivery({
// 	time: "09:30",
// 	date: "2020-05-01",
// 	location: "Gland",
// 	snack: 3,
// 	drink: 2,
// });

// const { name, openingHours, categories, requirements } = climbing;
// console.log(name, openingHours, categories, requirements);

// const {
// 	name: ClimbingGymName,
// 	openingHours: hours,
// 	categories: options,
// } = climbing;
// console.log(ClimbingGymName, hours, options);

// // Default values - changing them to what we need, for example to take data from an API and adapt it to our needs
// const { menu = [], snackOption: snacks = [], drinkOption: drinks } = climbing;
// console.log(menu, snacks, drinks);

// // Mutating variables
// let a = 1020;
// let b = 1930;
// const obj = { a: 62, b: 32, c: 12 };
// ({ a, b } = obj);
// console.log(a, b);

// const {
// 	friday: { open, close },
// } = openingHours;
// console.log(`We are open from ${open} to ${close} on Friday`);

// const { drinkMenu = [], snackOption: snackMenu = [] } = climbing;
// console.log(`The options are: ${drinkOption},
// ${snackMenu}`);

// 105. The Spread Operator ...

// const arr = [1, 2, 3, 4, 5];
// const badArr = [1, 2, arr[0], arr[1], arr[2], 3, 4, 5];
// const newArr = [...arr];

// console.log(badArr);
// console.log(newArr);

// // copy array
// const mainMenuCopy = [...climbing.menu]; // shallow copy

// // To join two arrays

// const entireMenu = [...climbing.menu, ...climbing.snackOption];
// console.log(entireMenu);

// Iterables: arrays, strings, maps, sets, typed arrays but not objects
// const str = "Richard";
// let lettersName = [...str, " ", "A."];
// console.log(lettersName);

// const str2 = "The Quick Brown fox jumped over the lazy dog";
// let lettersPhrase = [...str2];
// console.log(lettersPhrase);

// const ingredients = [
// 	prompt("Let's make Pasta with: ingredient 1?"),
// 	prompt("Ingredient 2?"),
// 	prompt("Ingredient 3?"),
// ];
// console.log(ingredients);

// climbing.orderPasta(...ingredients);

// And now with objects
// const newClimbing = { foundedIn: 2007, ...climbing, owner: "Eiger" };
// console.log(newClimbing);

// const climbingShallowCopy = { ...climbing };

// 106. The Rest Operator ...
// Desctructuring arrays
const arr = [1, 2, ...[4, 5]];
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [fondue, , raclette, ...otherFood] = [
	...climbing.snackOption,
	...climbing.drinkOption,
];
console.log(fondue, raclette, otherFood);

// Objects

const { saturday, sunday, ...weekDays } = climbing.openingHours;
console.log(weekDays);

// Functions
const add = function (...numbers) {
	let sum = 0;
	for (let i = 0; i < numbers.length; i++) {
		sum += numbers[i];
	}
	console.log(sum);
	return sum;
};

add(2, 3);
add(5, 3, 7, 2);
add(251, 546, 878, 781, 12, 31);

const addMe = [14, 15, 18, 23, 23, 47, 55, 64, 12, 12];
add(...addMe);

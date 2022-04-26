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

// const climbing = {
// 	name: "Totem Escalade",
// 	location: "Gland",
// 	categories: ["climbing", "indoor", "bouldering", "lessons", "fitness"],
// 	requirements: ["chalk", "climbing shoes"],
// 	climbingGrades: ["easy", "moderate", "hard"],
// 	snackOption: ["crisps", "chips", "chocolate", "candy", "peanuts"],
// 	drinkOption: [
// 		"water",
// 		"juice",
// 		"coke",
// 		"coffee",
// 		"tea",
// 		"hot chocolate",
// 		"beer",
// 		"wine",
// 	],
// 	openingHours: {
// 		monday: {
// 			open: "9:00",
// 			close: "18:00",
// 		},
// 		tuesday: {
// 			open: "9:00",
// 			close: "18:00",
// 		},
// 		wednesday: {
// 			open: "9:00",
// 			close: "18:00",
// 		},
// 		thursday: {
// 			open: "9:00",
// 			close: "18:00",
// 		},
// 		friday: {
// 			open: "9:00",
// 			close: "22:00",
// 		},
// 		saturday: {
// 			open: "9:00",
// 			close: "22:00",
// 		},
// 		sunday: {
// 			open: "9:00",
// 			close: "22:00",
// 		},
// 	},

// 	desire: function (categories, requirements) {
// 		return [this.requirements[requirements], this.categories[categories]];
// 	},

// 	desireDelivery: function ({ snack, drink, time, location }) {
// 		console.log(`Ready for delivery at ${time} in ${location}:
// 		snack: ${this.snackOption[snack]},
// 		drink: ${this.drinkOption[drink]}`);
// 	},
// 	orderPasta: function (ing1, ing2, ing3) {
// 		console.log(
// 			`Thank you for ordering the Pasta al ${ing1}, ${ing2} e ${ing3}`
// 		);
// 	},
// };

// const climb1 = {
// 	name: "Leukerbad",
// 	numClimbers: 200,
// };

// const climb2 = {
// 	name: "Le Moléson",
// 	canton: "Fribourg",
// };

// // climb1.numClimbers = climb1.numClimbers || 10;
// // climb2.numClimbers = climb2.numClimbers || 10;

// // climb1.numClimbers ||= 10;
// // climb2.numClimbers ||= 10;
// // Nullish assignment operator
// climb1.numClimbers ??= 10;
// climb2.numClimbers ??= 10;

// // climb2.canton = climb2.canton && "Switzerland";

// climb1.canton ??= "Switzerland";
// climb2.canton ??= "Switzerland";

// console.log(climb1);
// console.log(climb2);
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
// const arr = [1, 2, ...[4, 5]];
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// const [fondue, , raclette, ...otherFood] = [
// 	...climbing.snackOption,
// 	...climbing.drinkOption,
// ];
// console.log(fondue, raclette, otherFood);

// // Objects

// const { saturday, sunday, ...weekDays } = climbing.openingHours;
// console.log(weekDays);

// // Functions
// const add = function (...numbers) {
// 	let sum = 0;
// 	for (let i = 0; i < numbers.length; i++) {
// 		sum += numbers[i];
// 	}
// 	console.log(sum);
// 	return sum;
// };

// add(2, 3);
// add(5, 3, 7, 2);
// add(251, 546, 878, 781, 12, 31);

// const addMe = [14, 15, 18, 23, 23, 47, 55, 64, 12, 12];
// add(...addMe);

// console.log("(----- OR ------)");

// console.log(5 || "Duck");
// console.log("" || "Duck");
// console.log(null || "Duck");
// console.log(undefined || "Duck");
// console.log(undefined || null);
// console.log(true || 0);
// console.log(false || 0);
// console.log(true || false);

// // We say that it has short circuited when it has found a truthy value and stopped before the end of the arguments

// const climbers = climbing.climbers ? climbing.climbers : 10;
// console.log(climbers);

// const squirrels = climbing.climbers || 10;
// console.log(`The Number of Squirrel climbers: ${squirrels}`);

// console.log("(----- AND ------)");
// console.log("Duck" && "false");
// console.log("Duck" && "true");
// console.log("Duck" && "null");
// console.log("Duck" && "undefined");
// console.log("Duck" && "0");
// console.log("Duck" && "1");
// console.log("Duck" && "true" && "false");

// // Nullish Coalescing Operator

// let squirrels2 = 0;
// const squirrelsCorrect = squirrels2 && 10;
// console.log(squirrelsCorrect);

//110. Coding challenge 1

// const game = {
// 	team1: "Bayern Munich",
// 	team2: "Borrussia Dortmund",
// 	players: [
// 		[
// 			"Neuer",
// 			"Pavard",
// 			"Martinez",
// 			"Alaba",
// 			"Davies",
// 			"Kimmich",
// 			"Goretzka",
// 			"Coman",
// 			"Muller",
// 			"Gnarby",
// 			"Lewandowski",
// 		],
// 		[
// 			"Burki",
// 			"Schulz",
// 			"Hummels",
// 			"Akanji",
// 			"Hakimi",
// 			"Weigl",
// 			"Witsel",
// 			"Hazard",
// 			"Brandt",
// 			"Sancho",
// 			"Gotze",
// 		],
// 	],
// 	score: "4:0",
// 	scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
// 	date: "9th November, 2037",
// 	odds: {
// 		team1: 1.33,
// 		x: 3.25,
// 		team2: 6.5,
// 	},
// };

// // let players1 = game.players[0];
// // let players2 = game.players[1];
// const [players1, players2] = game.players;

// // team1GK = players1[0];
// // let team1FieldPlayers = [...players1].slice(1, 11);
// // team2GK = players2[0];
// const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);
// const [gk2, ...FieldPlayers2] = players2;

// // let team2FieldPlayers = [...players2].slice(1, 11);
// const allPlayers = [...players1, ...players2];
// const players1Final = ["Thiago", "Coutinho", "Perisic", ...players1];
// console.log(`Bayern Munchen: ${gk}, Borussia Dortmund: ${gk2}`);
// console.log(fieldPlayers);
// console.log(FieldPlayers2);
// console.log(allPlayers);
// console.log(players1Final);

// // const gameOdds = game.odds;
// // const team1 = gameOdds.team1;
// // const draw = gameOdds.x;
// // const team2 = gameOdds.team2;
// // console.log(
// // 	`The odds:
// // 	Munchen Victory: ${team1}:
// // 	Team Draw ${draw}:
// // 	Borussia Dortmund wins: ${team2}`
// // );

// const {
// 	odds: { team1, x, team2 },
// } = game;
// console.log(`The odds:
// Munchen Victory: ${team1}:
// Team Draw ${x}:
// Borussia Dortmund wins: ${team2}`);

// gameScored = game.scored;

// const printGoals = function (...gameScored) {
// 	console.log(gameScored);
// 	console.log(`${gameScored.length} goals were scored`);
// 	// for (let i = 0; i < gameScored.length; i++) {
// 	// 	console.log(`Goal scored by ${gameScored[i]}`);
// 	// }
// };

// printGoals(...gameScored);
// // 7.
// team1 < team2 && console.log("Team 1 is most likely to win");
// team1 > team2 && console.log("Team 2 is most likely to win");

// // console.log(team1 < team2 && draw < team2);
// // console.log(team2 < team1 && draw < team1);
// // console.log(draw < team1 && draw < team2);

// // Challenge 2
// // 1.
// const keyGoal = Object.keys(game.scored);
// console.log(keyGoal);
// const playerGoals = Object.values(game.scored);
// console.log(`Goal: ${playerGoals}`);

// // Attempt 1
// // let openStr = `Goal ${keyGoal}: ${playerGoals}`;
// // console.log(openStr);
// // for (const playerGoal of playerGoals) {
// // 	openStr += `Goal:${keyGoal} ${playerGoal}`;
// // }
// // Attempt 2
// for (const [keygoal, playerGoal] of Object.entries(game.scored)) {
// 	console.log(`Goal ${keygoal}: ${playerGoal}`); // This almost works
// }

// // Course solution:
// for (const [i, player] of game.scored.entries())
// 	console.log(`Goal ${i + 1}: ${player}`);
// //2.
// // My attempt
// const averageOdds = () => {
// 	let average = (team1 + x + team2) / 3;
// 	console.log(`The average odds are ${average.toFixed(2)}`);
// };
// averageOdds(team1, x, team2);

// //Course solution:
// const odds = Object.values(game.odds);
// let average = 0;
// for (const odd of odds) average += odd;
// average /= odds.length;
// console.log(`The average odds are ${average.toFixed(2)}`);

// //3. Aim: to create a function that will print the game odds
// /*
// odds of victory: team 1: [odds.team1]
// Odds of draw: [odds.x]
// Odds of victory team2: [odds.team2]
// */
// // My solution
// const printOdds = function (odds) {
// 	console.log(`Odds of victory: ${game.team1}: ${odds.team1}`);
// 	console.log(`Odds of draw: ${odds.x}`);
// 	console.log(`Odds of victory: ${game.team2}: ${odds.team2}`);
// };

// printOdds(game.odds);

// //Course solution:
// console.log("Course solution: ");
// for (const [team, odd] of Object.entries(game.odds)) {
// 	const teamStr = team === "x" ? "draw" : `victory ${game[team]}`;
// 	console.log(`Odds of ${teamStr} ${odd}`);
// }

// 4.
/*
Bonus: Create an object called 'scorers' which contains the names of the
players who scored as properties, and the number of goals as the value. In this
game, it will look like this:
{
 Gnarby: 1,
 Hummels: 1,
 Lewandowski: 2
}
*/

// The For Of Loop

const weekDays = [
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday",
	"Sunday",
];

const openingHours = {
	[weekDays[0]]: {
		open: "09:00",
		close: "18:00",
	},
	[weekDays[1]]: {
		open: "09:00",
		close: "18:00",
	},
	[weekDays[2]]: {
		open: "09:00",
		close: "18:00",
	},
	[weekDays[3]]: {
		open: "09:00",
		close: "18:00",
	},
	[weekDays[4]]: {
		open: "09:00",
		close: "22:00",
	},
	[weekDays[5]]: {
		open: "09:00",
		close: "22:00",
	},
	[weekDays[6]]: {
		open: "09:00",
		close: "22:00",
	},
};

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
	// ES6 Enhanced Object Literals
	openingHours, // same as openingHours: openingHours

	desire(categories, requirements) {
		return [this.requirements[requirements], this.categories[categories]];
	},

	desireDelivery({ snack, drink, time, location }) {
		console.log(`Ready for delivery at ${time} in ${location}:
		snack: ${this.snackOption[snack]},
		drink: ${this.drinkOption[drink]}`);
	},
};

// Using Sets

// const climbGrade = new Set(["td", "ed", "d", "td", "ed", "d"]);
// console.log(climbGrade);

// console.log(new Set("supercalifragiexpialidocious"));

// console.log(new Set("The quick brown fox jumped over the lazy dog"));

// console.log(climbGrade.size);
// console.log(climbGrade.has("d"));
// console.log(climbGrade.has("td"));
// console.log(climbGrade.has("ve"));
// climbGrade.add("ve");
// climbGrade.add("ve");
// climbGrade.add("ve");
// console.log(climbGrade);
// climbGrade.delete("ve");
// console.log(climbGrade);
// // to clear the set
// // climbGrade.clear();

// for (const grade of climbGrade) {
// 	console.log(grade);
// }

// const members = [
// 	"instructor",
// 	"climber",
// 	"bar staff",
// 	"cashier",
// 	"cashier",
// 	"route setter",
// 	"instructor",
// 	"cleaner",
// ];

// const memberSet = [...new Set(members)];
// console.log(memberSet);

// console.log(
// 	new Set([
// 		"instructor",
// 		"climber",
// 		"bar staff",
// 		"cashier",
// 		"cashier",
// 		"route setter",
// 		"instructor",
// 		"cleaner",
// 	]).size
// );

// const sites = new Map();

// sites.set("name", "Tychodrome");
// sites.set("location", "Neuchatel");
// console.log(sites.set(2, "Echelles De La Mort"));

// sites
// 	.set("categories", [
// 		"climbing",
// 		"outdoor",
// 		"bouldering",
// 		"lessons",
// 		"fitness",
// 	])
// 	.set("season", "summer")
// 	.set("price", "free")
// 	.set("sunrise", 5)
// 	.set("sunset", 19)
// 	.set(true, "Climbing during the day is fine")
// 	.set(false, "Night is not ideal");

// console.log(sites.get("name"));
// console.log(sites.get("categories"));
// console.log(sites.get("season"));
// console.log(sites.get("price"));

// const time = 9;
// console.log(
// 	sites.get(time > sites.get("sunrise") && time < sites.get("sunset"))
// );

// console.log(sites.has("categories"));
// sites.delete(2);
// console.log(sites);

// const arr = [5, 6];
// sites.set(arr, "It works");
// sites.set(document.querySelector("h1"), "Heading");
// console.log(sites);
// console.log(sites.size);
// console.log(sites.get(arr));

//Maps: Iteration
/*
const question = new Map([
	["question", "What is the official name of the latest major JS version?"],
	[1, "ES5"],
	[2, "ES6"],
	[3, "ES7"],
	["correct answer", 3],
	[
		true,
		"Correct! 3 was the right answer. ES7 is the latest major version of JS.",
	],
	[false, "Bad luck, 3 is correct. ES7 is the latest major version of JS."],
]);
console.log(question);
// Convert an object to a map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));

console.log(hoursMap);

//Quiz app
console.log(question.get("question"));
for (const [key, value] of question) {
	if (typeof key === "number") {
		console.log(`Answer ${key}: ${value}`);
	}
	// const answer = Number(prompt("Please select the correct answer"));
	const answer = 3;
	if (answer === question.get("correct answer")) {
		console.log(question.get(true));
	} else {
		console.log("You chose " + answer, ": " + question.get(false));
	}
}

// convert map to array
console.log([...question]);
console.log(question.entries());
console.log(question.keys());
console.log(question.values());
*/
// These are not indexed.

// // Property Names in Object Literals
// const properties = Object.keys(openingHours);
// console.log(properties);

// console.log(`We are open ${properties.length} days per week.`);

// let openStr = `We are open ${properties.length} days per week:`;
// for (const day of properties) {
// 	openStr += `${day} from ${openingHours[day].open} to ${openingHours[day].close}, `;
// }
// console.log(openStr);

// //Property Values
// const values = Object.values(openingHours);
// console.log(values);

// // Entire Object
// const entries = Object.entries(openingHours);
// console.log(entries);

// for (const x of entries) {
// 	console.log(x); // Shows the day of the week
// }

// // Option 1
// for (const [day, hours] of entries) {
// 	console.log(`${day}: ${hours.open} to ${hours.close}`); // // Shows the day of the week and the opening and closing hours
// }

// // Option 2
// for (const [key, { open, close }] of entries) {
// 	console.log(`On ${key} we are open from ${open} to ${close}`);
// }

// for (const day of properties) {
// 	console.log(`${day}: ${openingHours[day].open} - ${openingHours[day].close}`);
// }

// const menu = [...climbing.snackOption, ...climbing.drinkOption];
// for (const item of menu) {
// 	console.log(item);
// }

// for (const [i, el] of menu.entries()) {
// 	// console.log(`${item[0] + 1}: ${item[1]}`);
// 	console.log(`${i + 1}: ${el}`);
// }

// console.log([...menu.entries()]); // [entries] -> [iterator]

// // Enhanced Object literals
// console.log(climbing);

// if (climbing.openingHours && climbing.openingHours.monday)
// 	console.log(climbing.openingHours.monday.open);

// console.log(climbing.openingHours.monday?.open);
// console.log(climbing.openingHours?.monday?.open);

// const days = [
// 	"Monday",
// 	"Tuesday",
// 	"Wednesday",
// 	"Thursday",
// 	"Friday",
// 	"Saturday",
// 	"Sunday",
// ];

// for (const day of days) {
// 	const open = climbing.openingHours[day]?.open;
// 	const close = climbing.openingHours[day]?.close;
// 	console.log(`On ${day} the climbing gym is open from ${open} to ${close}`);
// }

// // if time = 0 then we can use climbing.openingHours[day]?.open ?? "closed"; to avoid errors

// const users = [
// 	{ name: "John", email: "john@example.com", fax: "123456789" },
// 	{ name: "Mary", email: "theOne@trickle.com" },
// ];

// console.log(users[0]?.email ?? "No email");
// console.log(users[1]?.fax ?? "No fax ");

// Coding Challenge 3
/*
const gameEvents = new Map([
	[17, "Goal"],
	[36, "Substitution"],
	[47, "Goal"],
	[61, "Substitution"],
	[64, "Yellow card"],
	[69, "Red card"],
	[70, "Substitution"],
	[72, "Substitution"],
	[76, "Goal"],
	[80, "Goal"],
	[92, "Yellow card"],
]);
*/
// 1. Create an events array (no duplicates)

// const eventsArray = gameEvents.values(); // [Goal, Substitution, Goal, Substitution, Yellow Card, Red Card, Substitution, Substitution, Goal, Goal, Yellow Card]
// console.log(eventsArray); // Not quite what I want.

// const eventsArray = [...gameEvents.values()];
// console.log(eventsArray);
/*
const eventsArray = [...new Set(gameEvents.values())];
console.log("Events array: " + eventsArray);

// 2. Remove yellow card from minute 64
console.log(gameEvents.delete(64) + ": event at minute 64 was removed"); // true

// 3. Compute and log the following string "An event happened, on average, every 9 minutes"
console.log(
	`An event happened on average every ${92 / gameEvents.size} minutes`
);
const time = [...gameEvents.keys()].pop(); // Don't forget to write () after pop
console.log("Game duration: " + time);
console.log(
	`An event happened on average every ${time / gameEvents.size} minutes`
);

//The part I struggled with.

// 4. Loop through events and mark whether they are in the first or second half.
// The first half is from 0 to 45 and the second half is from 45 to 90.
/*
// My code
for (const [minute, event] of gameEvents) {
	if (minute < 45) {
		console.log(`[First half]:  ${minute}: ${event} `);
	} else {
		console.log(`[Second half]: ${minute}: ${event} in `);
	}
}
*/
/*
// Course version
for (const [min, event] of gameEvents) {
	const half = min <= 45 ? "First" : "Second";
	console.log(`[${half} half]: ${min}: ${event}`);
}
*/

// Working With Strings: Part 1

const airline = "LH Lufthansa Airline";
const flightNumber = "LH1234";
const aircraft = "Airbus A320";

console.log(aircraft[0]);
console.log(aircraft[1]);
console.log(aircraft[2]);
console.log(aircraft[3]);
console.log(aircraft[4]);
console.log(aircraft[5]);
console.log(aircraft.indexOf("A"));
console.log(aircraft.indexOf("A", 1));
console.log(aircraft.lastIndexOf("A"));
console.log(aircraft.slice(3, 7));
console.log(aircraft.slice(0, -4));
console.log(airline.slice(0, airline.indexOf(" ")));
console.log(airline.slice(airline.indexOf(" ") + 1));
console.log(airline.lastIndexOf(" "));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
	const s = seat.slice(-1);
	if (s === "A" || s === "F") {
		console.log("You got a window seat!");
	} else if (s === "B" || s === "E") {
		console.log("Bad luck, You got a middle seat!");
	} else if (s === "C" || s === "D") {
		console.log("You got an aisle seat!");
	}
};

checkMiddleSeat("12A");
checkMiddleSeat("15C");
checkMiddleSeat("15A");
checkMiddleSeat("15F");
checkMiddleSeat("17B");
checkMiddleSeat("19F");

// Behind the scenes: What JS is doing.

console.log(new String("I am a simple string"));
console.log(typeof new String("I am a simple string"));

//strings are turned into objects

// "use strict";
// // Lesson 1

// const bookings = [];

// const createBooking = function (flightNo, pax = 1, price = 0) {
// 	//ES6

// 	/*
//   // ES5 Default Parameters
// 	pax = pax || 1;
// 	price = price || free;
//   */

// 	const booking = {
// 		flightNo,
// 		pax,
// 		price,
// 	};
// 	console.log(booking);
// 	bookings.push(booking);
// };

// createBooking("LX1712", 154, 200);
// createBooking("LX1736");

// // if you want to skip a parameter, you can use the following syntax

// createBooking("LX1712", undefined, 35); // pax is set to undefined
// createBooking("LX1712", null, 35); // Null does not work

// const flight = "LX1744";
// const thePax = {
// 	name: "Sarah",
// 	age: 25,
// 	isbn: 9782266259293,
// };

// const checkIn = function (flightNo, pax = thePax) {
// 	flightNo = "LX1747";
// 	pax.name = "Ms " + pax.name;

// 	if (pax.isbn === 9782266259293) {
// 		alert(
// 			`Dear ${pax.name}, you have successfully checked in to flight ${flightNo}.
//       Please remember to be at the airport at least two hours prior to your flight. `
// 		);
// 	} else {
// 		alert(
// 			`Dear ${pax.name}, The passport No. ${pax.isbn} is not valid
//       Pleasse check in with the correct passport.`
// 		);
// 	}
// };

// checkIn(flight, thePax);

// const newIsbn = function (thePax) {
// 	thePax.isbn = Math.trunc(Math.random() * 10000000000);
// 	console.log(`New 'passport' No: ${thePax.isbn}`);
// 	return thePax;
// };

// newIsbn(thePax);

// const oneWord = function (word) {
// 	return word.replace(/ /g, "").toLowerCase();
// };

// const upperFirstWord = function (word) {
// 	const [first, ...others] = word.split(" ");
// 	return [first.toUpperCase(), ...others].join(" ");
// };

// //higher order function
// const transformer = function (str, fn) {
// 	console.log(`The original string is ${str}`);
// 	console.log(`Transformed string: ${fn(str)}`);

// 	console.log(`Transformed by ${fn.name}`);
// };

// transformer("Ducks are running amock in the world", upperFirstWord);
// transformer("Ducks are running amock in the world", oneWord);

// const duckRow = function () {
// 	console.log("🦆🦆🦆");
// };

// document.body.addEventListener("click", duckRow);

// [("Lac de Lucerne", "Lac Léman", "Lac De Joux")].forEach(duckRow);

//Playing with Closures
/*
const greet = function (greeting) {
	return function (name) {
		console.log(`${greeting} ${name}`);
	};
};
*/

// As an arrow function
// We keep the constant and skip "function". We then arrow into name before console logging the greeting and the name.
/*An arrow function expression (also known as fat arrow function) has a shorter syntax compared to function expressions and lexically binds the this value (does not bind its own this, arguments, super, or new.target). Arrow functions are always anonymous. These function expressions are best suited for non-method functions and they can not be used as constructors.

https://developer.mozilla.org/en-US/docs/web/javascript/reference/functions/arrow_functions

*/
// My version - same as the course example given in the challenge solution.
// const greet = (greeting) => (name) => console.log(`${greeting} ${name}`);

/*
const greet = function (greeting) {
	return function (name) {
		console.log(`${greeting} ${name}`);
	};
};
*/
/*
const quickHello = greet("Hi");

quickHello("Brown Fox");
quickHello("Lazy Dog");

greet("Guten Morgen")("Heidi");

const salute = function (salutation) {
	return function (name) {
		console.log(`${salutation} ${name}`);
	};
};

const morning = function (wishGoodMorning) {
	return function (name) {
		console.log(`I wish you a good ${wishGoodMorning} ${name}`);
	};
};

const salve = salute("Salutations");

salve("Amicus");
salve("Amica");
salve("Richard");

morning("morning")("Amicus");
morning("afternoon")("Amica");
morning("swim")("Richard");
*/

const lufthansa = {
	airline: "Lufthansa",
	iataCode: "LH",
	bookings: [],
	book(flightNo, name) {
		console.log(
			`${name} is flying with ${this.airline} on flight ${this.iataCode}${flightNo}`
		);
		this.bookings.push({ flight: `${this.iataCode}${flightNo}`, name });
	},
};

lufthansa.book("1712", "Andrea");
lufthansa.book("1212", "Sophie");
lufthansa.book("5712", "Herr Heinz");

const easyjet = {
	airline: "easyjet",
	iataCode: "EZ",
	bookings: [],
};

const book = lufthansa.book;

// undefined error
//book(23, "Andrea");

// to use the Call function
book.call(easyjet, 23, "Andrea");
console.log(easyjet);

book.call(lufthansa, "1712", "Andrea");
console.log(lufthansa);

const swiss = {
	airline: "Swiss",
	iataCode: "LX",
	bookings: [],
};

book.call(swiss, 1242, "Heidi");
console.log("Swiss:" + swiss);
// Apply Method
const flightdata = [367, "Lord Byron"];
book.apply(easyjet, flightdata);
console.log(easyjet);

//New technique

book.call(swiss, ...flightdata);
console.log("Swiss 2: " + swiss, ...flightdata);

const bookEz = book.bind(easyjet);
const bookLh = book.bind(lufthansa);
const bookCh = book.bind(swiss);

bookEz(1033, "Heidi");
bookEz(1035, "Thomy");
bookEz(1036, "The Knight who says Ni");

bookLh(1712, "Andrea");
bookLh(1212, "Sophie");
bookLh(5712, "Herr Heinz");

bookCh(1242, "Heidi");
bookCh(1243, "Sophie");
bookCh(1244, "Herr Heinz");

// You can also use the bind method to create a copy of a function that has a preset context. We can preset a flight number, for example.

const bookCH1242 = book.bind(swiss, 1242);
bookCH1242("Heidi");
bookCH1242("Sophie");
bookCH1242("Herr Heinz");
bookCH1242("Steve");
bookCH1242("John");

// Using event listeners

lufthansa.planes = 400;
lufthansa.buyPlane = function () {
	console.log(this);
	this.planes++;
	console.log(this.plane);
};

// lufthansa.buyPlane();

document
	.querySelector(".buyPlane")
	.addEventListener("click", lufthansa.buyPlane.bind(lufthansa));

// Partial application

const addTax = (rate, value) => value + value * rate;
console.log(`Inclusive of tax: ${addTax(0.25, 3541)}`);

const addVAT = addTax.bind(null, 0.23);
// long form version: addVAT = value => value + value * 0.23;

console.log(addVAT(3541));
console.log(addVAT(10));
console.log(addVAT(100));

// Challenge attempt
function addMarkup(rate, value) {
	return value + value * rate;
}

console.log(addMarkup(0.25, 3541));

// Second attempt

function earlyAdopterTax() {
	return function calc(cost) {
		return cost + cost * 0.7;
	};
}

var optimistPrice = earlyAdopterTax();
console.log(optimistPrice(100));
console.log(optimistPrice(4500));

// Course solution
const addTaxRate = function (rate) {
	return function (value) {
		return value + value * rate;
	};
};

const addVAT2 = addTaxRate(0.23);

console.log(addVAT2(100));
console.log(addVAT2(10));

// Challenge 1: Add a poll

// Coding Challenge #1

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/

const poll = {
	// Create the object with the question, and within the object create the array of options.
	question: "What is your favourite programming language?",
	options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
	// It now displays as an object with two sections: question and options. The Array is numbered from 0 onwards with a length of 4.
	// The slow option
	//answers: [0, 0, 0, 0],
	// The fast option
	answers: new Array(4).fill(0), // We specify that we want an array of length 4, filled with zeroes.
	registerNewAnswer() {
		const answer = Number(
			prompt(
				// \n is used as a line break. The question has a line, then the option and finally when all the options are listed we create a new line for "write option number."
				`${this.question}\n
        ${this.options.join("\n")}
        \n(Write option number)`
			)
		);
		console.log(answer);
		// If the answer is a number and it is between 0 and 3 then we update the number at the relevant position by 1. If it does not meet these two conditions the number is not updated.
		typeof answer === "number" &&
			answer < this.answers.length &&
			this.answers[answer]++;

		// This is where we call the displayResults method.
		this.displayResults();
		this.displayResults("string");
	},
	// This method displays the results.
	// If the results are given as an array then we display the array. If the results are given as a string then we display the string.
	displayResults(type = "array") {
		if (type === "array") {
			console.log(this.answers);
		} else if (type === "string") {
			console.log(`Poll results are ${this.answers.join(", ")}`);
		}
	},
};
console.log(poll);
// document.querySelector(".poll").addEventListener("click", function (event) {
// 	console.log("poll clicked");
document
	.querySelector(".poll")
	// We use the bind method to preset the context of the function.
	// If we run the function without binding then we will get an error message.
	.addEventListener("click", poll.registerNewAnswer.bind(poll));

const survey = {
	question: "Do you want to go right or left?",
	options: ["left", "right"],
	directions: new Array(2).fill(0),
	registerNewDirection() {
		const direction = Number(
			prompt(
				`${this.question}\n${this.options[0]}\n${this.options[1]}\n(Write option number)`
			)
		);
		console.log(direction);

		typeof direction === "number" &&
			direction < this.directions.length &&
			this.directions[direction]++;

		this.displayChoices();
		this.displayChoices("string");
	},

	displayChoices(type = "array") {
		if (type === "array") {
			console.log(this.directions);
		} else if (type === "string") {
			console.log(
				`Poll results are ${this.directions[0]}, ${this.directions[1]}`
			);
		}
	},
};

console.log(survey);

document
	.querySelector(".survey")
	.addEventListener("click", survey.registerNewDirection.bind(survey));

const watches = {
	question: "Which is your favourite watch brand?",
	options: ["Apple", "Samsung", "Suunto", "Garmin", "Casio", "Timex"],

	answers: new Array(6).fill(0),
	registerNewAnswer() {
		const answer = Number(
			prompt(
				`${this.question}\n${this.options.join("\n")}\n(Write option number)`
			)
		);
		console.log(answer);

		typeof answer === "number" &&
			answer < this.answers.length &&
			this.answers[answer]++;

		this.displayResults();
		this.displayResults("string");
	},

	displayResults(type = "array") {
		if (type === "array") {
			console.log(this.answers);
		} else if (type === "string") {
			console.log(`Poll results are ${this.answers.join(", ")}`);
		}
	},
};

console.log(watches);

document
	.querySelector(".watches")
	.addEventListener("click", watches.registerNewAnswer.bind(watches));

// We use the call method to preset the context of the function. We provide the array of numbers as an argument.
watches.displayResults.call({ answers: [5, 2, 3] }, "string");
watches.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, "string");
watches.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });

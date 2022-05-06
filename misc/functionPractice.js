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

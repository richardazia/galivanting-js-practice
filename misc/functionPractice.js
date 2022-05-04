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

const oneWord = function (word) {
	return word.replace(/ /g, "").toLowerCase();
};

const upperFirstWord = function (word) {
	const [first, ...others] = word.split(" ");
	return [first.toUpperCase(), ...others].join(" ");
};

//higher order function
const transformer = function (str, fn) {
	console.log(`The original string is ${str}`);
	console.log(`Transformed string: ${fn(str)}`);

	console.log(`Transformed by ${fn.name}`);
};

transformer("Ducks are running amock in the world", upperFirstWord);
transformer("Ducks are running amock in the world", oneWord);

const duckRow = function () {
	console.log("🦆🦆🦆");
};

document.body.addEventListener("click", duckRow);

[("Lac de Lucerne", "Lac Léman", "Lac De Joux")].forEach(duckRow);

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
const greet = (greeting) => (name) => console.log(`${greeting} ${name}`);

/*
const greet = function (greeting) {
	return function (name) {
		console.log(`${greeting} ${name}`);
	};
};
*/
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

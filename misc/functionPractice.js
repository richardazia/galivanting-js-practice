"use strict";

const bookings = [];

const createBooking = function (flightNo, pax = 1, price = 0) {
	//ES6

	/*
  // ES5 Default Parameters
	pax = pax || 1;
	price = price || free;
  */

	const booking = {
		flightNo,
		pax,
		price,
	};
	console.log(booking);
	bookings.push(booking);
};

createBooking("LX1712", 154, 200);
createBooking("LX1736");

// if you want to skip a parameter, you can use the following syntax

createBooking("LX1712", undefined, 35); // pax is set to undefined
createBooking("LX1712", null, 35); // Null does not work

const flight = "LX1744";
const thePax = {
	name: "Sarah",
	age: 25,
	isbn: 9782266259293,
};

const checkIn = function (flightNo, pax = thePax) {
	flightNo = "LX1747";
	pax.name = "Ms " + pax.name;

	if (pax.isbn === 9782266259293) {
		alert(
			`Dear ${pax.name}, you have successfully checked in to flight ${flightNo}.
      Please remember to be at the airport at least two hours prior to your flight. `
		);
	} else {
		alert(
			`Dear ${pax.name}, The passport No. ${pax.isbn} is not valid
      Pleasse check in with the correct passport.`
		);
	}
};

checkIn(flight, thePax);

const newIsbn = function (thePax) {
	thePax.isbn = Math.trunc(Math.random() * 10000000000);
	console.log(`New 'passport' No: ${thePax.isbn}`);
	return thePax;
};

newIsbn(thePax);

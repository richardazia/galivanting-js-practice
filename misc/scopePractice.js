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

var x = 10;
let y = 20;
const z = 30;

console.log(x === window.x); // true
console.log(y === window.y); // false
console.log(z === window.z); // false

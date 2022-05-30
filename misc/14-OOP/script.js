"use strict";
let duck = "Mallard";
const Individual = function(firstName, birthYear) {
  // Instance Properties
  this.firstName = firstName;
  this.birthYear = birthYear;
  // console.log(this); // Object {  }
  // Using a method, but never do this.
  // this.calcAge = function() {
  //   console.log(2022 - this.birthYear);
  // };
};

const placide = new Individual("Placide", 1912);

// 1. New {} is created
// 2. Function called - this is an empty object
// 3. New object is linked to a prototype
// 4. function is automatically returned

const balisto = new Individual("Balisto", 1962);

const jack = new Individual("Jack", 1732);

console.log(balisto, jack, placide);

console.log(jack instanceof Individual);
console.log(duck instanceof Individual);

// 209 - prototypes
console.log(Individual.prototype);
Individual.prototype.calcAge = function() {
  console.log(2022 - this.birthYear);
};

balisto.calcAge();
jack.calcAge();
placide.calcAge();

console.log(jack.__proto__);
console.log(jack.__proto__ === Individual.prototype);

console.log(Individual.prototype.isPrototypeOf(balisto));
console.log(Individual.prototype.isPrototypeOf(placide));
console.log(Individual.prototype.isPrototypeOf(Individual));

Individual.prototype.species = "Homo Sapiens";
console.log(balisto.species, jack.species, placide.species);
console.log(balisto.hasOwnProperty("species"));
console.log(placide.__proto__);
// Top of the prototype chain
console.log(placide.__proto__.__proto__);

console.log(Individual.prototype.constructor);

const arr = [3, 6, 4, 3, 5, 2, 1, 1, 1, 1, 4, 2, 2, 6, 9, 2]; // short hand for using new Array === []

console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

//Mechanism to reuse code

// Not a good practice, avoid doing this
Array.prototype.unique = function() {
  return [...new Set(this)];
};

console.log(arr.unique());
/*
const h1 = document.querySelector("h1");
console.dir(h1);
console.dir(x => x + 1);
*/
/*
Object Oriented Programming (OOP)
Coding Challenge #1
Your tasks:
1. Use a constructor function to implement a 'Car'.A car has a'make'and a 'speed' property. The 'speed' property is the current speed of the car in km/h
2. Implementan'accelerate'method that will increase the car's speed by 10, and log the new speed to the console
3. Implementa'brake'method that will decrease the car's speed by 5, and log the new speed to the console
4. Create 2 'Car'objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them
Test data:
§ Data car 1: 'BMW' going at 120 km/h
§ Data car 2: 'Mercedes' going at 95 km/h
GOOD LUCK 😀
*/
// 1.
const Car = function(make, speed) {
  this.make = make;
  this.speed = speed;
};

const car1 = new Car("BMW", 120);
const car2 = new Car("Mercedes", 95);
// 2.
console.log(car1, car2);
Car.prototype.accelerate = function() {
  console.log(this.speed + 10);
};

car1.accelerate();
car2.accelerate();
// 3.
Car.prototype.brake = function() {
  console.log(this.speed - 5);
};

car1.brake();
car2.brake();

// 4.

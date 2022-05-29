"use strict";
let duck = "Mallard";
const Individual = function(firstName, birthYear) {
  // Instance Properties
  this.firstName = firstName;
  this.birthYear = birthYear;
  // console.log(this); // Object {  }
  // Using a method, but never do this.
  this.calcAge = function() {
    console.log(2022 - this.birthYear);
  };
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

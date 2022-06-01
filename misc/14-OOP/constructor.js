"use strict";

//inheritance between classes:

const Person = function(firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function() {
  console.log(2037 - this.birthYear);
};

const Student = function(firstName, birthYear, course) {
  Person.call(this, firstName, birthYear); // We need to use .call and this.
  this.course = course;
};

// Linking Prototypes
Student.prototype = Object.create(Person.prototype);
// Create this before we add any more methods to the prototype object.
// This will return an empty object.

// Add a method
Student.prototype.introduce = function() {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const bob = new Student("Bob", 1963, "Environmental Systems");
console.log(bob);

bob.introduce();
bob.calcAge();

console.log(bob.__proto__);
console.log(bob.__proto__.__proto__);

Student.prototype.constructor = Student;

console.dir(Student.prototype.constructor);

/////////////////////////////////////
// Challenge No. 3
// Part 1
const CarCL = function(make, speed) {
  this.make = make;
  this.speed = speed;
};

const EV = function(make, speed, charge) {
  CarCL.call(this, make, speed);
  this.charge = charge;
};

EV.prototype = Object.create(CarCL.prototype);

EV.prototype.status = function() {
  console.log(
    `I am a ${make}, am travelling at ${speed} with a ${charge} left.`
  );
};
// 2.
EV.prototype.chargeBattery = function(chargeTo) {
  this.charge = chargeTo;
};

// 3.
EV.prototype.accelerate = function() {
  console.log(
    `The ${
      this.make
    } is going at ${(this.speed += 20)}km/h and the battery is at ${this
      .charge--}`
  );
};

EV.prototype.brake = function() {
  console.log(
    `The ${
      this.make
    } just decelerated to ${(this.speed -= 20)} and recharged its batteries to ${(this.charge += 0.5)} percent.`
  );
};

const tesla = new EV("Tesla", 120, 23);

console.log(tesla);
tesla.accelerate();
tesla.accelerate();
tesla.brake();
tesla.accelerate();
tesla.accelerate();
tesla.brake();
tesla.brake();
tesla.brake();
tesla.brake();
tesla.brake();
tesla.brake();

tesla.chargeBattery(90);
console.log(tesla);

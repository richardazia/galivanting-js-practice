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

Individual.hey = function() {
  console.log("Hey there");
};

Individual.hey();
// balisto.hey(); // Can't inherit .hey

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
////////////////////////////////////////
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
/*
// 1.
const Car = function(make, speed) {
  this.make = make;
  this.speed = speed;
};

const bmw = new Car("BMW", 120);
const mercedes = new Car("Mercedes", 95);
// 2.
console.log(bmw, mercedes);
Car.prototype.accelerate = function() {
  this.speed += 10;
  console.log(`The ${this.make} is going at ${this.speed} km/h.`);
};

bmw.accelerate();
mercedes.accelerate();
// 3.
Car.prototype.brake = function() {
  this.speed -= 5;
  console.log(`The ${this.make} is going at ${this.speed} km/h.`);
};

bmw.brake();
mercedes.brake();

// 4.

// In my own code I did not write += and -= so it did not compound the speed increase and speed decrease.

bmw.accelerate();
bmw.accelerate();
bmw.accelerate();

mercedes.brake();
mercedes.brake();
mercedes.brake();
mercedes.brake();
mercedes.brake();
mercedes.brake();
mercedes.brake();
mercedes.brake();
mercedes.brake();
*/
////////////////////////////////////////
// class Expression
// const PersonCL = class{}

// Class declaration
class PersonCL {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  // Add methods here
  calcAge() {
    console.log(2022 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}, draft behind me`);
  }

  get age() {
    return 2022 - this.birthYear;
  }
  // For when we want to set a property that already exists
  set fullName(name) {
    console.log(name);
    if (name.includes(" ")) this._fullName = name;
    // if (name.includes(" ")) this.fullName = name; // Too many recursions with this code
    else alert(`${name} is not a full name`);
  }

  get fullName() {
    return this._fullName;
  }

  static hey() {
    console.log("Hey you, wake up, this isn't nap time.");
    console.log(this);
  }
}

const remora = new PersonCL("Cycling Remora", 1986);
console.log(remora);
remora.calcAge();

console.log(remora.__proto__ === PersonCL.prototype);

// personCL.prototype.greet = function() {
//   console.log(`Hey ${this.firstName}, draft behind me`);
// };

remora.greet();
console.log(remora.age);

// Classes are not hoisted
// Classes are first class citizens
// classes are executed in strict mode.

const simon = new PersonCL("Simon Scarrow", 1973);

PersonCL.hey();

// The GetSet ;-)

const account = {
  owner: "Richard",
  bikeRides: [30, 45, 50, 32, 15],

  get latest() {
    return this.bikeRides.slice(-1).pop();
  },

  set latest(ride) {
    this.bikeRides.push(ride);
  }
};

console.log(`The latest cycle distance was: ${account.latest} kilometres.`);

account.latest = 48.7;
console.log(account.bikeRides);

const PersonProto = {
  calcAge() {
    console.log(2028 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
};

const steven = Object.create(PersonProto);
console.log(steven);

steven.name = "Steven";
steven.birthYear = 1989;
steven.calcAge();

console.log(steven.__proto__ === PersonProto);

const farah = Object.create(PersonProto);
farah.init("Farah", 1982);
farah.calcAge();
////////////////////////////////////////
// Coding Challenge 2
/*
Coding Challenge #2
Your tasks:
1. Re-create Challenge#1,but this time using an ES6 class (call it 'CarCl')
2. Add a getter called 'speedUS' which returns the current speed in mi/h(divide
by 1.6)
3. Add a setter called'speedUS'which sets the current speed in mi/h (but
converts it to km/h before storing the value, by multiplying the input by 1.6)
4. Create a new car and experiment with the'accelerate' and 'brake'
methods, and with the getter and setter.
Test data:
§ Data car 1: 'Ford' going at 120 km/h GOOD LUCK 😀

*/
console.log("Challenge #2");
/*
// #1
class CarCL {
  constructor(brand, speed) {
    this.brand = brand;
    this.speed = speed / 1.6;
  }

  calcMph() {
    console.log(this.speed * 1.6);
  }

  // #2
  get speedUS() {
    return this.speed;
  }

  get accelerate() {
    this.speed;
  }
  // #3
  set speedUS(miles) {
    this.speed.push(miles);
  }
}

const ford = new CarCL("Ford", 120);
console.log(ford);
ford.calcMph();
console.log(ford.accelerate);

// #4
*/
/*
// 1.
class CarCL {
  // Swap function for constructor and the rest stays the same.
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`The ${this.make} is going at ${this.speed} km/h.`);
  }

  // 3.

  brake() {
    this.speed -= 5;
    console.log(`The ${this.make} is going at ${this.speed} km/h.`);
  }

  // #2
  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    // this.speed.push(miles);
    this.speed = speed * 1.6; // The correct method
  }
}

// 4.

const ford = new CarCL("Ford", 120);
console.log(ford.speedUS);
ford.accelerate();
ford.accelerate();
ford.accelerate();
ford.accelerate();
ford.brake();
ford.brake();
ford.brake();
ford.speedUS = 50;
console.log(ford);
*/
// In my own code I did not write += and -= so it did not compound the speed increase and speed decrease.

// Class inheritance

const Student = function(firstName, birthYear, course, courseDuration) {
  // this.firstName = firstName;
  // this.birthYear = birthYear;
  Individual.call(this, firstName, birthYear); // call individual and call this, to get access to firstName and birthyear
  this.course = course;
  this.courseDuration = courseDuration;
};

// Make student inherit all features from Individual, including calcAge etc.
Student.prototype = Object.create(Individual.prototype);

Student.prototype.introduce = function() {
  console.log(
    `Hi, my name is ${this.firstName} and I am studying: ${this.course} for the next ${this.courseDuration}.`
  );
};

const pascal = new Student("Pascal", 1970, "Machine Language", "three years");
console.log(pascal);
pascal.introduce();
pascal.calcAge();

console.log(pascal.__proto__);
console.log(pascal.__proto__.__proto__);

console.log(pascal instanceof Student);
console.log(pascal instanceof Individual);
console.log(pascal instanceof Object);

console.dir(Student.prototype.constructor);
// We fix this issue via
Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);

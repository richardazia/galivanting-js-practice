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
/*
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
*/

///////////////////////////////////////
// Coding Challenge #4

/*
1. Re-create challenge #3, but this time using ES6 classes: create an 'EVCl' child class of the 'CarCl' class
2. Make the 'charge' property private;
3. Implement the ability to chain the 'accelerate' and 'chargeBattery' methods of this class, and also update the 'brake' method in the 'CarCl' class. They experiment with chining!
DATA CAR 1: 'Rivian' going at 120 km/h, with a charge of 23%
*/

class CarCL {
  // Swap function for constructor and the rest stays the same.
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`The ${this.make} is going at ${this.speed} km/h.`);
    return this;
  }

  // 3.

  brake() {
    this.speed -= 5;
    console.log(`The ${this.make} is going at ${this.speed} km/h.`);
    return this;
  }

  // #2
  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    // this.speed.push(miles);
    this.speed = speed * 1.6; // The correct method
    return this;
  }
}

class EVCl extends CarCL {
  // define private fields here
  #charge;
  constructor(make, speed, charge) {
    // Instead of Car.call we use super
    //constructor function of the parent class
    super(make, speed);
    this.#charge = charge;
  }
  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    console.log(
      `The ${this.make}'s battery has been charged to ${this.#charge} percent'`
    );
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `The ${this.make} is going at ${this.speed} km/h. The battery is now at ${
        this.#charge
      }`
    );
    return this;
  }
  brake() {
    this.speed -= 5;
    this.#charge += 1;
    console.log(
      `The ${this.make} is going at ${
        this.speed
      } km/h. The battery has recovered to ${this.#charge}`
    );
    return this;
  }

  // accelerate() {}
}
// 4.

// DATA CAR 1: 'Rivian' going at 120 km/h, with a charge of 23%

const rivian = new EVCl("Rivian", 120, 23);

console.log(rivian);
rivian.accelerate();
rivian.brake();
rivian
  .accelerate()
  .accelerate()
  .accelerate()
  .accelerate()
  .accelerate()
  .brake()
  .brake()
  .brake()
  .brake()
  .brake()
  .brake()
  .brake()
  .brake()
  .chargeBattery(97.4)
  .brake()
  .brake();

console.log(rivian.speedUS);

hoistMe();

//Class

class Shoe {
    constructor(name, soles, colour, use) {
        this.name = name;
        this.soles = soles;
        this.colour = colour;
        this.use = use;
    }
// Method
    shoeStats() {
        return `${this.name} have ${this.soles} soles, are ${this.colour} and are for this sport: ${this.use}!`;
    }
}

const btwin500 = new Shoe("btwin500", "clipped", "black", "cycling");
const kalenji = new Shoe("kalenji Ekiden Active Trail", "generic", "grey", "running");

console.log(btwin500);
console.log(btwin500.shoeStats());

console.log(kalenji);
console.log(kalenji.shoeStats());

// functions are hoisted and can be overwritten whereas classes are not hoisted and can't be overwritten

//Hoisting
function hoistMe() {
    return console.log('I can be called anywhere and I will be hoisted');
}

hoistMe();

// Static Methods and usage

class Car {
    constructor(wheels, fuel, top) {
        this.wheels = wheels;
        this.fuel = fuel;
        this.top = top;
    }

    carInfo() {
        return `This car has ${this.wheels} wheels, uses ${this.fuel} as fuel and has a ${this.top} top!`;
    }

    static totalWheels(car1, car2) {
        const wheels1 = car1.wheels;
        const wheels2 = car2.wheels;
        return wheels1 + wheels2;
    }
}

//Use super

class campingCar extends Car{
    constructor(wheels, fuel, top, brand, carInfo) {
        super(wheels, fuel, top, carInfo);
        this.brand = brand;
        this.wheels = 6;
        this.tv = true;
        this.bed = true;
    }
    myBed() {
        return console.log(`This ${this.brand} has a bed: ${this.bed} and a TV: ${this.tv}!`);
    }
}

const barchetta = new Car(4, "petrol", "red");
const tesla = new Car(4, "electric", "black");
const camper = new campingCar(4, "petrol", "red", "Ford", "This is a camper");

console.log(barchetta);
console.log(barchetta.carInfo());

console.log(camper);
console.log(camper.carInfo());
console.log(camper.myBed());

console.log(tesla);
console.log(tesla.carInfo());
console.log(Car.totalWheels(barchetta, tesla));
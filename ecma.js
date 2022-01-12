// usual layout
function print(firstName) {
    console.log("Hello ",firstName);
}

print("Richard");

// Template Literals
function print(firstName) {
console.log(`Hello ${firstName}`);
}
print("Romulus");

function createConfirmation(firstName, price) {
    let transport = 4.30;
    console.log(`Hey, ${firstName}! Thanks!
    Price: CHF ${price}
    Transport: CHF ${transport}
    Total: CHF ${price + transport}`);
}

createConfirmation("Romulus", 100);

// Searching for a substring

const name = "Richard";
console.log(name.startsWith("Rich")); // true
console.log(name.endsWith("rich")); //false
console.log(name.includes("ha")); //true

// you can also use search
console.log(name.search("ha")); //2 where 2 is the position of the first character (0 R, 1 i, h 2) as the set starts at 0, not one

//Javascript Primitives - Numbers, strings, array, objects, null, undefined, boolean

const id = Symbol();

const pageInfo = {
    title: "My Blog",
    topics: ["Cycling", "Running", "Swimming", "climbing", "via Ferrata", "hiking"],
    id: "Sports-blog"
};
pageInfo[id] = 7987;
console.log(pageInfo); // no course ID conflict because of the symbol

// Map - I don't understand how this part works - part of Learning EcmaScript 6 - writing maps

let course = new Map();

course.set("react", { description: "ui"});
course.set("jest", { description: "testing" });

console.log(course);
console.log(course.react);
console.log(course.get("react"));

// Revision - Working with sets

let books = new Set();
books.add("Biggles Goes West");
books.add("The Hobbit");
books.add("The Unbearable Lightness of Being");
books.add("La Peste");
// books.add("Encyclopedia of Recreational Diving");

console.log(books);
console.log(books.size);

console.log("Has Encyclopedia of Recreational Diving", books.has("Encyclopedia of Recreational Diving"));

// We cannot use map, we need to use a foreach loop

books.forEach(function (item){
    console.log(item);
})

// The Spread operator is three dots ...

let cats = ["Biggles", "Boots", "Bootsie"];
let dogs = ["White Fang", "Lassie", "Brutus"];

let animals = ["Wilfred", "Fiona", "Shrek", ...cats, ...dogs]; // remove the three dots for nested arrays.

console.log(animals);

// Destructuring Arrays

let [First, third] = [
    "Lausanne",
    "Nyon",
    "Genève",
    "Thones",
    "Versoix",
    "Les Diablerets",
]

// Creating Objects with the spread operator

const daytime = {
    breakfast: "Muesli",
    lunch: "Pizza"
};

const nighttime = "Entrecôte sur Ardoise";

const backpackingMeals = {
    ...daytime,
    nighttime
};

console.log(backpackingMeals);

console.log(First)
console.log(third);

// Destructuring Objects

const weekendAway = {
    destination: "Tour D'aï",
    travelers: 4,
    activity: "Via Ferrata",
    cost: "half a fuel tank"
};

function socialNetwork({ destination, activity}) {
    return `Come to ${destination} to enjoy two nice ${activity}`;	
}

console.log(socialNetwork(weekendAway));

// Iterating with the for of loop
for (let letter of "The Quick Brown Fox Jumped over the Lazy Dog") {
    console.log(letter);
}

let sports = ["Hiking", "Cycling", "Canyoning", "Via Ferrata", "Caving"];

for (let sport of sports) {
    console.log(sport);
}

// Creating a route (pronounced root, not grout)

let subjects = new Map();
subjects.set("HTML", "/topic/html");
subjects.set("CSS", "/topic/css");
subjects.set("JavaScript", "/topic/javascript");
subjects.set("React", "/topic/react");
subjects.set("Node", "/topic/node");
subjects.set("Express", "/topic/express");
subjects.set("MongoDB", "/topic/mongodb");

// For the route
for (let subject of subjects) {
    console.log(subject);
}

// To return the key
for (let subject of subjects.keys()) {
    console.log(subject);
}

// To return the value

for (let route of subjects.values()) {
    console.log(`The course subject can be found at ${route}`);
}

// For Value Pairs
for (let subject of subjects.entries()) {
    console.log(subject);
}

// use class and constructor

class Animal {
    constructor(description, limbs, ears) {
        this.description = description;
        this.limbs = limbs;
        this.ears = ears; 
    }
    describeAnimal() {
        console.log(`A ${this.description} has ${this.limbs} legs and ${this.ears} ears`);
    }
}

let dog = new Animal("dog", 4, 2);

console.log(dog);
console.log(dog.describeAnimal());

// The Getters and Setters

let attendance = {
    _list: [],
    set addName(name) {
        this._list.push(name);
    },
    get list() {
        return this._list.join(", ");
    }
}

attendance.addName = "Barney Stinson";

console.log(attendance.list);

attendance.addName = "Oncle Picsou";
attendance.addName = "Asterix Le Gaulois";
attendance.AddName = "Mr BigglesWorth";
attendance.addName = "Albert Camus";

console.log(attendance.list);

// Getters and Setters Part II

class Hike {
    constructor(distance, pace, elevation) {
        this.distance = distance;
        this.pace = pace;
        this.elevation = elevation;
    }
    get lengthInHours() {
        return `It will take ${this.calcLength()} hours to walk ${this.distance} kilometres.`;
    }
    calcLength() {
        return this.distance / this.pace;
    }
};

const laDole = new Hike(7, 5, 200);

console.log(laDole.lengthInHours);

// Setting defaults

function add(x = 3, Y = 12) {
    console.log(x + Y);
}

add(4, 8);

function beActive(
    activityName = "procrastinating",
    time = 3) {
        console.log(`I am ${activityName} ${time} hours a day `);
    }

    beActive(); // I am procrastinating 3 hours a day   - default values
    beActive("Climbing", 5);    // I am Climbing 5 hours a day
    beActive("cooking", 2);    // I am cooking 2 hours a day
    beActive("running", 0.5);   // I am running 0.5 hours a day

// Shortening code with arrow functions

// original code

let list = ["tricycle", "bike", "Penny farthing"];
list.map(function(item) {
    console.log(item);
});

// As an arrow function

list.map(item => console.log(item));

// Using this in an arrow function

let individual = {
    name: "Bigglesworth",
    hobbies: ["flying, ", "diving, ", "straffing", "surviving", "returning home"],
    printHobbies: function() {
        let _this = this;
        // this.hobbies.forEach(function (hobby) { // written normally
        this.hobbies.forEach(hobby => { // written as an arrow function
            let string = `${_this.name} likes ${hobby}`;
            console.log(string);
        });
    }
};

individual.printHobbies();

// Working with generators function*

function* director() {
    yield "three";
    yield "two";
    yield "one";
    yield "Action!";
}

let countdown = director();

console.log(countdown.next().value);  // three
console.log(countdown.next().value);  // two  
console.log(countdown.next().value);  // one
console.log(countdown.next());  // { value: "Action!", done: false }
console.log(countdown.next());  // { value: undefined, done: true }

// For more info about generators: https://javascript.info/generators

// Revision - Building promises

// const delay = (seconds) => 
//     new Promise((resolve, reject) => {
//         if (typeof seconds !== "number") {
//             reject(`${seconds} is not a number`);
//     }
//     setTimeout(resolve, seconds * 1000)
//     });

//     console.log("Zero seconds"); // Zero seconds - to check that it works
//     delay(1).then(() => console.log("One second")); // One second
//     delay(5).then(() => console.log("Five seconds")); // Five seconds

//     // delay("twitter").then(() => console.log("Twitter")); // Error - twitter is not a number

//     // Loading Remote Data - the long way

    const astronauts = () => {
        return new Promise((resolves, reject) => {
            const api = 
            "http://api.open-notify.org/astros.json";
            const request = new XMLHttpRequest();
            request.open("GET", api); // request some data from the API
            request.onload = () => {
                if (request.status === 200) {
                    resolves(JSON.parse(request.response)); // parse the data
                } else {
                    rejects(Error(request.statusText));    // reject the promise
                }
            };
            request.onerror = err => reject(err);
            request.send();
            });
        };

        astronauts().then(data => 
            console.log(data));

// Loading Remote Data - the short way - using fetch

let getAstronauts = () =>
fetch(
    "http://api.open-notify.org/astros.json"
//).then(console.log);    // to check that it works
).then((res) => res.json());
// .then(console.log);    To output the data directly within the app

getAstronauts().then((data => 
    console.log(data)
));

getAstronauts().then(console.log); // Shorter option

let orbitalNames = () =>
    getAstronauts()
    .then((json) => json.people)
    .then((people) => people.map((p) => p.name)) // To return the names
    .then((names) => names.join(", "));

orbitalNames().then(console.log);

const delay = (seconds) =>
    new Promise((resolves) => 
    setTimeout(resolves, seconds * 1000));

const countToFive = async () => {
    await delay(1);
    console.log("One");
    await delay(1);
    console.log("Two");
    await delay(1);
    console.log("Three");
    await delay(1);
    console.log("Four");
    await delay(1);
    console.log("Five");
}

countToFive();

const githubRequest = async (login) => {
    let response = await fetch(
        `https://api.github.com/users/${login}`
        );
    let json = await response.json();
    let summary = `${json.name} is a ${json.bio}`;
    console.log(summary)
};

    githubRequest("google");
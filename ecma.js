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
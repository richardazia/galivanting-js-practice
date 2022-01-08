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

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
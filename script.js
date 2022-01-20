// Playing with switch
// source (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch)
const expr = 'Oranges';
switch (expr) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Mangoes':
  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.');
    // expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  default:
    console.log(`Sorry, we are out of ${expr}.`);
}

const mask = 'masks';
switch (mask) {
    case 'surgicalMask': 
        console.log('Surgical Masks are not considered enough');
        break;
    case 'ffp2Masks':
    case 'Vaccinations':
        console.log('FFp2 Masks and vaccinations are required.');
        // expected output: "FFp2 Masks and vaccinations are required."
        break;
    default:
        console.log(`Sorry, we are unable to offer service wihtout ${mask}`);
    }

// switch continued 
const answer2 = 'yes';

switch (answer2) {
    case "yes": 
        console.log("You chose 'Yes, of course'");
        break;
    case "Maybe": 
        console.log("Your mind is not made up yet.");
        break;
    case "No":
        console.log("You decided not to");
        break;
    default: 
        console.log("Ane de Buridan ;-)");
        break;
}

var pandemic = "maskWearing"

pandemic === "maskWearing"
    ? console.log("You will be safe") // When true
    : console.log("It was nice knowing you"); // When false

// ternary as a single line
var animal = "cat";
var job = animal === "cat" ? "cat herder" : "dog catcher"; 

console.log(typeof job) // this is a string

var number = 12; 

console.log(typeof number); // this is a number

var float = 12.345432
console.log(typeof float); // still counts as a number

console.log(typeof pandemic); // string

// Playing with arrays

thing = {};

console.log(typeof thing); // object

thing = [];

console.log(typeof thing); // object

console.log(typeof thing === "object" && thing.hasOwnProperty("length")) // resolves to true

thing = {};

console.log(typeof thing === "object" && thing.hasOwnProperty("length")) // resolves to false

// to check numbers

console.log(Number.isNaN()); // false

// Sequential loops. The index starts at 0 and gets to 9 before stopping. 

for (var i = 0; i < 10; i += 1)  {
    console.log(i);
}
 // count from 0 to 10
for (var i = 0; i <= 10; i += 1)  {
    console.log(i);
}

// iterate over an array

var pageNames = [
    "home",
    "about me",
    "contact info",
    "The Romans",
    "Geography",
    "My blog",
    "Environmental Systems",
    "Social Media"
];

for (var p in pageNames) {
    console.log(p, pageNames[p]);
}

// iterate over an object
var pages = {
    first: "Home",
    Second: "Blog",
    third: "Photo Gallery",
    Fourth: "My Studies",
    Fifth: "Random Thoughts"
};

for (var p in pages) {
    if (pages.hasOwnProperty(p)) {
        console.log(p, pages[p]); 
    }
}
// Learning the Javascript Language 5. Iterating with Loops
// Play with a While Loop

var i = 0;

while (i < 10) {
    console.log(i + " Are we at ten yet?");
    i += 1;
}

var myArray = [true, true, false, true, false, true, false, true, false, true];

var myItem = null;

while (myItem !== false) {
    console.log(
        "myArray has " + 
        myArray.length +
        " items in it. When this is false it will stop.");
        myItem = myArray.pop();
}

// The Do While Loop

var mySecondArray = [true, true, false, true, false, true, false, true, false, true];

var mySecondItem = false;

do {
    console.log(
        "mySecondArray has " + 
        mySecondArray.length +
        " items in it. When this is false it will stop."
        );
        mySecondItem = mySecondArray.pop();
} while (mySecondItem !== false);

// Letter changing
letterChanging("Hello World");

function letterChanging(speech) {
    if (typeof speech !== "string") {
        return "Not a string";
    }

    // Otherwise change these letters
    speech = speech.replace(/e/g, "3");
    speech = speech.replace(/o/g, "0");
    speech = speech.replace(/a/g, "@");
    speech = speech.replace(/l/g, "1");
    speech = speech.replace(/s/g, "$");
    speech = speech.replace(/t/g, "7");
    speech = speech.replace(/i/g, "!");
    speech = speech.replace(/g/g, "9");
    speech = speech.replace(/b/g, "8");
    speech = speech.replace(/c/g, "(");
    speech = speech.replace(/d/g, ")");
    speech = speech.replace(/f/g, "|=");
    speech = speech.replace(/h/g, "#");


    return speech;
}

var utterance = letterChanging("The quick brown fox jumped over the lazy dog."); // The message is now encoded. 
console.log(utterance);

// More on Arguments

function speakSomething(what, howMany) {
    var what = (typeof what !== "undefined") ? what : "World";
    var howMany = (typeof howMany !== "undefined") ? howMany : 12;

// pipe version

// what = what || 'default speech';
// howMany = howMany || 12;

    for (var i = 0; i < howMany; i += 1) {
        console.log(what + "( " + i + " )");
    }
}

console.log(speakSomething("Hello", 3));
console.log(speakSomething("Hello"));
console.log(speakSomething("Good Morning World", 3));
console.log(speakSomething("I was vaccinated for Covid", 3));

// Functions as objects

var obj = {
    sayHello: function() {
        console.log("Hello");
    } 
};


console.log(obj.sayHello());

// Callback functions

function doubleIt(number) {
    return number *= 2;
}

var myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var myDoubles = myNumbers.map(doubleIt);

console.log(myDoubles);

myNumbers.forEach(function(number) {
    console.log("My array contains", number);
});

doubleIt = number => number *= 2;

// Closures

function makeAdder(x) {
    return function(y) {
        return x + y;
    };
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);

console.log(add5(2));   // returns 10
console.log(add10(2));  // returns 20

function multiplier(w) {
    return function(z) {
        return w * z;
    };
}

var multiplyBy5 = multiplier(5);
var multiplyBy10 = multiplier(10);

console.log(multiplyBy5(2));   // returns 10
console.log(multiplyBy10(2));  // returns 20

// More on Closures

function init() {
    var name = 'mozilla';
    function displayName() {
        console.log(name);
    }
    displayName();
}

init();

function duck() {
    var noise = 'couac couac';
    function displayNoise() {
        console.log(noise);
    }
    displayNoise();
}

duck();

function cook() {
    var food = 'lasagna';
    function displayFood() {
        console.log(food);
    }
    displayFood();
}

cook();


//This does nothing, it serves as an example of a first class function

const arrayOfFunctions = [
    function sayHello() { "Hello World"},
    function sayGoodbye() { "Goodbye World"},
    function sayHelloAgain() { "Hello Again World"}
];

doSomethingnp(function sayHello() { "Hello World"});
console.log(arrayOfFunctions);
function giveMeAFunction() {
    return function() {
        console.log('Je Ne Suis Pas Une Pipe');
    }
}

// In functional programming functions are designed specifically so that they work in isolation.
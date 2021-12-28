"this is Covid's \"favouite\" mask."

"This is a multiline string \
and this is another line \
and this is a third \
Use option shift 7 \
for the correct slash"

var myLocation = "Spain", myOtherLocation = "Switzerland";

myLocation === myOtherLocation; // false

myLocation !== myOtherLocation; // true


Book = {
    title: 'Last Book to Woodstock',
    author: 'Colin Dexter',
    format: 'audible',
    rating: 'good'
}

Book2 = JSON.parse(JSON.stringify(Book));

Book3 = JSON.parse(JSON.stringify(Book)); 

console.log(Book2);

console.log(Book3);

//logical operator

var animal1 = "bear";
var animal2 = "mountain lion";
var animal3 = "Chamois";
// and 
console.log(animal1 === 'bear' && animal2 === 'mountain lion' && animal3 === 'Chamois') // = true

console.log(animal1 === 'chicken' && animal2 === 'goose' && animal3 === 'Chamois') // = false
// or
console.log(animal1 === 'bear' || animal2 === 'mountain lion'); // because at least one is true

console.log(animal1 === 'tricycle' && animal2 === 'e-bike'); // both are false so the result is false. 

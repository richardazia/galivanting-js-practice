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
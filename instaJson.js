fetch('posts_1.json')
.then(res => res.json())
.then(data => console.log(data))
.then(data = JSON.parse(data));

console.log(`This is ${data}`)  // This is undefined

// I need to get the data out of fetch and into a variable

// this doesn't work yet but should extract nested data

function printValues(data) {
    for(var k in data) {
        if(data[k] instanceof Object) {
            printValues(data[k]);
        } else {
            document.write(data[k] + "<br>");
        };
    }
};

// see https://www.tutorialrepublic.com/javascript-tutorial/javascript-json-parsing.php
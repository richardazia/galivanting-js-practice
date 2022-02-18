const fs = require("fs");
const { stringify } = require("querystring");

// using this tutorial: https://heynode.com/tutorial/readwrite-json-files-nodejs/

fs.readFile("play.json", "utf8", (err, jsonString) => {
    if (err) {
        console.log("Error reading file from disk:", err);
        return;
        }
        console.log("File data:", jsonString);
    // Add try and catch blocks to handle the error if the file is not found.
    try {
        const jsonString = fs.readFileSync("play.json", "utf8");
        const play = JSON.parse(jsonString);
        console.log(play);
    } catch (err) {
        console.log("Error parsing JSON string:", err);
        return; 
    }
});

// Write to a file using the fs module

const post2 ={
    "title": "A fun cloud",
    "uri": "https://www.google.com/adsense/",
    "creation_date": "2018-03-07"
}

const jsonString = JSON.stringify(post2);
    fs.writeFile("play.json", jsonString, (err) => {
    if (err) {
        console.log("Error writing file:", err);
        return;
    }else {
        console.log("Successfully wrote file");
    }
});

console.log(jsonString); // returns {"title":"A fun cloud","uri":"https://www.google.com/adsense/","creation_date":"2018-03-07"}



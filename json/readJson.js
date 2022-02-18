const fs = require("fs");
fs.readFile("play.json", "utf8", (err, jsonString) => {
    if (err) {
        console.log("Error reading file from disk:", err);
        return;
        }
        console.log("File data:", jsonString);
    // Add try and catch blocks to handle the error if the file is not found.
    try {
        const play = JSON.parse(jsonString);
        console.log(play);
    } catch (err) {
        console.log("Error parsing JSON string:", err);
    }
});
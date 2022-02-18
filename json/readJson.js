const fs = require("fs");
fs.readFile("play.json", "utf8", (err, jsonString) => {
    if (err) {
        console.log("Error reading file from disk:", err);
        return;
        }
        console.log("File data:", jsonString);
    });
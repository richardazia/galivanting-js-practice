'use strict';
const fs = require('fs');

const contents = fs.readFile(process.argv[2], 'utf-8', (err, data) => {
    if (err) {
        console.log(err);
    } else {
        const lines = data.toString().split('\n').length - 1;
        console.log(lines);
    }
});

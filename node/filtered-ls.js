'use strict';
const fs = require('fs');

fs.readdir(process.argv[2], (err, list) => {
    if (err) {
        console.log(err);
    } else {
        const filteredList = list.filter(file => file.endsWith(`.${process.argv[3]}`));
        filteredList.forEach(file => console.log(file));
    }
});

/*
const fs = require('fs')
const path = require('path')

    const folder = process.argv[2]
    const ext = '.' + process.argv[3]

    fs.readdir(folder, function (err, files) {
      if (err) return console.error(err)
      files.forEach(function (file) {
        if (path.extname(file) === ext) {
          console.log(file)
        }
      })
    })
*/
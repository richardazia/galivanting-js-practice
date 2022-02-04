'use strict';

fetch('posts_1.json') 
    .then(response => response.json())
    .then(data => {
        console.log(data);
    });

const igSuccess = function(data) {
    const parsedData = JSON.parse(data);
    console.log(parsedData);
};
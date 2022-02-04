'use strict';

fetch('posts_1.json') 
    .then(response => response.json())
    .then(data => {
        console.log(data);
    });
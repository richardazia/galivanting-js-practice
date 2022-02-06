'use strict';

fetch('posts_1.json') 
    .then(response => response.json())
    .then(data => {
        console.log(data[0].media[0]);
        var unix_timestamp = data[0].media[0].creation_timestamp;
        console.log(unix_timestamp);
        var date = new Date(unix_timestamp * 1000);
        console.log(date);
    });

const title = document.querySelector('#posts h1');
const image = document.querySelector('#posts img');

const igSuccess = function(data) {
    const parsedData = JSON.parse(data);
    console.log(parsedData);
    const number = Math.floor(Math.random() * parsedData.data.length);
    title.textContent = parsedData.data[number].title;
    image.href = parsedData.data[number].uri;
};
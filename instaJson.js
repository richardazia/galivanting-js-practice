'use strict';

fetch('posts_1.json') 
    .then(response => response.json())
    .then(data => {
        console.log(data[0].media[0]); 
        console.log(data[5].media[0]); // Hannibal
        console.log(data[10].media[0]); // A Parisian Surprise
        console.log(data.length);
        const number = Math.floor(Math.random() * data.length);
        console.log(`I am the ${number}th post`);
        var unix_timestamp = data[0].media[0].creation_timestamp;
        console.log(unix_timestamp);
        var date = new Date(unix_timestamp * 1000);
        console.log(date);
    });

    // const instaSuccess = function(data) {
    //     console.log(data);
    //     const number = Math.floor(Math.random() * data.data.length);
    //     const stamp = data[number].media[number].creation_timestamp;
    //     console.log(stamp); 
    //     const date = new Date(stamp * 1000);
    //     console.log(date);
    // }
    // instaSuccess();


const title = document.querySelector('#posts h1');
const image = document.querySelector('#posts img');

// const igSuccess = function(data) {
//     const parsedData = JSON.parse(data);
//     console.log(parsedData);
//     const number = Math.floor(Math.random() * parsedData.data.length);
//     title.textContent = parsedData.data[number].title;
//     image.href = parsedData.data[number].uri;
// };
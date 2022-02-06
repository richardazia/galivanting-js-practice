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
        var unix_timestamp = data[number].media[0].creation_timestamp;
        console.log(unix_timestamp);
        var date = new Date(unix_timestamp * 1000);
        console.log(date);
        var creation = data[number].media[0].creation_stamp;
        var uri = data[number].media[0].uri;
        var postTitle = data[number].media[0].title;
        // var phrase = `I was created on ${date}, showing "${postTitle}" and I can be found at \<a href=\"${uri}\"here"\</a>\. I am post No: ${number}.`;
        var phrase = "I was created on " + date + ", showing \"" + postTitle + "\"I am post No: " + number + ".";
        var img = document.createElement('img');
        document.querySelector('body').appendChild(img);
        img.src = data[number].media[0].uri; 
        // img.alt = data[number].media[0].title;  // alt text
        document.body.appendChild(img);
        document.body.innerHTML += phrase;
        console.log(phrase);
        var post = document.getElementById('posts');
        post.innerHTML = phrase;
        
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
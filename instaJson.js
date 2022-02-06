'use strict';

fetch('posts_1.json') 
    .then(response => response.json())
    .then(data => {
        // generate random number to select a post
        const number = Math.floor(Math.random() * data.length);
        // retrieve unix timestamp from post
        const unix_timestamp = data[number].media[0].creation_timestamp;
        // convert timestamp to human readable date
        let date = new Date(unix_timestamp * 1000);
        // Define post title
        let postTitle = data[number].media[0].title;
        // set src attribute to img element
        let img = document.createElement('img');
        // Define phrase to display 
        let phrase = "I was created on " + date + ", showing \"" + postTitle + "\"I am post No: " 
        + number + ".";
        // 
        document.querySelector('div').appendChild(img);
        // Find image URI
        img.src = data[number].media[0].uri; 
        let post = document.getElementById('posts');
        // post.innerHTML = phrase;
    });
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
        var day = date.getDate();
        var month = date.getMonth() + 1;
        var year = date.getFullYear();
        console.log(day);
        console.log(month);
        console.log(year);
        // Define post title
        let postTitle = data[number].media[0].title;
        // Define post image
        let img = document.createElement('img');
        // Define phrase to display 
        let phrase = "I was taken on the " + date + ", showing \"" + postTitle + "\"I am post No: " 
        + number + ".";
        document.querySelector('div').appendChild(img);
        // Find image URI
        img.src = data[number].media[0].uri; 
        let post = document.getElementById('text');
        post.innerHTML = phrase;
        let photo = document.getElementById('photo');
        photo.appendChild(img);
    });
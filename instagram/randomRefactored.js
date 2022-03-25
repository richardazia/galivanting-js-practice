'use strict';

fetch('posts_1.json') 
    .then(response => response.json())
    .then(data => {
        const dataLength = data.length;
        const number = Math.floor(Math.random() * data.length); 
        let unix_timestamp = data[number].media[0].creation_timestamp;
        let date = new Date(unix_timestamp * 1000);
        let day = date.toLocaleString();
        let postTitle = data[number].media[0].title;
        if (postTitle == false) {
            postTitle = 'Rename me!';
        }
        let phrase = 
            "I was taken on the " 
            + day + ", showing \"" 
            + postTitle + "\". I am post No: " 
            + number + ".";
        let img = document.createElement('img');
    document.querySelector('div')
        .appendChild(img);
    img.src = data[number].media[0].uri; 
    let post = document.getElementById('text');
        post.innerHTML = phrase;
    let photo = document.getElementById('photo');
        photo.appendChild(img);
});


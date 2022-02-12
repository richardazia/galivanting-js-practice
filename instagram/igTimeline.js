// I still want to display ten posts, but at least it displays the first post.

// For now all images are displayed in the same div and I want each one to be in its own div.
// The displays just once, for the last post, and I want it to display for each post. 
// I want to experiment with let fragment = new DocumentFragment();
// let div = document.createElement("div");
// fragment.append(div);

"use strict";

fetch("posts_1.json")
  .then((response) => response.json())
  .then((data) => {
    // generate random number to select a post
    const totalPosts = data.length;
    console.log(totalPosts); // 5257

    var number = totalPosts;

    while (number > 5247) {
      number--;
      console.log("The number inside: " + number);
          let unix_timestamp = data[number].media[0].creation_timestamp;
    // convert timestamp to human readable date
    let date = new Date(unix_timestamp * 1000);
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    console.log(day);
    console.log(month);
    console.log(year);
    // Define post title
    let postTitle = data[number].media[0].title;
    // If there is no post title show "Untitled"
    // if (postTitle == false) {
    //   postTitle = "Untitled";
    // }
    // Define post image
    let img = document.createElement("img");
    console.log(img);
    // Define phrase to display
    let phrase =
      "I was taken on the " +
      date +
      ', showing "' +
      postTitle +
      '". I am post No: ' +
      number +
      ".";
    console.log(phrase);
    document.querySelector("div").appendChild(img);
    // Find image URI
    img.src = data[number].media[0].uri;
    let post = document.getElementById("text");
    post.innerHTML += postTitle;
    let photo = document.getElementById("photo");
    photo.appendChild(img);
    }
    console.log("The number outside: " + number);


  });

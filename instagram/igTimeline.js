// To do, add navigation, to see next page of posts
// To do, add infinite scroll
// experiment with closures 


"use strict";

fetch("posts_1.json")
  .then((response) => response.json())
  .then((data) => {
    // generate random number to select a post
    const totalPosts = data.length;
    console.log(totalPosts); // 5257

    var index = totalPosts;

    while (index > 5247) {
      index--;
      console.log("The number inside: " + index);
          let unix_timestamp = data[index].media[0].creation_timestamp;
          let date = new Date(unix_timestamp * 1000);
          let day = date.getDate();
          let month = date.getMonth() + 1;
          let year = date.getFullYear();
    // Define post title
    let postTitle = data[index].media[0].title;
    // If there is no post title show "Untitled"
      if (postTitle == false) {
        postTitle = "I will be renamed soon";
      }
      // attempt to use ternary operator to display post title
      // const postTitle = true
      // ? (postTitle) => postTitle
      // : (postTitle) => "Untitled";

    // Define post image
     let img = document.createElement("img");
    // Find image URI
    img.src = data[index].media[0].uri;
    let timeline = document.getElementById("timeline")
    let createPost = document.createElement("div-post");
    timeline.setAttribute("class", "div-post");
    let caption = document.createElement("p");
    let captionText = document.createTextNode(postTitle);
    caption.setAttribute("id", index);
    // caption.appendChild(captionText);
    // document.body.appendChild(caption);
    createPost.appendChild(img);
    // createPost.innerHTML += captionText;
    createPost.innerHTML += `<p>${postTitle}</p>
      <p>Date Taken: ${day}/${month}/${year}</p>`;
    console.log("caption: " + caption);
    console.log("captionText: " + captionText);
    document.body.appendChild(createPost);
    }
    console.log("The number outside: " + index);
  });

  
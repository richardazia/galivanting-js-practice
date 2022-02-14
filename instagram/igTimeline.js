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

    var index = totalPosts;

    while (index > 5247) {
      index--;
      console.log("The number inside: " + index);
          let unix_timestamp = data[index].media[0].creation_timestamp;    
    // Define post title
    let postTitle = data[index].media[0].title;
    // If there is no post title show "Untitled"
      if (postTitle == false) {
        postTitle = "Untitled";
      }
    // Define post image
     let img = document.createElement("img");
    // Find image URI
    img.src = data[index].media[0].uri;
    let createPost = document.createElement("div-post");
    createPost.setAttribute("class", "div-post");
    const caption = document.createElement("p");
    const captionText = document.createTextNode(postTitle);
    caption.setAttribute("id", index);
    caption.appendChild(captionText);
    document.body.appendChild(caption);
    createPost.appendChild(img);
    document.body.appendChild(createPost);
    }
    console.log("The number outside: " + index);
  });

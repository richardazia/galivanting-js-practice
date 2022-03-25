"use strict";

console.log("experiment.js");

fetch("posts_1.json")
  .then((response) => response.json())
  .then((data) => {
    // generate random number to select a post
    const totalPosts = data.length;
    const savedData = data;
    console.log(savedData);
    console.log(`Total Posts = ${totalPosts}`)
  });


  
let instagram = () => 
fetch('posts_1.json')
.then(res => res.json())
.then(data => console.log(data));
instagram();

var posts = JSON.parse(data);
console.log(data);
var stringify = JSON.stringify(data); 
console.log(stringify[1]);

//try json-loader
const json = require('posts_1.json');
console.log(json);



// .then(console.log);

// instagram().then((data) => 
//     console.log(data));

// let igPosts = () => 
//     instagram()
//     .then(json =>json.posts)
//     .then(posts => posts.map(post => post.title))
//     .then(titles => console.log(titles));



// igPosts();

// let igUris = () => 
//     instagram()
//     .then(json =>json.media)
//     .then(media => media.map(media => media.uri))
//     .then(uris => console.log(uris));

// igUris();

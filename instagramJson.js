let insagram = () => 
fetch('posts_1.json')
.then(res => res.json())
.then(data => console.log(data));
insagram();

// .then(console.log);

// instagram().then((data) => 
//     console.log(data));

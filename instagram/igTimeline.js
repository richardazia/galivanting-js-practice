// This should display ten posts at a time

fetch('posts_1.json') 
    .then(response => response.json())
    .then(data => {
        const totalPosts = data.length;
        console.log(totalPosts); // 5257
        var n = totalPosts;
        while (n > 5254) {
            n--;
            // generate random number to select a post
            let postTitle = data[n].media[0].title;
            console.log(postTitle);
                if (postTitle == false) {
                    postTitle = 'Untitled';
                    }
            let img = data[n].media[0].uri;
            img.src = data[n].media[0].uri;
            console.log(img);
            let unix_timestamp = data[n].media[0].creation_timestamp;
            // convert timestamp to human readable date
            let date = new Date(unix_timestamp * 1000);
            console.log(date);
            let phrase = 
                "I was taken on the " 
                + date + ", showing \"" 
                + postTitle + "\". I am post No: " 
                + n + ".";
            document.getElementById('insta_div')
            let post = document.getElementById('text');
                post.innerHTML = phrase;
            let photo = document.getElementById('photo');
            console.log(photo);
                photo.replaceChildren(img);
            }
    });
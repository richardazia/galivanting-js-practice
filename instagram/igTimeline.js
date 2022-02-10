// This should display ten posts at a time

fetch('posts_1.json') 
    .then(response => response.json())
    .then(data => {
        const totalPosts = data.length;
        console.log(totalPosts); // 5257

        var n = totalPosts;
        while (n > 5200) {
        n--;
        console.log(n);
        // generate random number to select a post
        let postTitle = data[n].media[0].title;
        console.log(postTitle);
            if (postTitle == false) {
                postTitle = 'Untitled';
                    }
        let img = data[n].media[0].uri;
        console.log(img);
        }
    });
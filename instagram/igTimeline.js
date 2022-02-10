// This should display ten posts at a time

fetch('posts_1.json') 
    .then(response => response.json())
    .then(data => {
        const postNumber = data.length;
        console.log(postNumber); // 5257
        // for (let i = 0; i < data.length; i++) {
        //     // Runs 5 times, with values of step 0 through 4.
        //     console.log('Walking east one step');
        // }
        let postTitle = data[i].media[0].title;
            if (postTitle == false) {
                postTitle = 'Untitled';
            }
        let img = data[i].media[0].uri;
        console.log(title + " " + img);
    });


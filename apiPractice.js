console.log("apiPractice.js is running");

const publicApi = () => {
    return new Promise((resolves, reject) => {
        const api = 
        'https://xkcd.com/info.0.json';
        const request = new XMLHttpRequest();
        request.open("GET", api); // request some data from the API
        request.onload = () => {
            if (request.status === 200) {
                resolves(JSON.parse(request.response)); // parse the data
            } else {
                rejects(Error(request.statusText));    // reject the promise
            }
            request.onerror = err => reject(err);
            request.send();
        };
    });
};

publicApi().then(data =>
    console.log(data));

let getXkcd = () => 
fetch("https://xkcd.com/info.0.json").then(console.log);
getXkcd().then((data) => 
    console.log(data));

let getAstronauts = () =>
fetch(
    "http://api.open-notify.org/astros.json"
).then(console.log);    // to check that it works
//).then((res) => res.json());
// .then(console.log);    To output the data directly within the app

getAstronauts().then((data => 
    console.log(data)
));
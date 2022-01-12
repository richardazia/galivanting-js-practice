const publicApi = () => {
    return new Promise((resolves, reject) => {
        const api = 
        'https://freegeoip.app/json/';
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
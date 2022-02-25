console.log("I am events.js");
self.addEventListener("install", event => {
    console.log("I am install event");
});

self.addEventListener("activate", event => {
    console.log("I am activate event");
});
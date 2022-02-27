const precacheList = [
    "/", 
    "mission.html",
    "resources.html",
    "about.html",
    "tours.html",
    "weather.html"
];

self.addEventListener("install", event => {
    caches.open("california-assets-v1")
    .then(cache => {
        cache.addAll(precacheList);
    });
});
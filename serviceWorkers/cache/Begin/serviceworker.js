const precacheList = [
    "/", 
    "mission.html", 
    "resources.html",
    "tours.html"
];

self.addEventListener("install", event => {
    event.waitUntil(
        caches.open("california-assets-v1")
            .then( cache => {
                cache.addAll(precacheList);
            }
        )
    );
});
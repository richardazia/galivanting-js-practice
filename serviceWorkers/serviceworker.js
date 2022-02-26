// version 3
console.log('Service Worker Loaded...');
try {
    importScripts("events.js");
} catch (e) {
    
}

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                if (response) {
                    return response;
                }
                return fetch(event.request);
            })
    );
});
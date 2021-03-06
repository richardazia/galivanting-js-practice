const precacheList = [
    "/", "index.html", "mission.html", "resources.html", "tours.html", 
    "app.js", "weather.js", "offline.json",
    "_css/fonts.css", "_css/main.css", "_css/mobile.css", "_css/tablet.css",
    "_images/back_bug.gif", "_images/desert_desc_bug.gif", "_images/nature_desc_bug.gif",
    "_images/backpack_bug.gif", "_images/flag.jpg", "_images/snow_desc_bug.gif",
    "_images/calm_bug.gif", "_images/home_page_back.jpg","_images/springs_desc_bug.gif",
    "_images/calm_desc_bug.gif", "_images/kids_desc_bug.gif", "_images/star_bullet.gif",
    "_images/cycle_desc_bug.gif", "_images/logo.gif", "_images/taste_bug.gif",
    "_images/cycle_logo.png", "_images/looking.jpg", "_images/taste_desc_bug.gif",
    "_images/desert_bug.gif", "_images/mission_look.jpg", "_images/tour_badge.png"];

//Put files in the cache

self.addEventListener("install", event => {
    event.waitUntil(
        caches.open("california-assets-v3")
            .then( cache => {
                cache.addAll(precacheList);
            }
        )
    );
});

self.addEventListener("activate", event => {
    const cacheWhileList = ["california-assets-v3"];
    event.waitUntil(
        caches.keys()
            .then( Names => {
            return Promise.all(
                Names.map( cacheName => {
                    if (cacheWhileList.indexOf(cacheName) === -1) {
                        // cache is redundant
                        return caches.delete(cacheName);
                    }
                })
            )
        })
    );
});

// self.addEventListener("message", event => {
//     const message = event.data;
//     switch (message.action) {
//         case "update-resources":
//             caches.open("california-assets-v3")
//                 .then( cache => {
//                     cache.addAll(precacheList);
//                 }
//             )
//             break;
//     }
// });

// The code from the course did not work so I used it from here: 
// https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerGlobalScope/message_event
addEventListener('message', event => {
    // event is an ExtendableMessageEvent object
    console.log(`The client sent me a message: ${event.data}`);
  
    event.source.postMessage(`Hello I am not a cat`);
  });

self.addEventListener("fetch", event => {
    const parsedUrl = new URL(event.request.url);

    if (parsedUrl.host=="explorationcalifornia.org" && !navigator.onLine) {
        event.respondWith(fetch("offline.json"));
    } else if (parsedUrl.host =="explorecalifornia.org" && !navigator.online) {
        event.respondWith(fetch("offline.json"));
    } else if (parsedUrl.pathname.match(/^\/_css*/)) {

    //Stale while Revalidate (Le Poisson pas frais)
    event.respondWith(
    caches.match(event.request)
        .then( response => {
            const networKFetch = fetch(event.request)
                .then(networkResponse => {
                    return caches.open("california-assets-v3")
                        .then( cache => {
                            cache.put(
                                event.request, 
                                networkResponse.clone()
                            )
                            return networkResponse;
                        })
                });
            return response || networkFetch;
        })
    )
} else {
// Get files back from the cache - Cache first Policy
        event.respondWith(
            caches.match(event.request)
                .then( response => {
                    if (response) {
                        return response;
                    } else {
                        if (parsedUrl.pathname.match(/^\/_fonts*/)) {
                            const fetchRequest = 
                            fetch(event.request).then(
                                networkResponse => {
                                    return caches.open("california-fonts-v1")
                                        .then( cache => {
                                            cache.put(event.request, networkResponse.clone());
                                            return networkResponse();
                                        })
                                }
                            )
                            return fetchRequest;
                        } else {
                            return fetch(event.request);
                        }
                    }
                })  
        );
    }
})
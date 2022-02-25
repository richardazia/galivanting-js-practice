// https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerRegistration/update 

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/serviceWorkers/workerRegistration.js')
    .then(function(registration) {
        console.log("Service worker registered with scope: ", registration.scope);
        button.addEventListener('click', function() {
            registration.showNotification('Hello world!', {
                body: 'This is a notification from a service worker',
                icon: 'images/icons/icon-128x128.png'
            });
        });
    })
    .catch(function(err) {
        console.log("Service worker registration failed: ", err);
    });
}
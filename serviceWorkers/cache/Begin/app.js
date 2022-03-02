if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register("serviceworker.js");
}

function sendMessageToSW(message) {
    if (navigator.serviceWorker.controller) {
        navigator.serviceWorker.controller.postMessage(message);
    } else {
        console.log('No service worker');
    }
}

function update() {
    sendMessageToSW({
        action: "update-resources"
    });
}
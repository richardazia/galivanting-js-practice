if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register("serviceworker.js");
}

function sendMessageToSW(message) {
    if (navigator.serviceWorker.controller) {
        navigator.serviceWorker.controller.postMessage(message);
    } else {
        console.log("There is no SW controlling this page");
    }
}

function update() {
    sendMessageToSW({
        action: "update-resources"
    });
}
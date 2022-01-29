'use strict';

//test url

const url = 'https://us-street.api.smartystreets.com/street-address?key=117142354042657436&street=3331%20Erie%20Ave&street2=&city=Cincinnati&state=OH';

const createRequest = function(url) {
    const httpRequest = new XMLHttpRequest(url);
    httpRequest.addEventListener('readystatechange', (url) => {
        if (httpRequest.readyState === 4) {
            console.log(httpRequest.responseText);
        }
    });
    httpRequest.open('GET', url);
    httpRequest.send();
};
createRequest(url);
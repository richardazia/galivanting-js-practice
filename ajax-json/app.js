'use strict';
// added for xhr to work: see: https://stackoverflow.com/questions/32604460/xmlhttprequest-module-not-defined-found

var XMLHttpRequest = require('xhr2');
var xhr = new XMLHttpRequest();

//test url

const url = 'https://us-street.api.smartystreets.com/street-address?key=117142354042657436&street=1428%20Post%20Aly&street2=&city=Seattle&state=WA&zipcode=98101&candidates=10&match=invalid';

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
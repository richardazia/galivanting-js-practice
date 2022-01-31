'use strict';
// added for xhr to work: see: https://stackoverflow.com/questions/32604460/xmlhttprequest-module-not-defined-found

// var XMLHttpRequest = require('xhr2');
// var xhr = new XMLHttpRequest();

//test url

// For Street addresses

//const url = 'https://us-street.api.smartystreets.com/street-address?key=117142354042657436&street=1428%20Post%20Aly&street2=&city=Seattle&state=WA&zipcode=98101&candidates=10&match=invalid';

const url = 'https://us-street.api.smartystreets.com/street-address?key=117142354042657436&';

const addressField = document.querySelector('#address');
const cityField = document.querySelector('#city');
const stateField = document.querySelector('#state');
const zipField = document.querySelector('#zip');

const updateUISuccess = function(data) {
    console.log(data);
};

const updateUIError = function(error) {
    console.log(error);
};

const responseMethod = function(httpRequest) {
    if (httpRequest.readyState === 4) {
        if (httpRequest.status === 200) {
            updateUISuccess(httpRequest.responseText);
        } else {
            updateUIError(httpRequest.status + ': ' + httpRequest.responseText);
        }
    }
}

const createRequest = function(url) {
    const httpRequest = new XMLHttpRequest(url);
    httpRequest.addEventListener('readystatechange', (url) => responseMethod(httpRequest));
    httpRequest.open('GET', url);
    httpRequest.send();
};

const checkCompletion = function() {
    if (addressField.value !== '' &&
        cityField.value !== '' &&
        stateField.value !== '') {
            const requestURL = url + 
            '&street=' + addressField.value + 
            '&city=' + cityField.value + 
            '&state=' + stateField.value;
            createRequest(requestURL);
        }
}

createRequest(url);

addressField.addEventListener('blur', checkCompletion);
cityField.addEventListener('blur', checkCompletion);
stateField.addEventListener('blur', checkCompletion);



/*
// For National parks

const urlPark = 'https://developer.nps.gov/api/v1/parks?api_key=yourkeyhere';

const updateUISuccess = function(data) {
    console.log(data);
};

const updateUIError = function(error) {
    console.log(error);
};

const responseMethod = function(httpRequest) {
    if (httpRequest.readyState === 4) {
        if (httpRequest.status === 200) {
            updateUISuccess(httpRequest.responseText);
        } else {
            updateUIError(httpRequest.status + ': ' + httpRequest.responseText);
        }
    }
}

const createRequest = function(url) {
    const httpRequest = new XMLHttpRequest(url);
    httpRequest.addEventListener('readystatechange', (urlPark) => responseMethod(httpRequest));
    httpRequest.open('GET', url);
    httpRequest.send();
};
createRequest(urlPark);
*/

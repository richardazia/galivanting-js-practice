'use strict';
// added for xhr to work: see: https://stackoverflow.com/questions/32604460/xmlhttprequest-module-not-defined-found

// var XMLHttpRequest = require('xhr2');
// var xhr = new XMLHttpRequest();

//test url

// For Street addresses

//const url = 'https://us-street.api.smartystreets.com/street-address?key=117142354042657436&street=1428%20Post%20Aly&street2=&city=Seattle&state=WA&zipcode=98101&candidates=10&match=invalid';

const url = 'https://us-street.api.smartystreets.com/street-address?key=117142354042657436&';

const urlPark = 'https://developer.nps.gov/api/v1/parks?api_key=2kZIKxXVShijBdScR0T9mNI2CeiGWpLIFwCnX2Tr';


const addressField = document.querySelector('#address');
const cityField = document.querySelector('#city');
const stateField = document.querySelector('#state');
const zipField = document.querySelector('#zip');
const parkThumb = document.querySelector('#specials h2 img');
const parkSection = document.querySelector('#specials');
const parkName = document.querySelector('#specials h2 a');
const parkDesc = document.querySelector('#specials p');

const UrlUpdateUISuccess = function(data) {
    const parsedData = JSON.parse(data);
//    console.log(parsedData);
    const zip = parsedData[0].components.zipcode;
    const plus4 =parsedData[0].components.plus4_code;
//    console.log(zip + '-' + plus4);
    zipField.value = zip + '-' + plus4
};

const ParkUpdateUISuccess = function(data) {
    const parsedData = JSON.parse(data);
    console.log(parsedData);
    const number = Math.floor(Math.random() * parsedData.data.length);
    parkName.textContent = parsedData.data[number].fullName;
    parkDesc.textContent = parsedData.data[number].description;
    parkName.href = parsedData.data[number].url;
    parkDesc.textContent = parsedData.data[number].description;
    parkThumb.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Logo_of_the_United_States_National_Park_Service.svg/690px-Logo_of_the_United_States_National_Park_Service.svg.png';
    parkSection.classList.remove('hidden');
};

const UrlUpdateUIError = function(error) {
    console.log(error);
};

const ParkUpdateUIError = function(error) {
    console.log(error);
};

const responseMethod = function(httpRequest, succeed, fail) {
    if (httpRequest.readyState === 4) {
        if (httpRequest.status === 200) {
            succeed(httpRequest.responseText);
        } else {
            fail(httpRequest.status + ': ' + httpRequest.responseText);
        }
    }
}

const createRequest = function(url, succeed, fail) {
    const httpRequest = new XMLHttpRequest(url);
    httpRequest.addEventListener('readystatechange', (url) => responseMethod(httpRequest, succeed, fail));
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
            createRequest(requestURL, UrlUpdateUISuccess, UrlUpdateUIError);
        }
}

//createRequest(url);
createRequest(urlPark, ParkUpdateUISuccess, ParkUpdateUIError);

addressField.addEventListener('blur', checkCompletion);
cityField.addEventListener('blur', checkCompletion);
stateField.addEventListener('blur', checkCompletion);

/*
// For National parks

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

*/

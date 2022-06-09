"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

const renderError = function(msg) {
  countriesContainer.insertAdjacentText("beforeend", msg);
  // countriesContainer.style.opacity = 1;
};

// Using V2
const renderCountry = function(data, className = "") {
  const html = `
<article class="country ${className}">
<img class="country__img" src="${data.flag}" />
<div class="country__data">
  <h3 class="country__name">${data.name}</h3>
  <h4 class="country__region">${data.region}</h4>
  <p class="country__row"><span>👫</span>
  ${(+data.population / 1000000).toFixed(1)}M people</p>
  <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
  <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
</div>
</article>
`;
  countriesContainer.insertAdjacentHTML("beforeend", html);
  // countriesContainer.style.opacity = 1;
};

///////////////////////////////////////

// https://restcountries.com/v3.1

/*

  const request = new XMLHttpRequest();
  request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener("load", function() {
    // Destructure data with [data]
    const [data] = JSON.parse(this.responseText);
    console.log(data.currencies);
    console.log(data.languages);
    const html = `
  <article class="country">
    <img class="country__img" src="${data.flags.png}" />
    <div class="country__data">
      <h3 class="country__name">${data.name.common}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>
      ${(+data.population / 1000000).toFixed(1)}M people</p>
      <p class="country__row"><span>🗣️</span>${data.languages[0]}</p>
      <p class="country__row"><span>💰</span>${data.currencies[0]}</p>
    </div>
  </article>
  `;

    countriesContainer.insertAdjacentHTML("beforeend", html);
    countriesContainer.style.opacity = 1;

  });
};
*/

/*
const getCountryAndNeighbour = function(country) {
  // Country 1 request
  const request = new XMLHttpRequest();
  request.open("GET", `https://restcountries.com/v2/name/${country}`);
  request.send();

  request.addEventListener("load", function() {
    // Destructure data with [data]
    const [data] = JSON.parse(this.responseText);

    // Display Country 1
    renderCountry(data);

    // Prepare country 2
    // const [neighbour] = data.borders?.[1];
    const neighbour = data.borders?.[0];
    console.log(neighbour);
    if (!neighbour) return;

    // Country 2 request
    const request2 = new XMLHttpRequest();
    request2.open("GET", `https://restcountries.com/v2/alpha/${neighbour}`);
    request2.send();

    request2.addEventListener("load", function() {
      console.log(this.responseText);
      // const [data2] = JSON.parse(this.responseText); // Object not iterable error
      const data2 = JSON.parse(this.responseText);
      console.log(data2);

      renderCountry(data2, "neighbour");
    });
  });
};

getCountryAndNeighbour("uk");
/*
/////////////////////////////////////////////////
// Callback hell example

setTimeout(() => {
  console.log("50 frames shot");
  setTimeout(() => {
    console.log("100 frames shot");
    setTimeout(() => {
      console.log("150 frames shot");
      setTimeout(() => {
        console.log("200 frames shot");
        setTimeout(() => {
          console.log("250 frames shot");
          setTimeout(() => {
            console.log("300 frames shot");
            setTimeout(() => {
              console.log("350 frames shot");
            }, 1000);
            setTimeout(() => {
              console.log("400 frames shot");
            }, 1000);
            setTimeout(() => {
              console.log("450 frames shot");
            }, 1000);
            setTimeout(() => {
              console.log("550 frames shot");
            }, 1000);
            setTimeout(() => {
              console.log("600 frames shot");
            }, 1000);
            setTimeout(() => {
              console.log("650 frames shot");
            }, 1000);
            setTimeout(() => {
              console.log("700 frames shot");
            }, 1000);
            setTimeout(() => {
              console.log("750 frames shot");
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
*/
// const request = fetch("https://restcountries.com/v2/name/italy");

// const getCountryData = function(country) {
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(function(response) {
//       console.log(response);
//       return response.json();
//     })
//     .then(function(data) {
//       console.log(data);
//       renderCountry(data[0]);
//     });
// };
// Simplified

const getJSON = function(url, errorMsg = "something went wrong") {
  return fetch(url).then(response => {
    if (!response.ok)
      throw new Error(
        `Country: ${country} not found: ${errorMsg}. Try one more time`
      );
    return response.json();
  });
};

const getCountryData = function(country) {
  // Primary country
  getJSON(`https://restcountries.com/v2/name/${country}`, "country not found")
    .then(data => {
      renderCountry(data[0]);
      // const [neighbour] = data.borders?.[0];
      // console.log(data[0].borders[0]);
      const neighbour = data[0].borders[0];
      // console.log(neighbour);
      // const neighbour = "askdwe";

      if (!neighbour) throw new Error("No neighbour found!");

      // Country 2
      return getJSON(
        `https://restcountries.com/v2/alpha/${neighbour}`,
        "country not found"
      );
    })
    .then(data => renderCountry(data, "neighbour"))
    .catch(err => {
      console.error(`${err} try again`);
      renderError(`Something went wrong ${err.message}. Try again `);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener("click", function() {
  getCountryData("China");
});

// const getCountryData = function(country) {
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(response => {
//       console.log(response);
//
//
//     .then(data => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders?.[0];
//
//       if (!neighbour) return;
//
//       // Fetch the neighbour
//       return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
//     })
//     .then(response => response.json())
//     .then(data => renderCountry(data, "neighbour"))
//     .catch(err => {
//       console.log(`${err} connection lost, please try again`);
//       renderError(
//         `Something went wrong - please check your connection, or try again: ...${err.message} `
//       );
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// getCountryData("jamaica");

///////////////////////////////////////
// Coding Challenge #1

/*
In this challenge you will build a function 'whereAmI' which renders a country ONLY based on GPS coordinates. For that, you will use a second API to geocode coordinates.

Here are your tasks:

PART 1
1. Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a longitude value (lng) (these are GPS coordinates, examples are below).
*/

const whereAmI = function(lat, lng) {
  fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
    .then(function(response) {
      // if (!response.ok) throw new Error(`error: ${errorMsg}`);
      // if (!response.ok) throw new Error("Invalid geocode");
      if (!response.ok) throw new Error("error");
      return response.json();
    })
    .then(function(data) {
      console.log(
        `According to these coordinates you are in ${data.city}, ${data.country}.`
      );
    })
    .catch(err => {
      console.error(`${err}: try again`);
      renderError(`There was an error. ${err.message}.`);
    })
    .finally(() => {
      console.log("Request complete");
    });
};

whereAmI(52.508, 13.381);
whereAmI(19.037, 72.873);
whereAmI(-33.933, 18.474);
whereAmI("The Quick Brown Fox jumped over the lazy dog");

/*
2. Do 'reverse geocoding' of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name. Use this API to do reverse geocoding: https://geocode.xyz/api.
The AJAX call will be done to a URL with this format: https://geocode.xyz/52.508,13.381?geoit=json. Use the  API and promises to get the data. Do NOT use the getJSON function we created, that is cheating 😉
*/
// Done
/*
3. Once you have the data, take a look at it in the console to see all the attributes that you recieved about the provided location. Then, using this data, log a messsage like this to the console: 'You are in Berlin, Germany'
*/
// Done
/*
4. Chain a .catch method to the end of the promise chain and log errors to the console
5. This API allows you to make only 3 requests per second. If you reload fast, you will get this error with code 403. This is an error with the request. Remember, () does NOT reject the promise in this case. So create an error to reject the promise yourself, with a meaningful error message.

PART 2
6. Now it's time to use the received data to render a country. So take the relevant attribute from the geocoding API result, and plug it into the countries API that we have been using.
7. Render the country and catch any errors, just like we have done in the last lecture (you can even copy this code, no need to type the same code)

TEST COORDINATES 1: 52.508, 13.381 (Latitude, Longitude)
TEST COORDINATES 2: 19.037, 72.873
TEST COORDINATES 2: -33.933, 18.474

GOOD LUCK 😀
*/

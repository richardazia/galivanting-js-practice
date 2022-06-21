"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");
const newImage = document.querySelector(".images");

const renderError = function(msg) {
  countriesContainer.insertAdjacentText("beforeend", msg);
  countriesContainer.style.opacity = 1;
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
  countriesContainer.style.opacity = 1;
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
const getPosition = function() {
  return new Promise(function(resolve, reject) {
    // navigator.geolocation.getCurrentPosition(
    //	position => resolve(position),
    //	err => reject(err)
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

getPosition().then(pos => console.log(pos));

//const whereAmI = function(lat, lng) {
/*
const whereAmI = function () {
	getPosition().then(pos => {
	const {latitude: lat, longitude:  lng } = pos.coords;
	return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)

})
*/
/*
//  fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
    .then(res => {
      if (!res.ok) throw new Error(`oups: error ${res.status}`);
      return res.json();
    })
    .then(data => {
      console.log(data);
      console.log(
        `According to these coordinates you are in ${data.city}, ${data.country}.`
      );
      return fetch(`https://restcountries.com/v2/name/${data.country}`);
    })
    .then(res => {
      if (!res.ok) throw new Error(`Country not found (${response.status})`);

      return res.json();
    })
    .then(data => renderCountry(data[0]))
    .catch(err => {
      console.error(`${err.message}: try again`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

whereAmI(52.508, 13.381);
whereAmI(19.037, 72.873);
whereAmI(-33.933, 18.474);
*/

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
//////////////////////////
// Event Loop in practice
/*
console.log('test start');
setTimeout(() => console.log('0 sec timer'), 0);
Promise.resolve('resolved Promise 1').then(res =>
console.log(res));

Promise.resolve('Resolved promise 2').then(res => {
	for (let i = 0; i <1000000; i++) {

	};
	console.log(res);
});
console.log('Test end');
*/
/*
const lotteryPromise = new Promise(function(resolve, reject) {
	console.log('lottery draw is happening!');
	setTimeout(function() {
		if(Math.random() >= 0.5) {
		resolve('You win')
		} else {
		reject('You lost - keep playing');
		}
	}, 2000)

});

lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));
*/
/*
const wait = function(seconds) {
	return new Promise(function(resolve){
	setTimeout(resolve, seconds * 10000)
	});
};

wait(2).then(() => {
	console.log('I waited for two seconds!');
	return wait(1);
}).then(() => console.log('I waited for one second'));
// static constructor - this will resolve immediately.
*/
/*
Promise.resolve('abc').then(x => console.log(x));
Promise.reject('abc').catch(x => console.error(x));
Promise.reject(new Error('Alarme! Aalarme! Alarme!')).catch(x => console.log(x));

navigator.geolocation.getCurrentPosition(position => console.log(position),
	err => console.log(err)
);
*/
/*
const getPosition = function() {
	return new Promise(function(resolve, reject){
	// navigator.geolocation.getCurrentPosition(
	//	position => resolve(position),
	//	err => reject(err)
	navigator.geolocation.getCurrentPosition(resolve, reject);
	});
};

getPosition().then(pos => console.log(pos));
*/

// Coding Challenge 2

/*
Build the image loading functionality that I just showed you on the screen.
Tasks are not super-descriptive this time, so that you can figure out some stuff on your own. Pretend you're working on your own 😉
PART 1
1. Create a function 'createImage' which receives imgPath as an input. This function returns a promise which creates a new image (use document.createElement('img')) and sets the .src attribute to the provided image path. When the image is done loading, append it to the DOM element with the 'images' class, and resolve the promise. The fulfilled value should be the image element itself. In case there is an error loading the image ('error' event), reject the promise.
If this part is too tricky for you, just watch the first part of the solution.
PART 2
2. Comsume the promise using .then and also add an error handler;
3. After the image has loaded, pause execution for 2 seconds using the wait function we created earlier;
4. After the 2 seconds have passed, hide the current image (set display to 'none'), and load a second image (HINT: Use the image element returned by the createImage promise to hide the current image. You will need a global variable for that 😉);
5. After the second image has loaded, pause execution for 2 seconds again;
6. After the 2 seconds have passed, hide the current image.
TEST DATA: Images in the img folder. Test the error handler by passing a wrong image path. Set the network speed to 'Fast 3G' in the dev tools Network tab, otherwise images load too fast.
GOOD LUCK 😀
*/
// Part 1
/*
const wait = function(seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

const imgContainer = document.querySelector('.images');

const createImage = function( imgPath ) {
  return new Promise(function (resolve, reject) {
	const img = document.createElement('img');
	img.src = imgPath;

	img.addEventListener('load', function() {
		imgContainer.append(img);
		resolve(img);
	});

	img.addEventListener('error', function () {
		reject(new Error('Image not found'));
	});

  });
};

let currentImg;

createImage('img/img-1.jpeg')
  .then(img => {
    currentImg = img;
    console.log('Image 1 loaded');
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
    return createImage('img/img-2.jpeg');
  })
  .then(img => {
    currentImg = img;
    console.log('Image 2 loaded');
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
})
.catch(err => console.error(err));

console.log(createImage("I am an image path"));

console.log(newImage);
*/
// For the challenge I followed the git file but used VIM as an editor, rather than atom or VS code, both to practice this skill, but also because it requires me to think more carefully about code.

const whereAmI = async function(country) {
  await fetch(`https://restcountries.com/v2/name/${country}`);
  console.log(res);
};

console.log("Getting location");
whereAmI("Tanzania");
console.log("I know where we are");

btn.addEventListener("click", whereAmI);
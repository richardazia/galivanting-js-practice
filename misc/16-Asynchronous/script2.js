"use strict";

const countriesContainer = document.querySelector(".countries");
const getPosition = function() {
  return new Promise(function(resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const getJSON = function(url, errorMsg = "something went wrong") {
  return fetch(url).then(response => {
    if (!response.ok)
      throw new Error(
        `Country: ${country} not found: ${errorMsg}. Try one more time`
      );
    return response.json();
  });
};

const renderCountry = function(data, className = "") {
  const html = `
 <article class="country ${className}">
   <img class="country__img" src="${data.flag}" />
   <div class="country__data">
    <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>
    ${(+data.population / 1000000).toFixed(1)}M people</p>
    <p class="country__row"><span>🗣️ </span>${data.languages[0].name}</p>
    <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
  </div>
  </article>
  `;
  countriesContainer.insertAdjacentHTML("beforeend", html);
  countriesContainer.style.opacity = 1;
};

const whereAmI = async function(country) {
  try {
    const pos = await getPosition();

    const { latitude: lat, longitude: lng } = pos.coords;

    const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    if (!resGeo.ok) throw new Error("Problem getting location data");
    const dataGeo = await resGeo.json();
    console.log(dataGeo);
    const res = await fetch(
      `https://restcountries.com/v2/name/${dataGeo.country}`
    );
    const data = await res.json();
    console.log(data[0]);
    renderCountry(data[0]);

   return `You are in ${dataGeo.city}, ${dataGeo.country} `; 
  } catch (err) {
    console.error(err);
    renderError(`Something went wrong!! `);

    // Reject promise returned from async function
    throw err;
  }
};
console.log('1: Get the location');
//const city = whereAmI();
//console.log(city);
/*
whereAmI()
  .then(city => console.log(`${city}`))
  .catch(err => console.error(`2: ${err.message} OUPS `))
  .finally(() => console.log("3: The location is now known"));
*/
// Time for an iffy

(async function() {
  try {
    const city = await whereAmI();
  } catch (err) {
    console.log(`2: ${err.message} OUPS`)
  }
  console.log(`3: Finished getting location`)
})();
/*
const get3Countries = async function(c1, c2, c3) {
  try {
//    const [data1] = await getJSON(`https://restcountries.com/v2/name/${c1}`);
//    const [data2] = await getJSON(`https://restcountries.com/v2/name/${c2}`);
//    const [data3] = await getJSON(`https://restcountries.com/v2/name/${c3}`);
//    console.log([data1.capital, data2.capital, data3.capital]);
    
    const data = await Promise.all([getJSON(
      `https://restcountries.com/v2/name/${c1}`),
      getJSON(
        `https://restcountries.com/v2/name/${c2}`),
      getJSON(
        `https://restcountries.com/v2/name/${c3}`)
      ]);

    console.log(data.map(d => d[0].capital));
  } catch(err) {
    console.error(err);
  }
};

get3Countries('Thailand', 'Australia', 'New Zealand');
*/
/*
try {
  let y = 1;
  const x = 2;
  y = 3;
} catch(err) {
  alert(err.messsage);
}
*/

// Promise.race

(async function () {
  const res = await Promise.race([
    getJSON(`https://restcountries.com/v2/name/Italy`),
    getJSON(`https://restcountries.com/v2/name/France`),
    getJSON(`https://restcountries.com/v2/name/Spain`),
  ]);
  console.log(res[0]);
})();

const timeout = function (sec) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error('Request took too long!'));
    }, sec * 1000);
  });
};

Promise.race([
  getJSON(`https://restcountries.com/v2/name/kenya`),
  timeout(3),
])
  .then(res => console.log(res[0]))
  .catch(err => console.error(err));

// Promise.allSettled
Promise.allSettled([
  Promise.resolve('success'),
  Promise.reject('fail'),
  Promise.resolve('success'),
]).then(res => console.log(res));

// Promise.all
Promise.all([
  Promise.resolve('success'),
  Promise.reject('HB-JNP'),
  Promise.resolve('success'),
]).then(res => console.log(res));

// Promise.any
Promise.any([
  Promise.resolve('success'),
  Promise.reject('HB-JNP'),
  Promise.resolve('success'),
]).then(res => console.log(`any result: ${res}`));








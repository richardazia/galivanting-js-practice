"use strict";

const countriesContainer = document.querySelector(".countries");
const getPosition = function() {
  return new Promise(function(resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
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
try {
  let y = 1;
  const x = 2;
  y = 3;
} catch(err) {
  alert(err.messsage);
}
*/













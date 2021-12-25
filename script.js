let brand1 = 'Suunto';
const brand2 = 'Garmin';
console.log(brand1, brand2);

// and now to get an error message: "Assignment to constant variable.""

// brand2 = 'Apple';

// console.log(brand2);

// If we reassign brand1 we will not get an error
brand1 = 'Apple';
console.log(brand1);

const screamBrand = () => {
    let brand4 = 'Fitbit';
    if (brand2 === 'Garmin') {
        let brand3 = 'Suunto';
        console.log(`Our watch brands are ${brand1}, ${brand2} and ${brand3}!`)
    }
    console.log(brand4);
}

screamBrand();
// Warrior3 is out of scope. 
// console.log(warrior3);
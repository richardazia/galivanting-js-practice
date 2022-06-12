'use strict'

// practicing with vim at the same time

const sports = ['hiking', 'caving', 'cycling', 'snowboarding', 'scuba diving', 'snorkeling']

const sportLength = sports.length;
console.log(sportLength);

sports [3] = 'Snowshoeing'

console.log(sports);

const distance = [7, 8, 10, 27, 15, 12, 20, 24, 32];

const logDistance = distance => console.log('distance over 15', distance);

distance.forEach((e) => {
	if(e > 15) {
	logDistance(e);
	}
});

// extra fun

const duration = [60, 93, 15, 13, 12, 12, 17, 54, 5, 22];

const specDuration = duration => console.log('The required time is 52 minutes. The duration is: ', duration);

duration.forEach((e) => {
	if (e > 52) {
	specDuration(e);
	} else {
	console.log('The content is too short');
	};
});

// Sorting sorting sorting

const animals = ['duck', 'goose', 'rat', 'cat', 'dog', 'rabbit', 'gerbil'];

console.log(animals.sort());


const grades = [77, 88, 93, 23, 65, 62, 56, 34, 90, 12, 100];
// Highest to loweest
grades.sort((a,b) => b - a );
console.log(grades);
// Lowest to highest
grades.sort((a, b) => a - b);
console.log(grades);

const participants = ['Anna', 'Julian', 'John', 'Duckberg', 'leppy the Leprachaun'];

const reversed = [...participants]; 

console.log('reversed', reversed.reverse());
console.log('untouched original array: ', participants); 

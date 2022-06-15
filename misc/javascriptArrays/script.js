'use strict'

//press esc and then type 'set number to display line numbers in VIM'

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
/*
// Highest to loweest
grades.sort((a,b) => b - a );
console.log(grades);
// Lowest to highest

grades.sort((a, b) => a - b);
console.log(grades);
*/
const participants = ['Anna', 'Julian', 'John', 'Duckberg', 'leppy the Leprachaun'];

const reversed = [...participants]; 

console.log('reversed', reversed.reverse());
console.log('untouched original array: ', participants); 
// Find the first under eighty
const underEighty = grades.find((e) => e < 80);
console.log(underEighty);
// Find the index of the first grade that is over eighty
const overEighty = grades.findIndex((e) => e > 80);
console.log(overEighty);
console.log(grades[1]); 

// Challenge: Order Data

const students = [
	{name: 'John', grade: 75 },
	{name: 'Jane', grade: 90 },
	{name: 'Samantha', grade: 90 },
	{name: 'Michael', grade: 94 },
];

console.log(students);

// 2.  Sort student array based on grades (descending order)
students.sort(function (a,b) {
	return a.grade - b.grade;
});
console.log(students);

// Course solution
console.log(students.reverse()); 

// 1. Reverse the order of the array
students.sort(function(a,b) {
	return b.grade - a.grade;
});
console.log(students);

// 3. Find a student in the array who has a grade over 90
/*
grade = [students.grade[0]];
console.log(grade);
const overNinety = students.find((e) => e < 90);
console.log(overNinety); 
*/

// Course solution 
// I needed to do: In student look at student.grade, and within this narrow parameter look for values above 90. I missed two steps. 

//How it should be formulated. 

const overNinety = students.find((student) => student.grade > 90 );
console.log(overNinety); 

// Extra practice

const dives = [
	{name: 'Hermance', depth: 38 },
	{name: 'Chindrieux', depth: 45 },
	{name: 'El Ratos', depth: 20 },
	{name: 'Gouille Du Duzillet', depth: 9 },
];

const deepestDive = dives.find((dive) => dive.depth > 40 );
console.log(deepestDive);

dives.sort(function(a, b) {
	return a.depth - b.depth;
});
console.log(dives);
console.log(dives.reverse());

const careers = ['luggage handler', 'deicer', 'duty free store room worker', 'camera operator', 'video editor', 'network resource manager']

const deicerIncluded = careers.includes('deicer');

console.log(deicerIncluded); // returns true

const cantons = [
	'Vaud',
	'Gemève',
	'Fribourg',
	'Valais',
	'Neuchatel', 
	'Bern', 
	'Zurich', 
];

const someCanton = cantons.some((canton) => canton.startsWith('Neu'));

console.log(someCanton); //Yes, because at least one canton does. 

const everyCanton = cantons.every((canton) => canton.startsWith('Neu'));
console.log(everyCanton); // False, because only one Canton does

// Challenge 2

// Bowling scores

const bowlingScores = [154, 204, 300, 184, 286]

// 1. 

const bowlingInclude = bowlingScores.includes(300);

console.log(`Does it contain a 300: ${bowlingInclude}`);

// 2. 
const underOneFifty = bowlingScores.includes((e) => e < 150);
console.log(`Someone did terribly by scoring under 150: ${underOneFifty}`);

// 3. Is every score even?
// My code
// const evenScores = bowlingScores.every((bowlingScore) => (bowlingScore % 2) === true);
// Course solution
const evenScores = bowlingScores.every((score) => score % 2 === 0);
console.log(`Are all scores even? ${evenScores}`);

const flowers = ['daisies', 'roses', 'dandelions'];

flowers.push('pansies');
console.log(flowers); 

const seasons = ['spring', 'summer', 'autumn', 'winter'];
const poppedSeasons = seasons.pop();
console.log(poppedSeasons);
console.log(seasons);

const distances = [200, 300, 500, 1000, 2000, 5000];

distances.unshift(10000);
console.log(distances);

const villages = ['Versoix', 'Mies', 'Tannay', 'La Rippe'];
const shiftedVillage = villages.shift();
console.log(shiftedVillage);
console.log(villages);

// Challenge, stacks and queues
//Push, Pop, Unshift and Pop challenge

const foods = [
	{ food: 'raspberries', type: 'fruit' },
	{ food: 'orange', type: 'fruit' },
	{ food: 'broccoli', type: 'vegetable'},
	{ food: 'quinoa', type: 'grain'}
];

const blackBeans = { food: 'black beans', type: 'legume' };
const chiaSeeds = { food: 'chia seeds', type: 'seed'};

console.log(foods);

// 1. 
console.log('Question 1');
const lastFoodPop = foods.pop();
console.log(lastFoodPop);

// 2.
console.log('Question 2');
const firstFoodShift = foods.shift();
console.log(firstFoodShift);

//3. 
console.log('Question 3');
foods.unshift(blackBeans);
console.log(foods);

// 4. 
console.log('Question 4');
foods.push(chiaSeeds);
console.log(foods);

// Advanced methods

const friends = [
	{ firstname: 'Doctor', lastname: 'Strangelove' },
	{ firstname: 'Topper', lastname: 'Harley' }, 
	{ firstname: 'Hawkeye', lastname: 'Pierce' },
];
/*
const fullName = friends.map((friend) => {
	return friend.firstname + " "  + friend.lastname;
});
*/

const fullName = friends.map((friend) => `${friend.firstname} ${friend.lastname}`
);
console.log(fullName);

// Filtering arrays

const groceries = [
	{ item: 'apples', type: 'fruit' },
	{ item: 'cereal', type: 'pantry' },
	{ item: 'rice', type: 'pantry' },
	{ item: 'pork chops', type: 'meat' },
	{ item: 'Cordon Bleu Chicken', type: 'meat'},
	{ item: 'bananas', type: 'fruit' },
	{ item: 'broccoli', type: 'vegetables' },
];

const fruit = groceries.filter((item) => {
 return item.type === 'fruit';
});

console.log(fruit);

const meat = groceries.filter((item) => {
  return item.type === 'meat';
});
console.log(meat)

const pantry = groceries.filter((item) => item.type === 'pantry');
console.log(pantry);

const notMeat = groceries.filter((item) => item.type !== 'meat');
console.log(notMeat);

// Playing with Reduce

const diveTime = [22, 32, 28, 53, 25, 16, 45, 67, 33];

const totalDiveTime = diveTime.reduce((minutes, time) => minutes + time);
console.log(totalDiveTime);

const cyclingTime = [63, 92, 54, 34, 120, 15, 9, 32, 68];

const totalCycleTime = cyclingTime.reduce((totDuration, time) => totDuration + time);
console.log(totalCycleTime);

// flatMap()

const wordScramble = ['sing', 'glance', 'chase', 'glaze', 'struggle', 'learn', 'educate'];

const splitWords = wordScramble.flatMap((word) => word.split(''));
console.log(splitWords);

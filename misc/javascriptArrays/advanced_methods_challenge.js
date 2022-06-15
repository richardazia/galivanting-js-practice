//Map, Filter, Reduce, and FlatMap
const movies = [
  {
    title: 'Avatar',
    year: '2009',
    rating: 'PG-13',
  },
  {
    title: 'I Am Legend',
    year: '2007',
    rating: 'PG-13',
  },
  {
    title: '300',
    year: '2006',
    rating: 'R',
  },
  {
    title: 'The Avengers',
    year: '2012',
    rating: 'PG-13',
  },
  {
    title: 'The Wolf of Wall Street',
    year: '2013',
    rating: 'R',
  },
];

console.log(movies);

//Challenge Question #1
//Create a new array that just contains the movie titles.
/*
// Attempt 1:
const movieTitles = movies.filter((title) => movies.title );
console.log(movieTitles); // returns an empty set
*/
/*
// Attempt 2:
const movieTitles = movies.map((title) => movies.title );
console.log(movieTitles); // returns undefined, undefined undefined ...
*/
const movieTitle = movies.map((movie) => {
  return movie.title;
});

console.log(movieTitle); // Finally the right output

//Challenge Question #2
//Create a new array that contains only those movies that are PG-13.

const pgThirteen = movies.filter((movie) => movie.rating === 'PG-13');
console.log(pgThirteen);


//Challenge Question #3
//Determine how many of the movies are rating R.

// My solution
const rLength = movies.filter((movie) => movie.rating === 'R');
console.log(rLength.length);

// The Course solution

const ratedMovies = movies.reduce((acc, movie) => {
  if(movie.rating === 'R'){
    acc++
  };
  return acc;
}, 0);

console.log(ratedMovies); 

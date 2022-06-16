'use strict'

function power(base, exponent){
  let result = 1;
  for(let i = 1; i <= exponent; i++) {
    result *= base;
  }
  return result;
}

console.log(power(5,6));

// Factorial

function factorial(position){
  let answer = 1;
  for(let num = position; num > 0; num--) {
    answer *= num; 
  }
  return answer;
}

console.log(factorial(5)); // 120

/*
Recursion is a problem-solving technique, where the solution of a larger problem is defined in terms of smaller instances of itself.
*/

/*
Recursive Function requirements: 
- There must be a start point
- There must be an end point
- It should iterate from a smaller, simpler vision towards the desired outcome
- When the desired outcome is reached the recursion should end

*/

function factorial(index) {
  if(index === 0) {
    return 1
  }

  return index * factorial( index - 1);
};

console.log(factorial(20));
console.log(factorial(5));
console.log(factorial(1));

function fibonacci(n) {

let cache = {};

  if(cache[n]) { 
    return cache[n]
  }

  let result = n

  if(n === 0 || n === 1) {
    return n;
  } else {
  
  return fibonacci(n-1) + fibonacci(n-2);
  }

  return result

}

console.log(fibonacci(5));

console.log(fibonacci(24));

// head recursion and tail recursion - find definitions
/*
Intuitive approach

- Define the desired outcome

- break up the desired outcome into steps

- find the efficient and elegant solution
*/



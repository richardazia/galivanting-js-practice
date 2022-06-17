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

// Challenge: The palindrome check using recursion
/*
function myIsPalindrome(phrase) {
  if (phrase === phrase.reverse) {
    console.log(`${phrase} is a palindrome`);
  } else { 
    console.log('This word is not a palindrome');
};

console.log(myIsPalindrome(duck));
*/
/*
function isPalindrome(phrase) {

  const size = phrase.length;

  for(let i = 0; i < size / 2; i++){
    if (phrase[i] !==phrase[size - 1 - i]){
      return false;
    }
  }
  return true;
};

console.log("rotor: " + isPalindrome("rotor"));
*/
// Palindrome steps

// 1. Identify the word

// 2. Check if the word is equal in both directions. 

// 3. If the word is the same in both directions then state that it is a palindrome

// 4. If it isn't a palindrome then say so

const palindromeCheck = function (word) {

console.log(`The words are: ${word}, ${word.reverse}`);

}

console.log(palindromeCheck("rotor"));;

// Z is a palindrome, as is a string. 

function isPalindrome(phrase){
  let size = phrase.length;

  if(size === 0 || size === 1){
    return true;
  } else {
    if(phrase[0] !== phrase[size - 1]){
      return false;
    } else {
      const convergingString = phrase.substr(1, size -2)
      return isPalindrome(convergingString)
    }
  }
}

console.log(`is rotor a palindrome: ${isPalindrome("rotor")}`);
/*
* Get all the nodes in the binary tree
* @param {binaryTreeNode} root
* @returns {numbers} array
*/
function count_nodes_solution(root){
  let nodes = [];
  
  flow(root);

  function flow(root){
    if(root === null) {
      return nodes;
    } else {
      nodes.push(root.val);
      flow(root.left);
      flow(root.right);
    }
  }
  return nodes;
}
function count_leafs_solution(root){
  let leafs = [];
  
  flow(root);

  function flow(root){
    if(root === null){ 
      return nodes;
    } else {
      if(root.left  === null && root.right === null) {
        nodes.push(root.val);
      } 
      flow(root.left);
      flow(root.right);
    }
  }
}

// LinkedList





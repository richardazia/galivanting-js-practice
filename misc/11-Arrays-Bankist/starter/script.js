'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

// The Application

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movementlist = sort
    ? movements.slice().sort((a, b) => a - b)
    : movements;

  movementlist.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type} </div>
      <div class="movements__value">${mov}</div>
    </div>
      `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance}€`;
};

const calcDisplaySummary = function (acc) {
  const income = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${income}€`;

  const outGoing = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(outGoing)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc.movements);
  // Display balance
  calcDisplayBalance(acc);
  // Display summary
  calcDisplaySummary(acc);
};

// Event Handler
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display the UI and message
    labelWelcome.textContent = `Welcome back ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // Clear the text fields

    inputLoginUsername.value = inputLoginPin.value = '';

    inputLoginPin.blur();

    updateUI(currentAccount);
  } else {
    alert('Wrong pin');
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc && // receiverAcc is not undefined
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    console.log('Transfer OK');
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    updateUI(currentAccount);
  } else {
    alert('Invalid amount or receiver');
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.balance >= amount * 0.1) {
    // Add the movement
    currentAccount.movements.push(amount);
    // Update the UI
    updateUI(currentAccount);
  } else {
    alert('Invalid amount: Computer says no');
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  if (
    currentAccount.username === inputCloseUsername.value &&
    currentAccount.pin === Number(inputClosePin.value)
  ) {
    console.log('Close OK');
    // // Find account number
    // console.log(
    //   `Index position of current account: = ${accounts.indexOf(currentAccount)}`
    // );
    // FindIndex method
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // remove the account number from the array
    accounts.splice(accounts.indexOf(currentAccount), 1);
    // remove the account from the UI
    containerApp.style.opacity = 0;
    // Update welcome message
    labelWelcome.textContent = 'Account deleted successfully';
  } else {
    alert('Invalid username or pin');
  }
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

// createUsernames('accounts'); I spent time trying to debug the function. I had 'accounts'. This broke the app.

createUsernames(accounts);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
/////////////////////////////////////////////////
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
/*
let arr = [
  'duck',
  'cat',
  'dog',
  'mouse',
  'chicken',
  'goat',
  'cow',
  'bear',
  'moose',
  'monkey',
];

console.log(arr.slice(2, 4)); // ['dog', 'mouse'] (from 2 to 4 but excluding four)

console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice()); // for a shallow copy of the array
console.log([...arr]); // Same result, but different tool for a shallow copy of the array
console.log(arr);
console.log(arr.splice(2, 4)); // ['dog', 'mouse'] (from 2 to 4 but excluding four)
console.log(arr);

arr.splice(-1);
console.log(arr);

arr.splice(1, 2);

// Reverse the array
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['k', 'j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse()); // This modifies the original array
console.log(arr2);

// Concatenation
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);
console.log(letters.join(' '));

//The at method
console.log(letters[0]);
console.log(letters.at(0));
console.log(letters[4]);
console.log(letters.at(4));

console.log(arr[arr.length - 1]);
console.log(arrx.slice(-1));
console.log(arr.last());
*/

/////////////////////////////////////////////////

/*

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);




// for (const movement of movements) {
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Transaction ${i + 1}: ${movement} deposit.`);
  } else {
    console.log(`Transaction ${i + 1}: ${Math.abs(movement)} withdrawal.`);
  }
}
console.log('And now forEach...');
movements.forEach(function (movement, index, array) {
  if (movement > 0) {
    console.log(`Transaction ${index + 1}: ${movement} deposit.`);
  } else {
    console.log(`Transaction ${index + 1}: ${Math.abs(movement)} withdrawal.`);
  }
});
*/

// forEach with Maps and Sets
/*
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
  ['CHF', 'Swiss franc'],
]);
//Map
currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

//Set
const currenciesUnique = new Set(['USD', 'EUR', 'GBP', 'CHF']);
console.log(currenciesUnique);
currenciesUnique.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});
*/

/////////////////////////////////////////////////

/*
//Coding Challenge #1
// Data Set 1
const dogsJulia = [3, 5, 2, 12, 7];
const dogsKate = [4, 1, 15, 8, 3];

//Data Set 2
// const dogsJulia = [9, 16, 6, 8, 3];
// const dogsKate = [10, 5, 6, 1, 6];
//

const checkDogs = function (dogsJulia, dogsKate) {
  // Create an array with Julia's corrected data, shallow and constant
  const correcteDogsJulia = dogsJulia.slice(1, -2);
  // correcteDogsJulia.splice(0,1);
  // correcteDogsJulia.splice(-2);
  console.log(correcteDogsJulia);

  // Concatenate the two arrays
  const dogs = correcteDogsJulia.concat(dogsKate);
  console.log(dogs);
  for (const [i, dog] of dogs.entries()) {
    if (dog > 3) {
      console.log(`Dog number ${i + 1} is an adult and is ${dog} years old.`);
    } else {
      console.log(`Dog number ${i + 1} is still a puppy.`);
    }
  }
};

checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);


*/

/////////////////////////////////////////////////
/*
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUSD = 1.05;
const eurToCHF = 1.04;
const eurToGBP = 0.86;

const movementsUSD = movements.map(function (mov) {
  return mov * eurToUSD;
});
*/
// arrow challenge
// Remove function and replace it with an arrow, remove curly braces as this fits to one line and remove the return statement. When code is on one line it is automatically returned.
/*
const movementsUSDArrow = movements.map(mov => mov * eurToUSD);
console.log(`Arrow version: ${movementsUSDArrow}`);
console.log(movements);
console.log(movementsUSD);

const movementsCHF = movements.map(function (mov) {
  return mov * eurToCHF;
});
// Arrow practice
const movementsCHFArrow = movements.map(mov => mov * eurToCHF);
console.log(`Arrow version: ${movementsCHFArrow}`);
console.log(movementsCHF);

const movementsGBP = movements.map(function (mov) {
  return mov * eurToGBP;
});
// Arrow practice
const movementsGBParrow = movements.map(mov => mov * eurToGBP);
console.log(movementsGBP);
console.log(`Arrow version: ${movementsGBParrow}`);

// Compare this to the for method

const movementsCHFFor = [];
for (const mov of movements) movementsCHFFor.push(mov * eurToCHF);
console.log(movementsCHFFor);

const movDescs = movements.map(
  (mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
      mov
    )} euros.`
);

console.log(movDescs);
*/

/////////////////////////////////////////////////
/*
const deposits = movements.filter(function (mov) {
  return mov > 0;
});

const withdrawals = movements.filter(function (mov) {
  return mov < 0;
});

console.log(movements);
console.log(deposits);
console.log(withdrawals);

// And with the For loop
console.log('Using the for loop');
const depositsFor = [];
for (const mov of movements) if (mov > 0) depositsFor.push(mov);
console.log(depositsFor);

const withdrawalsFor = [];
for (const mov of movements) if (mov < 0) withdrawalsFor.push(mov);
console.log(withdrawalsFor);

// The Reduce Method

const balance = movements.reduce(function (acc, mov) {
  return acc + mov;
}, 0);
console.log(balance);
// Arrow version
const balanceArrow = movements.reduce((acc, mov) => acc + mov, 0);
console.log(balanceArrow);

let balanceAcc = 0;
for (const mov of movements) balanceAcc += mov;
console.log(`For Loop: ${balanceAcc}`);

//Maximum value

const max = movements.reduce((acc, mov) => {
  if (acc > mov) return acc;
  else return mov;
}, movements[0]);
console.log(max);
*/
/////////////////////////////////////////////////
////// Challenge 2 Attempt //////////////////////
/////////////////////////////////////////////////

/*
console.log(data);
console.log(data2);

const calcAverageHumanAge = function (ages) {
  
  for (const [dogAge] of dogAges.entries()) {
    if (dogAge <= 2) {
      humanAge.push(2 * dogAge);
    } else if (dogAge > 2) {
      humanAge.push(16 + dogAge * 4);
    }
  }
  */
/*
  const humanAges = ages.map(age => (age <= 2 ? 
    2 * age : 
    16 + age * 4));
  console.log(humanAges);
};

console.log(calcAverageHumanAge(5, 2, 4, 1, 15, 8, 3));
console.log('couac couac');
*/

// Course solution:
/*

const calcAverageHumanAge = function (ages) {
  const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
  console.log(humanAges);
  const adultDogs = humanAges.filter(age => age >= 18);
  console.log(`Adult Dogs: ${adultDogs}`);
  // const TotAdultAge = adultDogs.reduce(function (acc, age) {
  //   return acc + age;
  // }, 0);
  // As an arrow function
  const average =
    adultDogs.reduce((acc, age) => acc + age, 0) / adultDogs.length;
  return average;
  // // Solution 3
  // const average =
  //   adultDogs.reduce((acc, age, i, arr) => acc + age, 0) / arr.length;
  // return average;
};

console.log(avg1, avg2);
*/

/////////////////////////////////////////////////
/*
const eurToUSD = 1.1;
const TotDepUSD = movements
  .filter(mov => mov > 0)
  // .map(mov => mov * eurToUSD)
  //For debugging we can look at the array using this method
  .map((mov, i, arr) => {
    console.log(arr);
  })
  .reduce((acc, mov) => acc + mov, 0);
console.log(TotDepUSD);
*/

/////////////////////////////////////////////////
// Coding Challenge 3 - chaining
/*
const data = [5, 2, 4, 1, 15, 8, 3];
const data2 = [16, 6, 10, 5, 6, 1, 4];

const calcAverageHumanAge = ages => {
  const humanAges = ages
    .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter(age => age >= 18);
  const average =
    humanAges.reduce((acc, age, i, arr) => acc + age, 0) / arr.length;
  return average, humanAges;
};
*/

// Course solution - I still need to practice chaining
/*
const calcAverageHumanAge = ages =>
  ages
    .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter(age => age >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);

// To chain the events we run each function in a chain, without going through the step of creating a variable. We map the ages according the reqquirements, then filter the ages to keep just the dogs of the right age, and when this is done we work out the average age of the dogs via the reduce method.
// We go from having three or four functions to one function and cut out the middle constants.

const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

console.log(avg1, avg2);
*/

/////////////////////////////////////////////////
// The Find method
/*
const firstWithdrawal = movements.find(mov => mov < 0);
console.log(firstWithdrawal);
console.log(movements);

console.log(accounts);

const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);
*/

/////////////////////////////////////////////////
//// Implement the login ///////////////////////
/////////////////////////////////////////////////

/////////////////////////////////////////////////
////////////// Some and Very ////////////////////
/////////////////////////////////////////////////
/*
console.log(movements);
console.log(movements.includes(200));

// Conditional statements: Some
console.log(movements.some(mov => mov === 840));

const findDeposits = movements.some(mov => mov > 6000);
const findWithdrawals = movements.some(mov => mov < -12);
console.log(findDeposits, findWithdrawals);

// The Every method - returns true if all the elements in the array pass the test implemented by the provided function.

console.log(movements.every(mov => mov > 0));
console.log(accounts4.movements.every(mov => mov > 0));

// Seperate callback

const deposit = mov => mov > 0;
const withdrawal = mov => mov < 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));
console.log(movements.some(withdrawal));
*/

/////////////////////////////////////////////////
//Working with Nested arrays via flat and flatMap
/////////////////////////////////////////////////
/*
const arr = [1, 2, 3, [4, 5, 6], [7, 8, 9]];
console.log(arr.flat());

const arrDeep = [[[1, 2], 3], [4, [[5]], 6], 7, 8, 9];
console.log(arrDeep.flat(2));

const accountMovements = accounts.map(acc => acc.movements);
console.log(accountMovements);
const allMovements = accountMovements.flat();
console.log(allMovements);

const overallBalance = allMovements.reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance);

// Chain all the methods together

const overallBalanceChain = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);
console.log(overallBalanceChain);

// How to use FlatMap
const overallBalanceFlatMap = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);
console.log(overallBalanceFlatMap);
*/
/////////////////////////////////////////////////
////////////// Sorting Arrays ///////////////////
/////////////////////////////////////////////////
/*
const people = ['Richard', 'Jean', 'Paul', 'Marie', 'Jeanne'];
console.log(people);
console.log(people.sort());
console.log(people); // It has been mutated

// Sort works with strings

// Working with Numbers

// Change the order of the list by inverting which value is 1 and which is -1

const sortedNumbers = movements.sort((a, b) => {
  if (a > b) return 1;
  if (a < b) return -1;
  return 0;
});
console.log(sortedNumbers);

// Short hand version

movements.sort((a, b) => a - b);
console.log(`Shorthand sort: ${movements}`);
*/
/////////////////////////////////////////////////
/*
// Ways to create and fill arrays
const arr = [1, 2, 3, 4, 5, 6, 7];

const x = Array(10);
console.log(x); // [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined] Empty * 10

const y = new Array(7);
console.log(y); // [undefined, undefined, undefined, undefined, undefined, undefined, undefined] //Empty * 7

// The Fill method
x.fill(1, 3);
console.log(x); // [undefined, undefined, undefined, 1, 1, 1, undefined, undefined, undefined, undefined]

arr.fill(23, 4, 6);
console.log(arr); // [1, 2, 3, 4, 23, 23, 23]

const r = Array.from({ length: 10 }, () => 1);
console.log(r); // [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]

const card = Array.from({ length: 12 }, (_, i) => i + 1);
console.log(card); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
// useful for solitaire games

// How to read numbers from a page element
labelBalance.addEventListener('click', () => {
  const movementsUI = Array.from(
    document.querySelectorAll('.movements__value'),
    el => el.textContent.replace('€', '')
  );
  console.log(movementsUI);

  // The second option is to use the map method and then expand the array
  const movementsUI2 = [...document.querySelectorAll('.movements__value')].map(
    el => el.textContent.replace('€', '')
  );

  console.log(movementsUI2);
});
*/
/////////////////////////////////////////////////
/*
// 1.
// To get the sum of all deposits to all accounts

const bankDepositSum = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 0)
  .reduce((acc, mov) => acc + mov, 0);

console.log(bankDepositSum);

// To get the sum of all withdrawals to all accounts

const bankWithdrawalSum = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov < 0)
  .reduce((acc, mov) => acc + mov, 0);

console.log(bankWithdrawalSum);

// 2.
const numDeposits1000 = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 1000).length;

console.log(`The number of deposits greater than 1000 is ${numDeposits1000}`);

const numDeposits200 = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 200).length;

console.log(`The number of deposits greater than 200 is ${numDeposits200}`);

// Same as above but using the reduce method

const numDeposits500 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => (mov >= 500 ? acc + 1 : acc), 0);

console.log(`The number of deposits greater than 500 is ${numDeposits500}`);

let a = 19;

// console.log(a++); // 19 because the value of a is 19 before the increment
console.log(a); // 20 because the value of a is 20 after the increment
console.log(++a); // 20 because the value of a is 21 before the increment
// That's why we can't use a++ as shorthand in the example above.
*/
/////////////////////////////////////////////////
/*
// const sums = accounts
const { deposits, withdrawals } = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sums, cur) => {
      //   cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
      // Bracket notation version below
      sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur;
      return sums;
    },
    { deposits: 0, withdrawals: 0 }
  );

// console.log(sums);
console.log(deposits, withdrawals);

// 4. Playing with Capitalisation
const convertTitleCase = function (title) {
  const capitalise = str => str[0].toUpperCase() + str.slice(1);
  const exceptions = ['of', 'the', 'and', 'in', 'for', 'to', 'a', 'an'];

  const titleCase = title
    .toLowerCase()
    .split(' ')
    //Copilot version of code below
    // .map((word, i) => {
    //   if (exceptions.includes(word)) return word;
    //   return word[0].toUpperCase() + word.slice(1);
    // Course version
    .map(word => (exceptions.includes(word) ? word : capitalise(word)))
    .join(' ');
  return capitalise(titleCase);
};

console.log(convertTitleCase('A curIous FoX aTe a pLAnE'));
console.log(
  convertTitleCase(
    'it was once normal to write without punctuation or capitalisation so good luck with this phrase did you run into a frog cycling on a bike'
  )
);
console.log(convertTitleCase("Ceçi n'est pas un titre"));
*/
/////////////////////////////////////////////////

// Coding Challenge #4

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

// 1. 1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
// My code
// dogs.forEach(dog => (dog.recommendedFood = dog.weight ** 0.75 * 28));

// Course version Math.trunc was added to remove the decimals
// dogs.forEach(
//   dog => (dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28))
// );
dogs.forEach(dog => (dog.recFood = Math.trunc(dog.weight ** 0.75 * 28)));

// 2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓

const sarahDog = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(
  `Sarah's dog currently eats ${
    sarahDog.curFood > sarahDog.recFood ? 'more' : 'less'
  } than recommended.`
);
/* 
// 3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
// This is buggy. I need to isolate the issue.
console.log(dogs);
const ownersEatTooMuch = dogs
  .filter(dog => dog.curfood > dog.recommendedFood) // This is the buggy line
  .flatMap(dog => dog.owners);
// .filter((owner, i, arr) => arr.indexOf(owner) === i);
console.log(ownersEatTooMuch); // It still gives me an empty set.

const ownersEatTooLittle = dogs
  .filter(dog => dog.curfood < dog.recommendedFood)
  .flatMap(dog => dog.owners);
console.log(ownersEatTooLittle);
*/
const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood > dog.recFood)
  .flatMap(dog => dog.owners);
console.log(ownersEatTooMuch);

const ownersEatTooLittle = dogs
  .filter(dog => dog.curFood < dog.recFood)
  .flatMap(dog => dog.owners);
console.log(ownersEatTooLittle);

// 4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"

// Need to fix the bug in four first.

console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`); // Names are not displayed
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`); //names are not displayed

// 5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)

const exactFood = dogs.some(dog => dog.curFood === dog.recFood);
console.log(exactFood); // false

// 6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false) (+/- 10%)
// If current food is less than ten percent more || less than ten percent too much then it is okay : Else it is not okay
// Attempt 1.
// const okayFood = dogs.some(
//   dog =>
//     dog.curfood > dog.recommendedFood - 10 ||
//     dog.curfood < dog.recommendedFood + 10
// );
// console.log(okayFood); // true

// Attempt 2.
// const okayFood = function () {
//   if (
//     dog.curFood > dog.recommendedFood * 0.9 &&
//     current < dog.recommendedFood * 1.1
//   );
//   return true;
// };
// Attempt 3
// const okayFood = function () {
//   if (
//     dog.curFood > dog.recommendedFood * 0.9 &&
//     dog.curFood < dog.recommendedFood * 1.1
//   ) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// };
// console.log(okayFood(dogs)); // true

// Course solution

const okayFood = dog =>
  dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1;

console.log(dogs.some(okayFood)); // true

// 7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)

const okayFoodDogs = dogs.filter(okayFood).flatMap(dog => dog.owners);
console.log(okayFoodDogs);

// 8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)

const sortedDogs = dogs.slice().sort((a, b) => a.recFood - b.recFood);
console.log(sortedDogs);

/////////////////////////////////////////////////
//// Practice /////

const matildaDog = dogs.find(dog => dog.owners.includes('Matilda'));
console.log(
  `Matilda's dog currently eats ${
    matildaDog.curfood > matildaDog.recommendedFood ? 'more' : 'less'
  } than recommended.`
);

const aliceDog = dogs.find(dog => dog.owners.includes('Alice'));
console.log(
  `Alice's dog currently eats ${
    aliceDog.curFood > aliceDog.recommendedFood ? 'more' : 'less'
  } than recommended.`
);

/* 
Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).

HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

GOOD LUCK 😀
*/

/*
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];
*/

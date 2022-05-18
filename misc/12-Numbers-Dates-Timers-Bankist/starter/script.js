'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
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

/////////////////////////////////////////////////
// Functions

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__value">${mov.toFixed(2)}€</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance.toFixed(2)}€`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes.toFixed(2)}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out.toFixed(2))}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest.toFixed(2)}€`;
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
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc.movements);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

///////////////////////////////////////
// Event handlers
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === +inputLoginPin.value) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = +inputTransferAmount.value;
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    currentAccount.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    +inputClosePin.value === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

///// Most of this should be revision for me ////

console.log('hello world');

console.log(0.1 + 0.2);
// console.log(0.1 + 02 === 0.3);

// Parsing numbers
console.log(Number.parseInt('30px', 10));
console.log(Number.parseInt('30px', 2)); // This would see if the number works as base 2
console.log(Number.parseInt('e23', 10)); // Not recognised as a Number

// We can also use isInteger
console.log(Number.isInteger(23)); //true
console.log(Number.isInteger(23.63)); //false
console.log(Number.isInteger(23 / 0)); //false
// We can also use parseFloat for floating numbers
console.log(Number.parseFloat('3.14rem'));
console.log(Number.parseInt('3.14rem'));

console.log(Number.isNaN(30)); //This can be used with forms to check whether a number has been entered.
console.log(Number.isNaN('The Quick Brown Fox Jumped Over the Lazy Dog.'));
console.log(Number.isNaN(+'23X'));

// To check if a number is a number we can use:
console.log(Number.isFinite(37));
console.log(Number.isFinite('37'));

console.log(Math.sqrt(25));
console.log(25 ** (1 / 2));

console.log(Math.max(6, 9, 1, 1, 2, 3));
console.log(Math.max(5, 18, '23', 11, 23));
console.log(Math.max(5, 18, '23px', 11, 23));

// We can use min for minimum number

console.log(Math.pi * Number.parseFloat('10px') ** 2); //to square the result

console.log(Math.trunc(Math.random() * 6) + 1);

const randomInt = (min, max) =>
  Math.trunc(Math.random() * (max - min) + 1) + min;

console.log(randomInt(5, 30));

// we can also use trunc, ceil, floor
// Rounding Floating numbers
console.log((3.14).toFixed(0));
console.log((3.14).toFixed(2));
console.log((3.8786).toFixed(2));
console.log((3.8786).toFixed(3));

// The Modulo operator

console.log(5 % 2);

console.log(8 % 3);

const isEven = n => n % 2 === 0;
const isOdd = n => n % 2 === 1;

console.log(isEven(12));
console.log(isEven(368));
console.log(isEven(51));
console.log(isEven(5674));
console.log(isEven(12674));
console.log(isEven(0));
console.log('is odd');
console.log(isOdd(12));
console.log(isOdd(368));
console.log(isOdd(51));
console.log(isOdd(5674));
console.log(isOdd(12674));
console.log(isOdd(0));

labelBalance.addEventListener('click', function () {
  [...document.querySelectorAll('.movements__row')].forEach(function (row, i) {
    if (i % 2 === 0) row.style.backgroundColor = 'lightgrey';
    // We are not limited to Odd or Even, we have more flexibility
    if (i % 3 === 0) row.style.backgroundColor = 'lightblue';
  });
});

// Numeric seperators for easy reading
const diameter = 287_460_000_000;
console.log(diameter); //numeric seperators are ignored

const priceCentimes = 369_11;
console.log(priceCentimes);

const fee = 15_00;
const time = 15_00;

const PI = 3.14_15;
console.log(PI);

// bigInt

console.log(2 ** 53 - 0);
console.log(Number.MAX_SAFE_INTEGER);

// Using n turns a number into a bigInt
console.log(45646123158498465131654984531);
console.log(45646123158498465131654984531n);
console.log(BigInt(45646123158498465131654984531));

// Operations
console.log(10000n + 10000n);

console.log(654651651565465112335454848465316n * 5152266565466262n);

const huge = 9845616515651464598413254654n;
const num = 23;

// console.log(huge * num);

//you need to use:
console.log(huge * BigInt(num));

// 20n and 20 have a different type so will not be true if ===

console.log(typeof 20n); //BigInt

//Divisions
console.log(10n / 3n);

console.log(10 / 3);

// Dates and Times revision and consolidation

// Option 1
const now = new Date();
console.log(now);

//Parse the date from a string
console.log(new Date('Wed May 18 2022 17:09:51'));

console.log(new Date('6 June 1944 06:00:52'));

// Retrieving date information from an array
console.log(new Date(account1.movementsDates[3]));

console.log(`Birth of Unix Time: ${new Date(0)}`);

// Play with date data
const history = new Date(300, 10, 19, 15, 23, 5);
console.log(history);
console.log(history.getFullYear());
console.log(history.getMonth());
console.log(history.getDate());
console.log(history.getDay());
console.log(history.getHours());
console.log(history.getMinutes());
console.log(history.getSeconds());
console.log(history.getTime());
console.log(history.toISOString());

// If we use set rather than get we can modify the data.
history.setFullYear(2040);
console.log(history);

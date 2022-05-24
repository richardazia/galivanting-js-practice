'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function(e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

/////////////////////////////////////////////////
//Scrolling

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function(e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  console.log(e.target.getBoundingClientRect);

  console.log('current scroll (X/Y)', window.pageXOffset, pageYOffset);

  console.log(
    'height/width viewport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );
  // Scrolling
  /*
  window.scrollTo(
    s1coords.left + window.pageXOffset,
    s1coords.top + window.pageYOffset
  );
  */
  /*
  window.scrollTo({
    left: s1coords.left + window.pageXOffset,
    top: s1coords.top + window.pageYOffset,
    behavior: 'smooth'
  });
  */
  // section1.scrollIntoView({ behavior: smooth });
});
/////////////////////////////////////////////////
// Page Navigation

// The inefficicent way
// document.querySelectorAll('.nav__link').forEach(function(el) {
//   el.addEventListener('click', function(e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     console.log(id);
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

// 1. Add event listener to common parent element.
document.querySelector('.nav__links').addEventListener('click', function(e) {
  e.preventDefault();
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});
// 2. Who made the request

// 3.

// Tabbed components
const tabs = document.querySelectorAll('.operations__tab');

const tabsContainer = document.querySelector('.operations__tab-container');

const tabsContent = document.querySelectorAll('._operations__content');

// Optional solution - this option is a "bad practice"

// tabs.forEach(t => t.addEventListener('click', () => console.log('TAB')));

// Use event delegation instead

tabsContainer.addEventListener('click', function(e) {
  const clicked = e.target.closest('.operations__tab');
  // const clicked = e.target; // If we click on the numbers we get the span element
  // const clicked = e.target.parentElement; // also does not work as it selects the parent element one layer too highligh
  // Guard clause
  if (!clicked) return;

  //Remove Active classes
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));

  // Make tab active
  clicked.classList.add('operations__tab--active');

  // Active tab content
  console.log(clicked.dataset.tab);
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

/////////////////////////////////////////////////

// Lesson 186
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
console.log(allSections);

document.getElementById('section--1');

const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

console.log(document.getElementsByClassName('btn'));

// Creating and inserting Elements
//.insertAdjacentHTML

const message = document.createElement('div');
message.classList.add('cookie-message');
message.textContent =
  'We use cookies for improved functionality and analytics.';
message.innerHTML =
  'We use cookies for improved functionality and analytics. <button class="btn-btn--close-cookie">Got It!</button>';

header.prepend(message);
// header.append(message);
// header.append(message.cloneNode(true));
header.before(message);
header.after(message);

// Deleting Elements
document
  .querySelector('.btn-btn--close-cookie')
  .addEventListener('click', function() {
    // message.remove();
    message.parentElement.removeChild(message);
  });

/////////////////////////////////////////////////

//lesson 187
//styles

message.style.backgroundColor = '#37383d';
message.style.width = '120%';
console.log(message.style.height); // only works for styles we set ourselves in line.
console.log((message.style.backgroundColor = '#37383d'));

console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px'; // [Violation] 'setTimeout' handler took 147ms

document.documentElement.style.setProperty('--color-primary', 'orangered');

// Attributes
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.className);
console.log(logo.src);
console.log(logo.getAttribute('src'));
logo.alt = 'Stupendous, stunning, minimalist logo';

// Non Standard fields
console.log(logo.designer); // will not work
console.log(logo.getAttribute('designer')); // will work

logo.setAttribute('company', 'Bankist');

const link = document.querySelector('.nav__link--btn');
console.log(link.href);
console.log(link.getAttribute('href'));

// Data Attributes

console.log(logo.dataset.versionNumber);

// Classes - The four we need to remember
logo.classList.add('hello');
logo.classList.remove('bye');
logo.classList.toggle('active');
logo.classList.contains('ogl');

/////////////////////////////////////////////////
// Events and Event Handlers
const h1 = document.querySelector('h1');
h1.addEventListener('mouseenter', function(e) {
  console.log('addEventListener: This is the header');
});
h1.onmouseenter = function(e) {
  console.log('I am the old method: onmouseenter');
};

const logH1 = function(e) {
  console.log("Ceçi n'est pas un H1");

  h1.removeEventListener('mouseenter', logH1);
};

h1.addEventListener('mouseenter', logH1);

setTimeout(() => h1.removeEventListener('mouseenter', logH1), 3000);

//Bubbling and capturing
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const randomColor = () =>
  `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;
console.log(randomColor(0, 255));

document.querySelector('.nav__link').addEventListener('click', function(e) {
  this.style.backgroundColor = randomColor();
  console.log('link', e.target, e.currentTarget);
  console.log(e.currentTarget === this);

  // To stop propagation up to parents
  // e.stopPropagation();
});

document.querySelector('.nav__links').addEventListener('click', function(e) {
  this.style.backgroundColor = randomColor();
  console.log('container', e.target, e.currentTarget);
  console.log(e.currentTarget === this);
});

document.querySelector('.nav').addEventListener(
  'click',
  function(e) {
    this.style.backgroundColor = randomColor();
    console.log('navbar', e.target, e.currentTarget);
    console.log(e.currentTarget === this);
  },
  true
);
/*
Capturing
When an event occurs it is captured it descends from the document to the anchor or other element.
Bubbling
As in scuba diving when an event has taken place, for example a click on a hyperlink it is released and bubbles back to the surface through the different elements until it reaches the document.
*/

//Event Delegation - Smooth Scrolling

//Look up

// DOM traversing
// Downwards
console.log(h1.querySelector('.highlight'));

console.log(h1.childNodes);
console.log(h1.children);
console.log((h1.firstElementChild.style.color = 'white'));
console.log((h1.lastElementChild.style.color = 'orange'));

//Going up
console.log(h1.parentNode);
console.log(h1.parentElement);

h1.closest('.header').style.background = 'var(--gradient-secondary)';

h1.closest('h1').style.background = 'var(--gradient-primary)';

// Sibling selection - Sideways

console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.previousSibling);
console.log(h1.nextSibling);

console.log(h1.parentElement.children);

[...h1.parentElement.children].forEach(function(el) {
  if (el !== h1) el.style.transform = 'scale(0.5)';
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////

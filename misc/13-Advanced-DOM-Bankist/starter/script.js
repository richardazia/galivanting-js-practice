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

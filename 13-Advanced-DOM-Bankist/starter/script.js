'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(open => open.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

/////////////////////////////////////
/////////////////////////////////////
/////////////////////////////////////

//selecting element
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
console.log(allSections);

document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button'); //update element automatically when delete
console.log(allButtons);

console.log(document.getElementsByClassName('btn'));

// Creating and inserting element
// .insertAdjacentHTML

const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent = 'We use cookied for improved functionality and analytics';
message.innerHTML =
  'We use cookied for improved functionality and analytics.<button class="btn btn--close-cookie"> Got it ! </button>';

// header.prepend(message); //prepend: first child element
header.append(message); //append: last child element
// header.append(message.cloneNode(true));

// header.before(message);
// header.after(message);

// Delete elements
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove();
    // message.parentElement.removeChild(message);  //old way
  });

// STYLES
message.style.backgroundColor = '#37383d';
message.style.width = '90%';

console.log(message.style.height);
console.log(message.style.backgroundColor); //get inline style

console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height) + 30 + 'px';

document.documentElement.style.setProperty('--color-primary', 'orangered');

// ATTRIBUTES
const logo = document.querySelector('.nav__logo');
console.log(logo.src);
console.log(logo.alt);
console.log(logo.className);

logo.alt = 'Beautiful minimalist logo';

// Non-standard
console.log(logo.designer);
console.log(logo.getAttribute('designer'));
logo.setAttribute('company', 'Bankist');

console.log(logo.getAttribute('src'));

const link = document.querySelector('.nav__link--btn');
console.log(link.href);
console.log(link.getAttribute('href'));

// Data attributes
console.log(logo.dataset.versionNum);

// Classes
logo.classList.add('c', 'j');
logo.classList.remove('c', 'j');
logo.classList.toggle('c');
logo.classList.contains('c');

// Don't use
logo.className = 'jonas';

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);
  console.log(e.target.getBoundingClientRect()); //target: button clicked
  console.log('Current scroll (X/Y)', window.pageXOffset, pageYOffset);

  console.log(
    'Height/width viewport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  //Scrolling
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset, //+ current scroll
  //   s1coords.top + window.pageYOffset
  // );

  ///// old way
  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset, //+ current scroll
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  ///// modern way
  section1.scrollIntoView({
    behavior: 'smooth',
  });
});

const h1 = document.querySelector('h1');

const alertH1 = function (e) {
  //mouse hover
  alert('addEventListener: Great! You are reading the heading :D');
  h1.removeEventListener('mouseenter', alertH1);
};

h1.addEventListener('mouseenter', alertH1);

setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000); //remove eventlistener after 3 seconds

/////old way
// h1.onmouseenter = function (e) {
//   //mouse hover
//   alert('addEventListener: Great! You are reading the heading :D');
// };
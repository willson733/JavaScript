'use strict';

/*
const bookings = [];
const creatBooking = function (
  numFlight,
  numPassanger = 1,
  price = 99 * numPassanger
) {
  // ES5
  //   numPassanger = numPassanger || 1;
  //   price = price || 99;
  const booking = {
    numFlight,
    numPassanger,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};
creatBooking('LH123');
creatBooking('LH123', 4);
creatBooking('LH123', undefined, 2);
*/

/*
// ----------How passing argument works value vs reference---------------
const flight = 'LH234';
const willson = {
  name: 'Willson Ghimire',
  passport: 24545465,
};

const checkIN = function (flightNum, passanger) {
  flightNum = 'LH999';
  passanger.name = 'Mr.' + passanger.name;
  if (passanger.passport === 24545465) {
    alert('Checked in');
  } else {
    alert('Wrong passport');
  }
};
// checkIN(flight, willson);
// console.log(flight);
// console.log(willson);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 334455);
};
newPassport(willson);
checkIN(flight, willson);
console.log(flight);
console.log(willson);
*/

// Function accepting callback function

const oneword = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};
const upperFirstWord = function (str) {
  const [first, ...other] = str.split(' ');
  return [first.toUpperCase(), ...other].join(' ');
};
// Higher order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string:${fn(str)}`);
  console.log(`Transformed by:${fn.name}`);
};

transformer('JavaScript is Best!.', upperFirstWord);
transformer('JavaScript is the best!.', oneword);

const high5 = function () {
  console.log('👋');
};
document.body.addEventListener('click', high5);
['willson', 'ghimire', 'dharam'].forEach(high5);

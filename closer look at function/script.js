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
/*
//---------- Function accepting callback function----------------

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
*/

/*
// -----------Function returning function------------
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};
const greeterHey = greet('hey');
greeterHey('willson');

greet('hey')('willson');

// challange using arrow function
const greetArr = greeting => name => console.log(`${greeting} ${name}`);
greetArr('hey')('willson');
*/

// -------------The call, apply and bind methods-----

const lufthansa = {
  airlines: 'Lufthansa',
  iataCode: 'LH',
  booking: [],
  book(flightNumber, name) {
    console.log(
      `${name} booked a seat on ${this.airlines} flight ${this.iataCode}${flightNumber}`
    );
    this.booking.push({ flight: `${this.iataCode}${flightNumber}`, name });
  },
};

lufthansa.book(23, 'willson ghimire');
lufthansa.book(223, 'Jonas smith');
console.log(lufthansa);

const yetiAirlines = {
  airlines: 'Yeti Airlines',
  iataCode: 'LH',

  booking: [],
};
const book = lufthansa.book;

// call method
book.call(yetiAirlines, 332, 'Mary cooper');
console.log(yetiAirlines);

const buddhaAirlines = {
  airlines: 'Buddha Airlines',
  iataCode: 'BL',
  booking: [],
};
book.call(buddhaAirlines, 566, 'william joe');
console.log(buddhaAirlines);

// apply method
// apply method pass array
const flightsData = [344, 'james sor'];
book.apply(buddhaAirlines, flightsData);

book.call(buddhaAirlines, ...flightsData);

// bind method

const bookYA = book.bind(yetiAirlines);
bookYA(33, 'joe smith');

const bookYA23 = book.bind(yetiAirlines, 23);
bookYA23('joe smith');

// with eventlistner
lufthansa.planes = 300;
lufthansa.buyplane = function () {
  this.planes++;
  console.log(this.planes);
};

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyplane.bind(lufthansa));

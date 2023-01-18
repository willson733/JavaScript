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

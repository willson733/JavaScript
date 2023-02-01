"use strict";

// constructor function and the new operator

// Instance property
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const willson = new Person("willson", 2000);
console.log(willson);

// 1.New { } is created
// 2.function is called, this={}
// 3.{ } Linked to prototype
// 4.function automatically return {}

const matilda = new Person("Matilda", 1999);
const jack = new Person("Jack", 1988);
console.log(matilda, jack);

console.log(willson instanceof Person);

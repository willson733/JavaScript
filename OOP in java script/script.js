"use strict";

/*
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

// Prototypes
Person.prototype.calcAge = function () {
  console.log(2023 - this.birthYear);
};
willson.calcAge();
matilda.calcAge();

console.log(willson.__proto__);

console.log(Person.prototype.isPrototypeOf(willson));
console.log(Person.prototype.isPrototypeOf(matilda));
console.log(Person.prototype.isPrototypeOf(Person));

// PrototypeOfLinkedObject

Person.prototype.species = "Homo sapiens";
console.log(willson.species, matilda.species);

console.log(willson.hasOwnProperty("firstName"));
console.log(willson.hasOwnProperty("species"));
*/

// ---------coding challange 1 --------
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

const bmw = new Car("BMW", 120);
const mercedes = new Car("Mercedes", 95);

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/hr`);
};
Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/hr`);
};

bmw.accelerate();
bmw.accelerate();
bmw.brake();
bmw.brake();

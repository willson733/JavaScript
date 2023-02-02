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

/*
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

*/

/*
// ES6 class
// class expression
// const PersonCl=class(){}

// class deceleration
class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
  calcAge() {
    console.log(2023 - this.birthYear);
  }
  greet() {
    console.log(`hey ${this.firstName}`);
  }

  // static method
  static hey() {
    console.log(`hey there`);
  }
}

const willson = new PersonCl("willson", 2000);
console.log(willson);
willson.calcAge();

// PersonCl.prototype.greet = function () {
//   console.log(` Hey ${this.firstName}`);
// };
willson.greet();

// 1.Classes are NOT hoisted
// 2.Classes are first-class citizes
// 3.Classes are executed in strict mode
PersonCl.hey();
*/

/*
// Object created

const PersonProto = {
  calcAge() {
    console.log(2023 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const willson = Object.create(PersonProto);
willson.firstName = "willson";
willson.birthYear = 2000;
willson.calcAge();

console.log(willson.__proto__);

const saraha = Object.create(PersonProto);
saraha.init("saraha", 2002);
saraha.calcAge();
*/

// --------coding challange 2 ----------

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/hr`);
  }
  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/hr`);
  }
  get speedUS() {
    return this.speed / 1.6;
  }
  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const ford = new CarCl("Ford", 120);
console.log(ford.speedUS);
ford.accelerate();
ford.speedUS = 50;
console.log(ford);

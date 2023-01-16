'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  orderDelevery: function ({
    starterIndex = 0,
    time = `1:20`,
    mainIndex = 0,
    address = 'dharan',
  }) {
    console.log(
      `order ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} received at ${address} at time ${time}`
    );
  },
  orderPizza: function (ing1, ing2, ing3) {
    console.log(`Here is your pizza with ${ing1}, ${ing2} and ${ing3}`);
  },
  orderPasta: function (mainIndregient, ...others) {
    console.log(mainIndregient, others);
  },
};

/*
// destructuring array
let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

console.log(restaurant.order(2, 0));

const nested = [4, 5, [6, 7]];
const [first, , third] = nested;
console.log(first, third);
const [i, , [j, k]] = nested;
console.log(i, j, k);
*/

/*
// Destructuring object
const { name, openingHours, starterMenu } = restaurant;
console.log(name, openingHours, starterMenu);

const {
  name: restaurantName,
  openingHours: hours,
  starterMenu: starter,
} = restaurant;
console.log(restaurantName, hours, starter);

// default value
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables
let a = 3;
let b = 5;
const obj = { a: 33, b: 44, c: 22 };
({ a, b } = obj);
console.log(a, b);

// Nested abject
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

// function call
restaurant.orderDelevery({
  time: `20:20`,
  address: `Dharan`,
  starterIndex: 2,
  mainIndex: 1,
});
restaurant.orderDelevery({
  address: 'Ithari',
});
*/

/*
// Spread operator
const arr = [2, 4, 5, 7];
const badNewArr = [1, 3, arr[0], arr[1], arr[2], arr[3]];
console.log(badNewArr);
const newArr = [1, 3, ...arr];
console.log(newArr);
console.log(...newArr);

// Copy array
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

// Join two array
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

// Iterable:Array,string,set,map:not Object

const str = 'willson';
const letter = [...str, 'g'];
console.log(letter);
console.log(...str);

// real-world example
const ingredient = [
  prompt(`let's make your 1st ingrident`),
  prompt(`let's make your 2nd ingredient`),
  prompt(`let's make your 3rd ingrident`),
];
restaurant.orderPizza(...ingredient);

// Object
const newRestaurant = { foundedIn: 2000, ...restaurant, founder: 'willson' };
console.log(newRestaurant);
const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'chill restro';
console.log(restaurant.name);
console.log(restaurantCopy.name);
*/

// Rest pattern and parameter

// Spread because on right side of =
const arr = [2, 4, ...[5, 6]];

// Rest because on lef side of =
const [a, b, ...others] = [1, 2, 4, 5, 6, 8];
console.log(a, b, others);

const [Focaccia, Bruschetta, ...otherfood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(Focaccia, Bruschetta, otherfood);

// object
const { sat, ...weekday } = restaurant.openingHours;
console.log(weekday);

// Function

const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};
add(2, 5);
add(3, 4, 5, 6, 3);
add(3, 5, 7, 9);

const x = [3, 4, 5];
add(...x);

restaurant.orderPasta('onion', 'oliva', 'cheese');

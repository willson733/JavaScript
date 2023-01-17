'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 enhanced object literals
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
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

/*
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
*/

/*
// Short circuting
console.log('------AND----');
console.log(3 || 'willson');
console.log('' || 'willson');
console.log(undefined || 3);
console.log(undefined || null);
console.log(undefined || '' || 0 || 'true' || null);

restaurant.guest = 10;
const guest1 = restaurant.guest ? restaurant.guest : 20;
console.log(guest1);

const guest2 = restaurant.guest || 20;
console.log(guest2);

console.log('----OR----');
console.log(3 && 0);
console.log('willson' && 'ghimire');

// practical example
if (restaurant.orderPasta) {
  restaurant.orderPasta('mushroom', 'onion');
}
restaurant.orderPasta && restaurant.orderPasta('mushroom', 'onion');

// Nullish: null or undefined but not (0 and '')
restaurant.guest = 0;
const guest3 = restaurant.guest ? restaurant.guest : 20;
const guest4 = restaurant.guest ?? 20;
console.log(guest3);
console.log(guest4);
*/

/*

const res1 = {
  name: 'chill restro',
  // numGuest: 20,
  numGuest: 0,
};
const res2 = {
  name: 'grill restro',
  owenerName: 'willson',
};
// OR assignment operator
// res1.numGuest = res1.numGuest || 10;
// res2.numGuest = res2.numGuest || 10;

// res1.numGuest ||= 10;
// res2.numGuest ||= 10;

// Nullish assignment operator (null and undefined)
res1.numGuest ??= 10;
res2.numGuest ??= 10;

console.log(res1);
console.log(res2);

// AND assignment operator
res1.owenerName &&= `<ANANYMOUS>`;
res2.owenerName &&= `<ANANYMOUS>`;
console.log(res1);
console.log(res2);
*/

/*
// --------------- coding challange-----------

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const [players1, players2] = game.players;
console.log(players1, players2);

const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

const allPlayers = [...players1, ...players2];
console.log(allPlayers);

const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

const printGoals = function (...players) {
  console.log(`${players.length} goals was scored`);
};

printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals(...game.scored);

team1 < team2 && console.log(`team 1 is more likely to win`);
team1 > team2 && console.log(`team 2 is more likely to win`);
*/

/*
// for of loop

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (const index of menu) console.log(index);

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}:${el}`);
}
 */

/*
// Optional chaining

if (restaurant.openingHours && restaurant.openingHours.mon) {
  console.log(restaurant.openingHours.mon.open);
}

// with optional chainig
console.log(restaurant.openingHours?.mon?.open);
console.log(restaurant.openingHours?.thu?.open);

const days = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day} we open at ${open}`);
}

// Methods

console.log(restaurant.order?.(2, 0) ?? 'Methods doesnot exist');
console.log(restaurant.orderrestro?.(2, 0) ?? 'Methods doesnot exist');

// Array
const user = [
  { name: 'willson', email: 'willsonghimire58@gmail.com', address: 'dharan' },
];
console.log(user[0]?.name ?? 'user array empty');
*/

/*
// Looping object object keys values and Entires

// Property name
const properties = Object.keys(openingHours);
console.log(properties);
let str = `we are open on ${properties.length} days:`;
console.log(str);
for (const day of properties) {
  str += `${day},`;
}
console.log(str);

// Property value
const value = Object.values(openingHours);
console.log(value);

// Entries object
const entries = Object.entries(openingHours);
console.log(entries);
for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and closed at ${close}`);
}
*/

/*
// --------------- coding challange-----------
const odds = {
  team1: 1.3,
  x: 3.25,
  team2: 6.5,
};
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds,
};

for (const [i, name] of game.scored.entries()) {
  console.log(`Goal ${i + 1}: ${name}`);
}
const ods = Object.values(odds);
let sum = 0;
for (const odd of ods) {
  sum += odd;
}
const avg = sum / ods.length;
console.log(avg);

for (const [team, odd] of Object.entries(odds)) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`odd of ${teamStr} : ${odd}`);
}
*/

/*
// sets

const orderSet = new Set(['pizza', 'pasta', 'pizza', 'Risotto', 'pasta']);

console.log(orderSet.size);
orderSet.add('garlic bread');
orderSet.add('garlic bread');
orderSet.delete('pizza');
// orderSet.clear();
console.log(orderSet);

for (const order of orderSet) console.log(order);

// Example
const staff = ['waiter', 'chef', 'waiter', 'manager', 'chef'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);
*/

/*
// Map

const rest = new Map();
rest.set('Name', 'Ristico');
rest.set(1, 'Focaccia');
rest.set(2, 'garlic bread');

console.log(rest);
rest
  .set('category', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set(open, 11)
  .set(close, 21)
  .set(true, 'We are open :D')
  .set(false, 'we are closed :)');

console.log(rest.get('Name'));
console.log(rest.get(2));

const time = 10;
console.log(rest.get(time > rest.get(open) && time < rest.get(close)));
*/

/*
// Map iteration
const question = new Map([
  ['question', 'What is the best programming language'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'Javascript'],
  ['correct', 3],
  [true, 'correct'],
  [false, 'Try again'],
]);
console.log(question);

// Converting object to maps
console.log(Object.entries(openingHours));
const newHour = new Map(Object.entries(openingHours));
console.log(newHour);

// converting maps to array

console.log([...question]);

// Quiz app
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}:${value}`);
}
const answer = Number(prompt(question.get('question')));
console.log(answer);
console.log(question.get(answer === question.get('correct')));
*/

/*
// --------------coding challange----------

const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '� Substitution'],
  [47, '⚽ GOAL'],
  [61, '� Substitution'],
  [64, '� Yellow card'],
  [69, '� Red card'],
  [70, '� Substitution'],
  [72, '� Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '� Yellow card'],
]);
console.log(gameEvents.values());
const events = [...new Set(gameEvents.values())];
console.log(events);

gameEvents.delete(64);
console.log(`"An event happened, on 
average, every ${90 / gameEvents.size} minutes`);

for (const [key, value] of gameEvents) {
  key < 45
    ? console.log(`[FIRST HALF]${key}: ${value}`)
    : console.log(`[SECOND HALF]${key}: ${value}`);
}
*/
/*
// Strings part 1
const airline = 'TAP Air Portugal';
const plane = 'A320';
console.log(plane[0]);
console.log(plane[1]);
console.log(airline.length);
console.log(plane.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('Portugal'));

console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(airline.lastIndexOf('P')));

const checkMiddleSeat = function (seat) {
  // B and E are middle seat
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('You got the middle seat');
  else console.log('You got luckly');
};
checkMiddleSeat('11B');
checkMiddleSeat('12D');
checkMiddleSeat('13E');
*/

// string part 2
const airLine = 'TAP Air Portugal';
console.log(airLine.toLocaleLowerCase());
console.log(airLine.toUpperCase());

// Fix capitalization in name
const passanger = 'WiLLson'; //Willson
const passangerLower = passanger.toLocaleLowerCase();
const passangerCorrect = passangerLower[0] + passangerLower.slice(1);
console.log(passangerCorrect);

// Comparing email
const email = 'willsonghimire58@gmail.com';
const loginEmail = '   WillSONghimire58@Gmail.com \n';
// const lowerEmail = loginEmail.toLocaleLowerCase();
// const trimmedEmail = lowerEmail.trim();

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);

console.log(email === normalizedEmail);

// Replacing
const priceNp = '322,34R';
const priceUs = priceNp.replace('R', '$').replace(',', '.');
console.log(priceUs);

const announcement = 'All passanger come to bording door 33. Bording door 33!';
console.log(announcement.replace('door', 'gate'));

// console.log(announcement.replaceAll('door', 'gate'));
console.log(announcement.replace(/door/g, 'gate'));

// Boolean
const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('Airbo'));
console.log(plane.startsWith('Air'));

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log('Part of NEW Airbus family');
}

// Practice exercise
const checkBaggage = function (items) {
  const baggage = items.toLocaleLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are NOT allowed on board');
  } else {
    console.log('You are abroad');
  }
};
checkBaggage('I have a laptop, some Food and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');

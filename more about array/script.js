'use strict';
/*
// slice(doesnot muted original array)
let arr = ['a', 'b', 'c', 'd', 'e', 'f'];
console.log(arr.slice(2));
console.log(arr);
console.log(arr.slice(2, 4));
console.log(arr.slice(-1));
console.log(arr.slice(-2));
console.log(arr.slice(1, -1));
console.log(arr.slice());
console.log([...arr]);

// splice (muted original array)
// console.log(arr.splice(2));
console.log(arr.splice(1, 2));
console.log(arr);
console.log(arr.splice(-1));
console.log(arr);

// reverse
arr = ['a', 'b', 'c', 'd', 'e', 'f'];
const arr2 = ['j', 'i', 'h', 'g'];
console.log(arr2.reverse());

// concat
const letter = arr.concat(arr2);
console.log(letter);
console.log([...arr, ...arr2]);

// join
console.log(letter.join('-'));

// at method
const arr3 = [1, 2, 3, 4, 5];
console.log(arr3[0]);
console.log(arr3.at(0));

console.log(arr3[arr3.length - 1]);
console.log(arr3.slice(-1)[0]);
console.log(arr3.at(-1));

console.log('willson'.at(0));
console.log('willson'.at(-1));
*/

/*
// forEach lopp over array
const movements = [400, 300, -600, 450, 500, -800, -3000];
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}:You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdraw ${Math.abs(movement)}`);
  }
}

console.log(`----forEach loop-----`); // break and continue doesnot work
movements.forEach(function (mov, i, arr) {
  if (mov > 0) {
    console.log(`Movement ${i + 1}:You deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1}: You withdraw ${Math.abs(mov)}`);
  }
});
*/
/*
// forEach with maps and sets
const curriencies = new Map([
  ['USD', 'United state dollar'],
  ['EUR', 'Euro'],
  ['GPD', 'Pound streling'],
]);
curriencies.forEach(function (value, key, map) {
  console.log(`${key}:${value}`);
});

const currienciesUniqie = new Set(['USD', 'EUR', 'USD', 'GPD', 'EUR']);
currienciesUniqie.forEach(function (value, _, set) {
  console.log(`${value}:${value}`);
});
*/
/*
// -------------cooding challange ----------
const juliasDog = [3, 5, 2, 12, 7];
const kateDog = [4, 1, 15, 8, 3];

const checkDogs = function (dogsJulia, dogsKate) {
  const copyJuliasDog = [...dogsJulia];
  copyJuliasDog.splice(0, 1);
  copyJuliasDog.splice(-2);
  const dogs = copyJuliasDog.concat(dogsKate);
  console.log(dogs);
  dogs.forEach(function (val, i) {
    if (val > 3) {
      console.log(`Dog number ${i + 1} is an adult`);
    } else {
      console.log(`Dog number ${i + 1} is still puppy`);
    }
  });
};
checkDogs(juliasDog, kateDog);
*/

/*
// map method
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const usd = 1.1;
// const movementsUSD = movements.map(function (mov) {
//   return mov * usd;
const movementsUSD = movements.map(mov => mov * usd);

console.log(movements);
console.log(movementsUSD);

const movementUSDFor = [];
for (const mov of movements) movementUSDFor.push(mov * usd);
console.log(movementUSDFor);

const movementsDescription = movements.map(
  (mov, i) =>
    `Movement ${i + 1}:You ${mov > 0 ? 'deposite' : 'withdrew'} ${Math.abs(
      mov
    )}`
);
console.log(movementsDescription);
*/
/*
// filter method
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const deposit = movements.filter(function (mov) {
  return mov > 0;
});
console.log(deposit);

const depositFor = [];
for (const mov of movements) if (mov > 0) depositFor.push(mov);
console.log(depositFor);

const withdrewl = movements.filter(function (mov) {
  return mov < 0;
});
console.log(withdrewl);
*/

/*
// reduced method
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const balance = movements.reduce(function (acc, cur, i, arry) {
//   console.log(`Iteration ${i}: acc=${acc}`);
//   return acc + cur;
// }, 0);
const balance = movements.reduce((acc, cur) => acc + cur, 0);

console.log(balance);

let balance2 = 0;
for (const mov of movements) balance2 += mov;
console.log(balance2);

// max number
const max = movements.reduce((acc, mov) => {
  if (acc > mov) return acc;
  else return mov;
}, movements[0]);
console.log(max);
*/

// ---------------coding challange----------------

const calcAverageHumanAge = function (ages) {
  const humanAge = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
  const adultHuman = humanAge.filter(age => age > 18);
  console.log(humanAge);
  console.log(adultHuman);
  const average = adultHuman.reduce(
    (acc, age) => acc + age / adultHuman.length,
    0
  );
  return average;
};
const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
console.log(avg1, avg2);

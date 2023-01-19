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

// forEach lopp over array
const movements = [400, 300, -600, 450, 500, -800, -3000];
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}:You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdraw ${Math.abs(movement)}`);
  }
}

console.log(`----forEach loop-----`);
movements.forEach(function (mov, i, arr) {
  if (mov > 0) {
    console.log(`Movement ${i + 1}:You deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1}: You withdraw ${Math.abs(mov)}`);
  }
});

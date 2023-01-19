'use strict';

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
